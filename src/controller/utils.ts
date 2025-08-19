// data structure for task management API

import { ITask } from "../model/task";
import { IUser } from "../model/User";

export const confirmUser = (userInfo: IUser): boolean => {
    // Logic to confirm user information
    return userInfo && userInfo.username && userInfo.password && userInfo.range !== 'admin' && userInfo.range !== 'user' ? true : false;
}

export const confirmTask = (taskInfo: ITask): boolean => {
    // Logic to confirm task information
    return taskInfo && taskInfo.title && taskInfo.description && taskInfo.status ? true : false;
}