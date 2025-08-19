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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const mongo_1 = __importDefault(require("../model/mongo"));
const User_1 = __importDefault(require("../model/User"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to retrieve users from the database
    const users = yield User_1.default.find({});
    return users;
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to retrieve a user by ID from the database
    const user = yield User_1.default.findById(id);
    return user;
});
exports.getUserById = getUserById;
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to create a new user in the database
    const newUser = new User_1.default(userData);
    yield newUser.save();
    return newUser;
});
exports.createUser = createUser;
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to update an existing user in the database
    const updatedUser = yield User_1.default.findByIdAndUpdate(id, userData, { new: true });
    return updatedUser;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongo_1.default)();
    // Logic to delete a user from the database
    const deletedUser = yield User_1.default.findByIdAndDelete(id);
    return deletedUser;
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map