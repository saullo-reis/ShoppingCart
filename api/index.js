import express from 'express';
import cors from 'cors';
import { router } from './routes/routes.js';
import bodyParser from 'body-parser';

const server = express();

server.set('view engine', 'jade');
server.use(cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
server.use(bodyParser.json({ limit: '10mb' }));
server.use(express.json());
server.use(router);

server.listen(3000)