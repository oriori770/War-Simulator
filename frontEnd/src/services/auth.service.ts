import axios from "axios";
import { IUser } from "../types/user";
import { argForHandleClik } from "../types/form";
const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const login = async (userName: string, password: string): Promise<{user: IUser, token: string}> => {
    const response = await axios.post(`${BASE_URL}/login`, { userName, password });
    return response.data 
}

export const RgisterToWeb = async (userName: string, password: string, organization: string): Promise<{user: IUser, message: string}> => {
    const response = await axios.post(`${BASE_URL}/register`, { userName, password, organization });
    return response.data 
}


