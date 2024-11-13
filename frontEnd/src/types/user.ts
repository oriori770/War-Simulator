export interface IUser {
    _id: string;
    userName: string;
    IsVoted: boolean;
    IsAdmin: boolean;
    votedFor: string|null;
}