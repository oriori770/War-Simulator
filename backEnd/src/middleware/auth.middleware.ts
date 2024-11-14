import jsonwebtoken from "jsonwebtoken";
import { IUser } from "../model/User.model";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { log } from "console";


interface AuthRequest extends Request {
    user?: { userId: string, organization: string};
};  

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {    
    const token = req.header('authorization')?.replace('Bearer', '').trim();    
    if (!token) {
        res.status(401).json({ message: 'אין לך תוקן התנתק וזריז' });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string, organization: string, }
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'הטוקן לא בתוקף' });
    }
}

export const IDFAuthMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    log(req.user)
    if (req.user?.organization === "IDF") {
        next()
    } else {
        res.status(403).json({message: "Access denied, IDF only!"})
    }
}



// function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
//     try {
//         const authCookies  = req.cookies.token;        
//         if (!authCookies) return res.status(401).json({ error: "Access denied" });
//         const token = authCookies.split(" ")[1];        
//         const decoded: any = jsonwebtoken.verify(
//             token,
//             process.env.JWT_SECRET as string
//         );        
//         req.userId = decoded ;        
//         next(); 
//         } catch (err) { res.status(401).json({err});}
// }
// interface AuthRequest extends Request {
//     user?: { userId: string, isAdmin?: boolean };
// };  