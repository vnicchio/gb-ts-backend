import 'reflect-metadata';
import express from 'express';

import './database';

const app = express();

app.get('/', (request, response) => response.json({ ok: true }));

export default app;
