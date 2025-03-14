// import dotenv from "dotenv";
// dotenv.config();
// import cors from 'cors';
import express from 'express';
import { AppDataSource } from './config/data-source';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT  = process.env.PORT || 4000;

// app.use(cors());
app.use(express.json());

//Create a database connection
AppDataSource.initialize()
.then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log('Error connecting to the database: ', error);
});

//Routes
app.use('/api/users', userRoutes)


// server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});