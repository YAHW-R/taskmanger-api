import express from "express";

import user from "./routes/user";
import task from "./routes/task";
import description from "./routes/description";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/user", user);
app.use("/task", task);
app.use("/description", description);

app.get("/", (req, res) => {
    res.send("Welcome to the API! Available routes: /user, /task, /description");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});