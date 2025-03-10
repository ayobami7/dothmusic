import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import {User} from './models/User';
import { AppDataSource } from './data-source';
import router from './routes/userRoutes';

const app = express();
const PORT  = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

//Creatw a database connection
AppDataSource.initialize()
.then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log('Error connecting to the database: ', error);
});

//Routes
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
app.use('api/users', router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});