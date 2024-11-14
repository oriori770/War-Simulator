import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, organization: string): string => {
    return jwt.sign({userId, organization}, process.env.JWT_SECRET as string, {expiresIn: '8h'})
}