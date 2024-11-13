import mongoose, { Document, Schema, Types } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  userName: string;
  IsAdmin: boolean;
  IsVoted: boolean;
  votedFor: Types.ObjectId | null;
  hashedPassword: string;
  comparePassword(password:string):Promise<boolean>

}

const UserSchema: Schema = new Schema({
  userName: { type: String, required: true, unique: true },
  IsVoted: { type: Boolean, default: false },
  IsAdmin: { type: Boolean, default: false },
  votedFor: { type: Schema.Types.ObjectId, default: null, ref: "candidate" , required: false },
  hashedPassword: { type: String, required: [true, "Password is required"] },
});

UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("hashedPassword")) return next();
  this.hashedPassword = await bcrypt.hash(this.hashedPassword, 10);
  next();
});


UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.hashedPassword);
};

// Export the model
export default mongoose.model<IUser>("user", UserSchema);
