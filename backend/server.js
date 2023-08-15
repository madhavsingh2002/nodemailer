import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './routes/Route.js';
dotenv.config()
const app = express();


//midlewares
app.use(cors());
app.use(express.json());

// Routes:
app.use('/api/v1',router)
const  PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
