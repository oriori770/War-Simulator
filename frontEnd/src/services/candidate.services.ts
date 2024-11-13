import {  ICandidate} from "../types/candidate";
import axios from "axios";
const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const getCandidates = async (token: string): Promise<ICandidate[]> => {
    const response = await axios.get(`${BASE_URL}/candidate`, { headers: { authorization: `Bearer ${token}` } });
    return response.data;
};