import connectDB from "../model/mongo";
import Task, { ITask } from "../model/task";

export const getTasks = async () => {
    await connectDB();
    // Logic to retrieve tasks from the database
    const tasks: ITask[] = await Task.find({});
    return tasks;
}

export const getTaskById = async (id: string) => {
    await connectDB();
    // Logic to retrieve a task by ID from the database
    const task: ITask | null = await Task.findById(id);
    return task;
}

export const getTasksByUserId = async (userId: string) => {
    await connectDB();
    // Logic to retrieve tasks by user ID from the database
    const tasks: ITask[] = await Task.find({ userId });
    return tasks;
}

export const createTask = async (taskData: ITask) => {
    await connectDB();
    // Logic to create a new task in the database
    const newTask: ITask = new Task(taskData);
    await newTask.save();
    return newTask;
}

export const updateTask = async (id: string, taskData: Partial<ITask>) => {
    await connectDB();
    // Logic to update an existing task in the database
    const updatedTask: ITask | null = await Task.findByIdAndUpdate(id, taskData, { new: true });
    return updatedTask;
}

export const deleteTask = async (id: string) => {
    await connectDB();
    // Logic to delete a task from the database
    const deletedTask: ITask | null = await Task.findByIdAndDelete(id);
    return deletedTask;
}

