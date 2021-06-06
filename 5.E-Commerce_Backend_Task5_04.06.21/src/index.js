import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import categoriesRoutes from './routes/categories.js';

dotenv.config();
const server = express();
server.use(bodyParser.json());

server.use('/Categories', categoriesRoutes);

server.listen(process.env.PORT, () => {
    console.log(`Express is up and running on port ${process.env.PORT}`);
})