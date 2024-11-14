import { Types } from "mongoose";

export interface IMissiles extends Document {
  name: string;
  status: MissileStatus;
  to: string;
  LaunchedBy: string | Types.ObjectId;  
  LaunchTime?: Date;
  timeToHit(): number
}
export interface IMissilesInJson {
    name: string;
    description: string;
    speed: number;
    intercepts: Intercepts[];
    price: number;
}

export type MissileStatus = "Hit" | "intercepted" | "Launched" 
export type Intercepts =
  | "Qassam"
  | "M-75"
  | "Fajr-5"
  | "Zelzal-2"
  | "Shahab-3"
  | "Fateh-110"
  | "Quds-1";
