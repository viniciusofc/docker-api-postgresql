import { Request, Response } from "express";
import * as userService from "../service/userService";

export const getAllUserController = async (req: Request, res: Response) => {
    try {
        const httpResponse = await userService.getAllUserService();

        res.status(httpResponse.statusCode).json(httpResponse.body);

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const httpResponse = await userService.getUserByIdService(Number(id));

        res.status(httpResponse.statusCode).json(httpResponse.body);

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createUserController = async (req: Request, res: Response) => {
    try {
        const data = req.body;

        const httpResponse = await userService.createUserService(data);

        res.status(httpResponse.statusCode).json(httpResponse.body);

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const httpResponse = await userService.deleteUserByIdService(Number(id));

        res.status(httpResponse.statusCode).json(httpResponse.body);

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' });
    }
};

