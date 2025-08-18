import { Schema, Document, model, models } from "mongoose";

export interface ITask extends Document {
     id: string,
     name: string,
     description: string,
     status: "todo" | "in-progress" | "done",
     userId: string,
     createdAt: Date,
     updatedAt: Date,
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
     name: {
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
          enum: ["todo", "in-progress", "done"],
          default: "todo"
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
     updatedAt: {
          type: Date,
          default: Date.now
     },
     finallyAT: {
          type: Date,
          default: null
     }
});

export default models.Task || model<ITask>("Task", TaskSchema);
