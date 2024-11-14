import mongoose, { Document, Schema, Types } from "mongoose";
import bcrypt from "bcrypt";
import { IMissileInStock } from "../types/organizations";
import {defaultMissileForUser} from "../utils/user"
import { log } from "console";

export interface IUser extends Document {
  userName: string;
  organization: string;
  hashedPassword: string;
  resources: IMissileInStock[];
  comparePassword(password:string):Promise<boolean>

}
const MissileInStockSchema: Schema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  amount: { type: Number, required: [true, "Amount is required"] },
})

const UserSchema: Schema = new Schema({
  userName: { type: String, required: true, unique: true },
  organization: { type: String , required: [true, "Organization is required"] },
  hashedPassword: { type: String, required: [true, "Password is required"] },
  resources: { type: [MissileInStockSchema], required: false, default:[]} ,
});


UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("hashedPassword")) return next();
  this.hashedPassword = await bcrypt.hash(this.hashedPassword, 10);
  next();
});
UserSchema.pre<IUser>("save", async function (next) {
  console.log(this.isNew,"UserSchema.pre 2" );
  if (!this.isNew) return next();
  this.resources = defaultMissileForUser(this.organization)
  next();
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.hashedPassword);
};

// Export the model
export default mongoose.model<IUser>("user", UserSchema);
