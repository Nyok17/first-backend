import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos.js';

const PORT = process.env.PORT || 3000
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//mongoose part
try {
    mongoose.connect(process.env.MONGO_URI,
        {useNewUrlParser: true, useUnifiedTopology: true});
    
        console.log('Connected to MongoDB');

} catch (error) {
   console.error('Failed to connect to MongoDB', error) 
}

app.get('/', (req, res)=>{
    res.send('This is my api')
})



app.use('/todos', todoRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started running on port ${PORT}`);
})