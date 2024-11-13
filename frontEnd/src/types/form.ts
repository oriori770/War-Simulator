import { IUser } from "./user"

export interface argForHandleClik{
    nameRef: React.RefObject<HTMLInputElement>,
    passwordRef: React.RefObject<HTMLInputElement>
}
export type handleclick  = ({nameRef, passwordRef}: argForHandleClik) => Promise<void>//{user: IUser, token?: string}>
