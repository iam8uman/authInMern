const path = require('path')
const dotenv=require('dotenv').config({ path: path.resolve(__dirname, '../server/.env') })

// const dotenv=require('dotenv').config();
const express=require('express');
const cors=require('cors');
const userRoutes=require('../server/routes/user');
const authRoutes=require('../server/routes/auth');
const connection=require('./db');
connection();


const app=express();

app.use(express.json());
app.use(cors);
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);

const port=process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`Listening in the port ${port}`)
})