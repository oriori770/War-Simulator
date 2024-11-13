import axios from "axios";
const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const vote = async (userId: string, candidateId: string, token: string): Promise<boolean> => {
    const response = await axios.post(`${BASE_URL}/vote`, { userId, candidateId }, { headers: { authorization: `Bearer${token}`} });
    return response.data
}
export const cancelVote = async (userId: string, candidateId: string, token: string): Promise<boolean> => {
    const response = await axios.post(`${BASE_URL}/cancelVote`, { userId, candidateId }, { headers: { authorization: `Bearer${token}`} });
    return response.data
}
