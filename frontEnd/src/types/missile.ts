export interface DtoNewMissile {
  name: string;
  status: string;
  to: string;
  LaunchedBy: string;
}
export interface missileInList {
  _id: string;
  name: string;
  status: string;
  LaunchTime: string;
}
export interface IMissilesInJson {
  name: string;
  description: string;
  speed: number;
  intercepts: Intercepts[];
  price: number;
}
export type Intercepts =
  | "Qassam"
  | "M-75"
  | "Fajr-5"
  | "Zelzal-2"
  | "Shahab-3"
  | "Fateh-110"
  | "Quds-1";