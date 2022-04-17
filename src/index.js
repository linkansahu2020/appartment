const express = require('express');
const connect = require('./configs/db')
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

const User = require("./models/user.model")
const {login,signup} = require('./controllers/auth.controller')
const postController = require('./controllers/post.controller')
const flatsController = require('./controllers/flats.controller')

app.use('/flat',postController);
app.use('/flats',flatsController);
app.post("/signup",signup);
app.post("/login",login);
app.get("/users",async(req,res)=>{
    try{
        const users = await User.find().lean().exec();
        return res.status(201).send(users);
    } catch(err){
        return res.status(500).send({Error: err.message})
    }
})

const PORT = 2345;
app.listen(PORT,async()=>{
    try{
        await connect();
    } catch(err){
        console.log(err.message)
    }
})
