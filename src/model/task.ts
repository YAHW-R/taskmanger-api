import { Schema, Document, model, models } from "mongoose";

export interface ITask extends Document {
     id: string,
     title: string,
     description: string,
     status: "pending" | "in-progress" | "completed",
     userId: string,
     createdAt: Date,
     finallyAT: Date
}

const TaskSchema = new Schema<ITask>({
     id: {
          type: String,
          required: true,
          unique: true,
          trim: true,
          default: () => crypto.randomUUID() // Generate a unique ID
     },
     title: {
          type: String,
          required: true,
          trim: true
     },
     description: {
          type: String,
          required: true,
          trim: true
     },
     status: {
          type: String,
          required: true,
          enum: ["pending", "in-progress", "completed"],
          default: "pending"
     },
     userId: {
          type: String,
          required: true,
          trim: true
     },
     createdAt: {
          type: Date,
          default: Date.now
     },
     finallyAT: {
          type: Date,
          default: null
     }
});

export default models.Task || model<ITask>("Task", TaskSchema);
