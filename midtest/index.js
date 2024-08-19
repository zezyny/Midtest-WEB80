import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { RootRouterV1 } from './routes/index.js';

dotenv.config();


await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connect DB Success!');
});
const app = express();

app.use(express.json());
app.use('/api/v1', RootRouterV1);

app.listen(process.env.PORT, async () => {
    console.log('Server is running!');
});