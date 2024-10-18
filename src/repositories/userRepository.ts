import { query } from "../database/conexao";
import { userModel } from "../models/userModel";


export const getAllUserRepository = async (): Promise<userModel[]> => {
    try {
        const result = await query('SELECT * FROM users');

        return result;

    } catch (error) {
        throw error;
    }
};

export const getUserByIdRepository = async (id: Number): Promise<userModel[]> => {
    try {
        const querySelect = 'SELECT * FROM users where id = $1';
        const queryValues = [id];

        const result = await query(querySelect, queryValues);

        return result;

    } catch (error) {
        throw error;
    }
};

export const createUserRepository = async (data: userModel): Promise<userModel[]> => {
    try {
        const queryInsert = 'INSERT INTO users(name, email) values($1, $2) RETURNING *';
        const queryValues = [data.name, data.email];

        const result = await query(queryInsert, queryValues);

        return result;

    } catch (error) {
        throw error;
    }
};

export const deleteUserByIdRepository = async (id: Number): Promise<userModel[]> => {
    try {
        const queryDelete = 'DELETE from users WHERE id = $1 RETURNING *';
        const queryValues = [id];

        const result = await query(queryDelete, queryValues);

        return result;

    } catch (error) {
        throw error;
    }
};