import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, IsAdmin: boolean): string => {
    return jwt.sign({userId, IsAdmin}, process.env.JWT_SECRET as string, {expiresIn: '4h'})
}