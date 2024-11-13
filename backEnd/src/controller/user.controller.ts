import  { Request, Response } from "express";
import {bringsAllUsers, GettingAllCandidate} from "../dal/user.dal"

import classTeacherModel,  {ICanidate} from "../model/Candidate.model";
import studentModel, {IUser} from "../model/User.model";


export async function getAllUser(req: Request, res: Response): Promise<void> {
    const allData = await bringsAllUsers(); ;
    res.status(200).json(allData);
};


export async function GetAllCandidate(req: Request, res: Response): Promise<void> {

    const allData = await GettingAllCandidate(); ;
    res.status(200).json(allData);
};

