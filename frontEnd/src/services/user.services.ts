import axios from "axios";
import {IUser} from "../types/user";
const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const mockUsers: IUser[] = [
    { _id: "1", userName: "user1", organization: "org1", resources: [] },
    { _id: "2", userName: "user2", organization: "org2", resources: [] },
    { _id: "3", userName: "user3", organization: "org3", resources: [] },
]

export const getUsers = async (token: string): Promise<IUser[]> => {
    // const response = await axios.get(`${BASE_URL}/users`, { headers: { authorization:`Bearer${token}` } });
    return mockUsers
};