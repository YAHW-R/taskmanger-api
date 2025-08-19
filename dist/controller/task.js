"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasksByUserId = exports.getTaskById = exports.getTasks = void 0;
const mongo_1 = __importDefault(require("../model/mongo"));
const task_1 = __importDefault(require("../model/task"));
const getTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to retrieve tasks from the database
    const tasks = yield task_1.default.find({});
    return tasks;
});
exports.getTasks = getTasks;
const getTaskById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to retrieve a task by ID from the database
    const task = yield task_1.default.findById(id);
    return task;
});
exports.getTaskById = getTaskById;
const getTasksByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to retrieve tasks by user ID from the database
    const tasks = yield task_1.default.find({ userId });
    return tasks;
});
exports.getTasksByUserId = getTasksByUserId;
const createTask = (taskData) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to create a new task in the database
    const newTask = new task_1.default(taskData);
    yield newTask.save();
    return newTask;
});
exports.createTask = createTask;
const updateTask = (id, taskData) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to update an existing task in the database
    const updatedTask = yield task_1.default.findByIdAndUpdate(id, taskData, { new: true });
    return updatedTask;
});
exports.updateTask = updateTask;
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to delete a task from the database
    const deletedTask = yield task_1.default.findByIdAndDelete(id);
    return deletedTask;
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.js.map