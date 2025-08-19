"use strict";
// data structure for task management API
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmTask = exports.confirmUser = void 0;
const confirmUser = (userInfo) => {
    // Logic to confirm user information
    return userInfo && userInfo.username && userInfo.password && userInfo.range !== 'admin' && userInfo.range !== 'user' ? true : false;
};
exports.confirmUser = confirmUser;
const confirmTask = (taskInfo) => {
    // Logic to confirm task information
    return taskInfo && taskInfo.title && taskInfo.description && taskInfo.status ? true : false;
};
exports.confirmTask = confirmTask;
//# sourceMappingURL=utils.js.map