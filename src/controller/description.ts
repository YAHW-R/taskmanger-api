import { projectDescription } from "../data/project";

export const getProjectDescription = (): string => {
    return JSON.stringify(projectDescription, null, 2);
}

export const editPojectName = (name: string): void => {
    projectDescription.projectName = name;
}

export const editProjectGeneralInformation = (generalInformation: string): void => {
    projectDescription.generalInformation = generalInformation;
}

export const addProjectGeneralFunction = (functionName: string): void => {
    projectDescription.generalFunctions.push(functionName);
}

export const removeProjectGeneralFunction = (functionName: string): boolean => {
    const index = projectDescription.generalFunctions.indexOf(functionName);
    if (index > -1) {
        projectDescription.generalFunctions.splice(index, 1);
        return true;
    }
    return false;
}

export const addProjectStructure = (structure: string[]): void => {
    projectDescription.structure.push(structure);
}

export const removeProjectStructure = (structure: string[]): boolean => {
    const index = projectDescription.structure.findIndex(s => JSON.stringify(s) === JSON.stringify(structure));
    if (index > -1) {
        projectDescription.structure.splice(index, 1);
        return true;
    }
    return false;
}

export const setAdminPassword = (password: string): void => {
    projectDescription.adminPassword = password;
}