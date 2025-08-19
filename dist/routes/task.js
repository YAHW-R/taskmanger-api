"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("../controller/task");
const utils_1 = require("../controller/utils");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    (0, task_1.getTasks)()
        .then(tasks => res.json(tasks))
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.get("/:id", (req, res) => {
    const id = req.params.id;
    (0, task_1.getTaskById)(id)
        .then((task) => {
        if (task) {
            res.json(task);
        }
        else {
            res.status(404).json({ error: "Task not found" });
        }
    })
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.get("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    (0, task_1.getTasksByUserId)(userId)
        .then(tasks => res.json(tasks))
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.post("/", (req, res) => {
    if (!req.body)
        return res.status(400).json({ error: "Bad Request" });
    const taskData = req.body;
    if (!(0, utils_1.confirmTask)(taskData)) {
        return res.status(400).json({ error: "Invalid task data" });
    }
    if (req.headers["X-sender-id"] !== "admin" && req.headers["X-sender-id"] !== taskData.userId) {
        return res.status(403).json({ error: "Forbidden" });
    }
    (0, task_1.createTask)(taskData)
        .then((newTask) => res.status(201).json(newTask))
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.put("/:id", (req, res) => {
    const id = req.params.id;
    if (req.headers["X-sender-id"] !== "admin") {
        return res.status(403).json({ error: "Forbidden" });
    }
    const taskData = req.body;
    (0, task_1.updateTask)(id, taskData)
        .then((updatedTask) => {
        if (updatedTask) {
            res.json(updatedTask);
        }
        else {
            res.status(404).json({ error: "Task not found" });
        }
    })
        .catch((err) => res.status(500).json({ error: err.message }));
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (req.headers["X-sender-id"] !== "admin") {
        return res.status(403).json({ error: "Forbidden" });
    }
    (0, task_1.deleteTask)(id)
        .then((deletedTask) => {
        if (deletedTask) {
            res.json(deletedTask);
        }
        else {
            res.status(404).json({ error: "Task not found" });
        }
    })
        .catch((err) => res.status(500).json({ error: err.message }));
});
exports.default = router;
//# sourceMappingURL=task.js.map