"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
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
exports.default = mongoose_1.models.Task || (0, mongoose_1.model)("User", exports.UserSchema);
//# sourceMappingURL=User.js.map