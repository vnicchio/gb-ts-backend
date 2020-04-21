import 'reflect-metadata';
import express from 'express';

import './database';
import routes from './routes';

const app = express();
app.use(routes);

app.get('/', (request, response) => response.json({ ok: true }));

export default app;
