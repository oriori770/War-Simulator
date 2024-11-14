import  { Request, Response } from "express";
import studentModel, {IUser} from "../model/User.model";
import {addNewUser, login} from "../dal/authUser.dal"
import {generateToken} from "../utils/auth"
import { log } from "console";
export async function postNewUser(req: Request, res: Response): Promise<IUser | void> {
    console.log(req.body);
    
    const { userName, password, organization } = req.body;
    const existingUser: IUser | null = await studentModel.findOne({ userName});
    if (existingUser) {
        res.status(400).json({ message: "User already exists" });
        return;
    }
    const user = await addNewUser({ userName, organization, hashedPassword:password });
    res.status(201).json({ message: "User created successfully" , user});
};
export async function postLogin(req: Request, res: Response): Promise<any> {
    console.log(req.body);
        const { userName, password } = req.body;
    if (!userName || !password) {
        res.status(400).json({ message: "Missing userName or password" });
        return;
    }
    else {
        const user = await login(userName, password);
        if (!user) {
            res.status(401).json({ message: "Incorrect userName or password" });
            return;
        }
        const token = generateToken(user._id as string, user.organization);
        res.status(200).json({ message: "Login successful", user, token });
    }
}