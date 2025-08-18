import connectDB from "../model/mongo"
import User, { IUser } from "../model/User";

export const getUsers = async () => {
    await connectDB();
    // Logic to retrieve users from the database
    const users: IUser[] = await User.find({});
    return users;
}

export const getUserById = async (id: string) => {
    await connectDB();
    // Logic to retrieve a user by ID from the database
    const user: IUser | null = await User.findById(id);
    return user;
}

export const createUser = async (userData: IUser) => {
    await connectDB();
    // Logic to create a new user in the database
    const newUser: IUser = new User(userData);
    await newUser.save();
    return newUser;
}

export const updateUser = async (id: string, userData: Partial<IUser>) => {
    await connectDB();
    // Logic to update an existing user in the database
    const updatedUser: IUser | null = await User.findByIdAndUpdate(id, userData, { new: true });
    return updatedUser;
}

export const deleteUser = async (id: string) => {
    await connectDB();
    // Logic to delete a user from the database
    const deletedUser: IUser | null = await User.findByIdAndDelete(id);
    return deletedUser;
}