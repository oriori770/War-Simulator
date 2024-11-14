import mongoose, { Document, Schema } from "mongoose";
import { IMissiles,MissileStatus } from "../types/missiles";
import {FlightTimeOfMissile} from "../utils/Missiles"

const MissilesSchema: Schema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  status: { type: String, required: [true, "Status is required"] },
  to: { type: String, required: [true, "To is required"] },
  LaunchedBy: { type: Schema.Types.ObjectId, required: [true, "LaunchedBy is required"], ref: "user" },
  LaunchTime: { type: Date, required:[true, "LaunchTime is required"] },
})

MissilesSchema.methods.timeToHit = function (): number{
  const fullTime = FlightTimeOfMissile(this.name);
  const cuurentTime = fullTime - (this.LaunchTime - Date.now()/1000);
  return cuurentTime;
}

export default mongoose.model<IMissiles>("missiles", MissilesSchema);
