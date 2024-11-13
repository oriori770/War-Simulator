import mongoose, { Document, Schema } from "mongoose";


export interface ICanidate extends Document {
  name: string;
  image: string;
  voted: number;
}

const CandidateSchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  voted: { type: Number, default: 0 },
});

// CandidateSchema.pre<ICanidate>("save", async function (next) {
//   next();
// });

export default mongoose.model<ICanidate>("candidate", CandidateSchema);
