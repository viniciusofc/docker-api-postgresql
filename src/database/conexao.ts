require('dotenv').config();
import { Pool } from 'pg';

const connectPoll = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT)
});

export const query = async (text: string, params?: any[]) => {
    const client = await connectPoll.connect();

    try {
        await client.query('BEGIN');

        const result = await client.query(text, params);

        await client.query('COMMIT');
        return result.rows;
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};