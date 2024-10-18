import { NextFunction, Request, Response } from "express";
import * as httpResponse from '../utils/http-helper';

// Essa função não está validando o TOKEN, apenas exemplo de implementação.
export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authHeader = req.headers.authorization || '';

        const token = authHeader.split(' ')[1];

        if (token) {
            return next()
        };

        const response = await httpResponse.notAuthorized();

        res.status(response.statusCode).send(response.body)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};