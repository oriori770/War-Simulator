import axios from "axios";
import {IUser} from "../types/user";
const BASE_URL: string = import.meta.env.VITE_BASE_URL;

const mockUsers: IUser[] = [
    { _id: "1", userName: "user1", IsVoted: false, IsAdmin: false, votedFor: null },
    { _id: "2", userName: "user2", IsVoted: true, IsAdmin: false, votedFor: "3" },
    { _id: "3", userName: "user3", IsVoted: false, IsAdmin: false, votedFor: null },
    { _id: "4", userName: "user4", IsVoted: false, IsAdmin: false, votedFor: null },
    { _id: "5", userName: "user5", IsVoted: true, IsAdmin: true, votedFor: "1" },
]

export const getUsers = async (token: string): Promise<IUser[]> => {
    const response = await axios.get(`${BASE_URL}/users`, { headers: { authorization:`Bearer${token}` } });
    response.data = mockUsers
    return response.data;
};