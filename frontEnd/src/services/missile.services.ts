import {  ICandidate} from "../types/candidate";
import axios from "axios";
import {DtoNewMissile,missileInList} from "../types/missile"
const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const postMissile = async (missile:DtoNewMissile , token: string): Promise<ICandidate[]> => {
    const {name, status, to, LaunchedBy} = missile
    const response = await axios.post(`${BASE_URL}/missilesNew`,{name, status, to, LaunchedBy}, { headers: { authorization: `Bearer ${token}` } });
    return response.data;
};
export const getMissilesBySenderId = async ({token, senderId}:{token: string, senderId: string}): Promise<missileInList[]> => {
    console.log(`${BASE_URL}/missilesById/${senderId}`);
    
    const response = await axios.get(`${BASE_URL}/missilesById/${senderId}`, { headers: { authorization: `Bearer ${token}` } });
    return response.data.missile;
};
export const getMissilesByArea = async ({token, area}:{token: string, area: string}): Promise<missileInList[]> => {    
    const response = await axios.get(`${BASE_URL}/missilesByArea/${area}`, { headers: { authorization: `Bearer ${token}` } });
    return response.data.missile;
};