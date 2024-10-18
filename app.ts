import express, { json } from 'express';
import { router } from './src/routes/routes';

const app = express();

app.use(json());

app.use(router);

export default app;