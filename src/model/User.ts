import { Schema, Document, model, models } from "mongoose";

export const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    default: () => crypto.randomUUID() // Generate a unique ID
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  range: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user"
  }
});

export interface IUser extends Document {
  username: string;
  password: string;
  range: "admin" | "user";
}

export default models.Task || model<IUser>("User", UserSchema);