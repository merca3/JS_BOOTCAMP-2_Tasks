import express from 'express';

import usersRoutes from './routes/users.js';

const server = express();

server.use('/users', usersRoutes);

server.listen(8070, () => {
    console.log('Express is up and running');
})