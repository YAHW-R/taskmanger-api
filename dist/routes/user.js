"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controller/user");
const utils_1 = require("../controller/utils");
const description_1 = require("../controller/description");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    (0, user_1.getUsers)()
        .then(users => res.json(users))
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.get("/:id", (req, res) => {
    const id = req.params.id;
    (0, user_1.getUserById)(id)
        .then((user) => {
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    })
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.post("/", (req, res) => {
    if (!req.body)
        return res.status(400).json({ error: "Bad Request" });
    const userData = req.body;
    if (!(0, utils_1.confirmUser)(userData)) {
        return res.status(400).json({ error: "Invalid user data" });
    }
    if (userData.range === 'admin') {
        if (req.headers["X-admin-password"] !== (0, description_1.getAdminPassword)()) {
            return res.status(403).json({ error: "Forbidden: Invalid admin password" });
        }
    }
    (0, user_1.createUser)(userData)
        .then((newUser) => res.status(201).json(newUser))
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.put("/:id", (req, res) => {
    const id = req.params.id;
    if (req.headers["X-sender-id"] !== "admin" && req.headers["X-sender-id"] !== id) {
        return res.status(403).json({ error: "Forbidden" });
    }
    const userData = req.body;
    (0, user_1.updateUser)(id, userData)
        .then((updatedUser) => {
        if (updatedUser) {
            res.json(updatedUser);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    })
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (req.headers["X-sender-id"] !== "admin" && req.headers["X-sender-id"] !== id) {
        return res.status(403).json({ error: "Forbidden" });
    }
    (0, user_1.deleteUser)(id)
        .then((deletedUser) => {
        if (deletedUser) {
            res.json(deletedUser);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    })
        .catch((err) => res.status(500).json({ error: err.message }));
});
exports.default = router;
//# sourceMappingURL=user.js.map