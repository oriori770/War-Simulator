import UserModel, {IUser} from "../model/User.model"; 
import { configDotenv } from "dotenv";

export async function bringsAllUsers(): Promise<IUser[]> {
    const user = await UserModel.find();
    if(user) return user   
    else throw new Error("student not found");
}


// export async function GettingAllCandidate(): Promise<ICanidate[]> {
//     const candidat = await candidateModel.find();
//     if(candidat) return candidat   
//     else throw new Error("student not found");
// } 

