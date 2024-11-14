export interface IUser {
    _id: string;
    userName: string;
    organization: string;
    resources: IMissileInStock[];
}
export interface IMissileInStock {
    name: string;
    amount: number;
  }