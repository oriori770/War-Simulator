import UserModel, {IUser} from "../model/User.model"; 
import candidateModel,{ICanidate} from "../model/Candidate.model"

export async function voteForCandidate(userId:string, candidateId:string): Promise<any> {
    console.log(userId,"userId");
    const user = await UserModel.findOneAndUpdate({ _id: userId, IsVoted: false}, { votedFor: candidateId, IsVoted: true });
    console.log(user, "user");
    
    const candidate = await candidateModel.findOneAndUpdate({ _id: candidateId }, { $inc :{ voted: 1 }});
    console.log(candidate, "candidate");
    
    if(user&&candidate) return true
    else throw new Error("vote not update");
}
export async function CancelVoteForCandidate(userId:string, candidateId:string): Promise<any> {
    const user = await UserModel.findOneAndUpdate({ _id: userId, IsVoted: true }, { votedFor: null, IsVoted: false });
    const candidate = await candidateModel.findOneAndUpdate({ _id: candidateId }, { $inc :{ voted: -1 }});
    if(user&&candidate) return true
    else throw new Error("vote not update");
}