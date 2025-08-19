"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminPassword = exports.setAdminPassword = exports.removeProjectStructure = exports.setProjectStructure = exports.addProjectStructure = exports.removeProjectGeneralFunction = exports.addProjectGeneralFunction = exports.setPojectGeneralFunctions = exports.editProjectGeneralInformation = exports.editPojectName = exports.getProjectDescription = void 0;
const project_1 = require("../data/project");
const getProjectDescription = () => {
    const description = project_1.projectDescription;
    return {
        projectName: description.projectName,
        generalInformation: description.generalInformation,
        generalFunctions: description.generalFunctions,
        structure: description.structure
    };
};
exports.getProjectDescription = getProjectDescription;
const editPojectName = (name) => {
    project_1.projectDescription.projectName = name;
};
exports.editPojectName = editPojectName;
const editProjectGeneralInformation = (generalInformation) => {
    project_1.projectDescription.generalInformation = generalInformation;
};
exports.editProjectGeneralInformation = editProjectGeneralInformation;
const setPojectGeneralFunctions = (functions) => {
    project_1.projectDescription.generalFunctions = functions;
};
exports.setPojectGeneralFunctions = setPojectGeneralFunctions;
const addProjectGeneralFunction = (functionName) => {
    project_1.projectDescription.generalFunctions.push(functionName);
};
exports.addProjectGeneralFunction = addProjectGeneralFunction;
const removeProjectGeneralFunction = (functionName) => {
    const index = project_1.projectDescription.generalFunctions.indexOf(functionName);
    if (index > -1) {
        project_1.projectDescription.generalFunctions.splice(index, 1);
        return true;
    }
    return false;
};
exports.removeProjectGeneralFunction = removeProjectGeneralFunction;
const addProjectStructure = (structure) => {
    project_1.projectDescription.structure.push(structure);
};
exports.addProjectStructure = addProjectStructure;
const setProjectStructure = (structure) => {
    project_1.projectDescription.structure = structure;
};
exports.setProjectStructure = setProjectStructure;
const removeProjectStructure = (structure) => {
    const index = project_1.projectDescription.structure.findIndex(s => JSON.stringify(s) === JSON.stringify(structure));
    if (index > -1) {
        project_1.projectDescription.structure.splice(index, 1);
        return true;
    }
    return false;
};
exports.removeProjectStructure = removeProjectStructure;
const setAdminPassword = (password) => {
    project_1.projectDescription.adminPassword = password;
};
exports.setAdminPassword = setAdminPassword;
const getAdminPassword = () => {
    return project_1.projectDescription.adminPassword;
};
exports.getAdminPassword = getAdminPassword;
//# sourceMappingURL=description.js.map