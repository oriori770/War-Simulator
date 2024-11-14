export interface IOrganization {
    name: string;
    resources: IMissileInStock[];
}
export interface IMissileInStock {
  name: string;
  amount: number;
}
