import { Request, Response } from 'express';
import * as projectService from '../services/projectService';
import { HTTP_STATUS } from '../../../constants/httpConstants';

export const getProjects = (req: Request, res: Response) => {
    const data = projectService.getAllProjects();
    res.status(HTTP_STATUS.OK).json({
        message: "Projects retrieved",
        count: data.length,
        data
    });
};

export const getProjectById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const project = projectService.getProjectById(id);
    if (!project) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Project not found" });
    }
    res.status(HTTP_STATUS.OK).json({ data: project });
};

export const createProject = (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Name required" });
    const project = projectService.createProject(name);
    res.status(HTTP_STATUS.CREATED).json({
        message: "Project created",
        data: project
    });
};

export const updateProject = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const project = projectService.updateProject(id, req.body);
    if (!project) return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Project not found" });
    res.status(HTTP_STATUS.OK).json({ message: "Project updated", data: project });
};

export const deleteProject = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const success = projectService.deleteProject(id);
    if (!success) return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Project not found" });
    res.status(HTTP_STATUS.OK).json({ message: "Project deleted" });
};