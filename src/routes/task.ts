import { getTasks, getTaskById, getTasksByUserId, createTask, updateTask, deleteTask } from "../controller/task"
import { confirmTask } from "../controller/utils";
import { ITask } from "../model/task";

import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    getTasks()
        .then(tasks => res.json(tasks))
        .catch((err: any) => res.status(500).json({ error: err.message }));
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    getTaskById(id)
        .then((task: ITask | null) => {
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ error: "Task not found" });
            }
        })
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

router.get("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    getTasksByUserId(userId)
        .then(tasks => res.json(tasks))
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

router.post("/", (req, res) => {
    if (!req.body) return res.status(400).json({ error: "Bad Request" });

    const taskData = req.body;
    if (!confirmTask(taskData)) {
        return res.status(400).json({ error: "Invalid task data" });
    }

    if (req.headers["X-sender-id"] !== "admin" && req.headers["X-sender-id"] !== taskData.userId) {
        return res.status(403).json({ error: "Forbidden" });
    }

    createTask(taskData)
        .then((newTask: ITask) => res.status(201).json(newTask))
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    if (req.headers["X-sender-id"] !== "admin") {
        return res.status(403).json({ error: "Forbidden" });
    }

    const taskData: Partial<ITask> = req.body;
    updateTask(id, taskData)
        .then((updatedTask: ITask | null) => {
            if (updatedTask) {
                res.json(updatedTask);
            } else {
                res.status(404).json({ error: "Task not found" });
            }
        })
        .catch((err: any) => res.status(500).json({ error: err.message }));
});


router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (req.headers["X-sender-id"] !== "admin") {
        return res.status(403).json({ error: "Forbidden" });
    }

    deleteTask(id)
        .then((deletedTask: ITask | null) => {
            if (deletedTask) {
                res.json(deletedTask);
            } else {
                res.status(404).json({ error: "Task not found" });
            }
        })
        .catch((err: any) => res.status(500).json({ error: err.message }));
});

export default router;