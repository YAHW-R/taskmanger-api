"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
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
exports.default = mongoose_1.models.Task || (0, mongoose_1.model)("Task", TaskSchema);
//# sourceMappingURL=task.js.map