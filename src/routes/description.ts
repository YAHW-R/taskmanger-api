import { Router } from "express";
import { getProjectDescription, editPojectName, editProjectGeneralInformation, addProjectGeneralFunction, setPojectGeneralFunctions, addProjectStructure, setProjectStructure, setAdminPassword } from "../controller/description";
import { get } from "http";

const router = Router();

router.get("/", (req, res) => {
    try {
        const description = getProjectDescription();
        res.status(200).json(description);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve project description" });
    }
});

router.get("/project-name", (req, res) => {
    try {
        const description = getProjectDescription();
        res.status(200).json({ name: description.projectName });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve project name" });
    }
})

router.post("/project-name", (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Project name is required" });
    }

    try {
        editPojectName(name);
        res.status(200).json({ message: "Project name updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update project name" });
    }
});

router.get("/general-information", (req, res) => {
    try {
        const description = getProjectDescription();
        res.status(200).json({ generalInformation: description.generalInformation });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve project general information" });
    }
})

router.post("/general-information", (req, res) => {
    const { generalInformation } = req.body;
    if (!generalInformation) {
        return res.status(400).json({ error: "General information is required" });
    }

    try {
        editProjectGeneralInformation(generalInformation);
        res.status(200).json({ message: "Project general information updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update project general information" });
    }
});

router.get("/general-functions", (req, res) => {
    try {
        const description = getProjectDescription();
        res.status(200).json({ generalFunctions: description.generalFunctions });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve project general functions" });
    }
})

router.post("/general-functions", (req, res) => {
    const { functions } = req.body;
    if (!functions || !Array.isArray(functions) || functions.length === 0) {
        return res.status(400).json({ error: "the functions are required" });
    }

    try {
        setPojectGeneralFunctions(functions);
        res.status(200).json({ message: "Project general function seted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to set project general function" });
    }
});

router.put("/general-functions", (req, res) => {
    const { functionName } = req.body;
    if (!functionName) {
        return res.status(400).json({ error: "Function name is required" });
    }

    try {
        addProjectGeneralFunction(functionName);
        res.status(200).json({ message: "Project general function added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to add project general function" });
    }
});

router.get("/structure", (req, res) => {
    try {
        const description = getProjectDescription();
        res.status(200).json({ structure: description.structure });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve project structure" });
    }
})

router.post("/structure", (req, res) => {
    const { structure } = req.body;
    if (!structure || !Array.isArray(structure) || structure.length === 0) {
        return res.status(400).json({ error: "Structure is required" });
    }

    try {
        setProjectStructure(structure);
        res.status(200).json({ message: "Project structure seted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to set project structure" });
    }
});

router.put("/structure", (req, res) => {
    const { structure } = req.body;
    if (!structure || !Array.isArray(structure) || structure.length === 0) {
        return res.status(400).json({ error: "Structure is required" });
    }

    try {
        addProjectStructure(structure);
        res.status(200).json({ message: "Project structure added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to add project structure" });
    }
});


router.post("/set-admin-password", (req, res) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ error: "Password is required" });
    }

    if (req.headers["X-sender-id"] !== "admin") {
        return res.status(403).json({ error: "Forbidden: Only admin can set the password" });
    }

    try {
        setAdminPassword(password);
        res.status(200).json({ message: "Admin password set successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to set admin password" });
    }
});

export default router;