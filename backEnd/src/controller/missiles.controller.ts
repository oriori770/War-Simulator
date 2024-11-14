import  { Request, Response } from "express";
import {createNewMissiles, readMissileByUserId,readMissileByArea} from "../dal/missile.dal"
import { log } from "console";

export async function postNewMissile(req: Request, res: Response): Promise<void> {  
    const {name, status, to, LaunchedBy} = req.body;
    if (!name || !status || !to || !LaunchedBy) {
        res.status(400).json({ message: "Missing data" });
        return;
    }
    const missile = await createNewMissiles({name, status, to, LaunchedBy});
    if (!missile) {
        res.status(400).json({ message: "missile not launched" });
        return;
    }
    const timeToHit = missile.timeToHit();
    res.status(200).json({missile,timeToHit, message: "missile launched successfully" });
}
export const getMissileBySendId = async (req: Request, res: Response): Promise<void> => {
    const {Id} = req.params;
    const missile = await readMissileByUserId(Id);
    if (!missile) {
        res.status(400).json({ message: "missile not found" });
        return;
    }
    res.status(200).json({ missile, message: "missile found successfully" });
}
export const getMissileByArea = async (req: Request, res: Response): Promise<void> => {
    const {Area} = req.params;
    const missile = await readMissileByArea(Area);
    if (!missile) {
        res.status(400).json({ message: "missile not found" });
        return;
    }
    res.status(200).json({ missile, message: "missile found successfully" });
}
// export async function postCancelVote(req: Request, res: Response): Promise<void> {
//     const {userId , candidateId, } = req.body;
//     if (!userId || !candidateId) {
//         res.status(400).json({ message: "Missing studentId or candidateId" });
//         return;
//     }
//     const vote = await CancelVoteForCandidate(userId, candidateId);
//     if (!vote) {
//         res.status(400).json({ message: "vote not update" });
//         return;
//     }
//     res.status(200).json({ message: "vote cancelled successfully" });
// }