import UserModel, {IUser} from "../model/User.model"; 
import missileModel from "../model/missiles.model"
import { IMissiles } from "../types/missiles";

export async function   createNewMissiles(missiles:Partial<IMissiles>): Promise<IMissiles> {
    missiles.to = "IDF - " + missiles.to;
    missiles.LaunchTime = new Date();
    const newMissile = new missileModel(missiles);
    await newMissile.save();
    return newMissile
}

export async function readAllMissiles(): Promise<IMissiles[]> {
    const missiles = await missileModel.find();
    return missiles;
}
export async function readMissileByUserId(id: string): Promise<IMissiles[] | null> {
    const missile = await missileModel.find({LaunchedBy: id});
    if(!missile) throw new Error("missile not found");
    return missile;
}
export async function readMissileByArea(area: string): Promise<IMissiles[] | null> {
    const missile = await missileModel.find({to: area});
    if(!missile) throw new Error("missile not found");
    
    return missile;
}
