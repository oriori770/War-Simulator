import  { Request, Response } from "express";
import {CancelVoteForCandidate, voteForCandidate, } from "../dal/vote.dal"

export async function postVote(req: Request, res: Response): Promise<void> {    
    const {userId , candidateId, } = req.body;
    if (!userId || !candidateId) {
        res.status(400).json({ message: "Missing studentId or candidateId" });
        return;
    }
    const vote = await voteForCandidate(userId, candidateId);
    if (!vote) {
        res.status(400).json({ message: "vote not update" });
        return;
    }
    res.status(200).json({ message: "vote updated successfully" });
}
export async function postCancelVote(req: Request, res: Response): Promise<void> {
    const {userId , candidateId, } = req.body;
    if (!userId || !candidateId) {
        res.status(400).json({ message: "Missing studentId or candidateId" });
        return;
    }
    const vote = await CancelVoteForCandidate(userId, candidateId);
    if (!vote) {
        res.status(400).json({ message: "vote not update" });
        return;
    }
    res.status(200).json({ message: "vote cancelled successfully" });
}