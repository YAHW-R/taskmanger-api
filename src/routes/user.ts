import express from "express";
const router = express.Router();

router.get("/user", (req, res) => {
    res.send("User route");
});

router.post("/user", (req, res) => {
    res.send("User created");
});

router.put("/user/:id", (req, res) => {
    res.send(`User with ID ${req.params.id} updated`);
});

