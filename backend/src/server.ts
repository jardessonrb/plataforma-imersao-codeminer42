import 'reflect-metadata';
import './database/connection';
import express from 'express';
import cors from 'cors'
import { router } from './router';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use('/lessons', express.static(path.join(__dirname, 'lessons')));

app.listen(3333, () => {
    console.log("Server run", 3333);
})

