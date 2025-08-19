import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controller/user";
import { confirmUser } from "../controller/utils";
import { getAdminPassword } from "../controller/description";

import express from "express";
import { IUser } from "../model/User";
const router = express.Router();

router.get("/", (req, res) => {
    getUsers()
        .then(users => res.json(users))
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    getUserById(id)
        .then((user: IUser | null) => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        })
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

router.post("/", (req, res) => {
    if (!req.body) return res.status(400).json({ error: "Bad Request" });

    const userData: IUser = req.body;
    if (!confirmUser(userData)) {
        return res.status(400).json({ error: "Invalid user data" });
    }
    if (userData.range === 'admin') {
        if (req.headers["X-admin-password"] !== getAdminPassword()) {
            return res.status(403).json({ error: "Forbidden: Invalid admin password" });
        }
    }

    createUser(userData)
        .then((newUser: IUser) => res.status(201).json(newUser))
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    if (req.headers["X-sender-id"] !== "admin" && req.headers["X-sender-id"] !== id) {
        return res.status(403).json({ error: "Forbidden" });
    }

    const userData: Partial<IUser> = req.body;
    updateUser(id, userData)
        .then((updatedUser: IUser | null) => {
            if (updatedUser) {
                res.json(updatedUser);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        })
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (req.headers["X-sender-id"] !== "admin" && req.headers["X-sender-id"] !== id) {
        return res.status(403).json({ error: "Forbidden" });
    }

    deleteUser(id)
        .then((deletedUser: IUser | null) => {
            if (deletedUser) {
                res.json(deletedUser);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        })
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

export default router;


