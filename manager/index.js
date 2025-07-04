
import express from 'express';
import connectDB from './Config/dbConfig.js';
import { PORT } from './Config/serverConfig.js';
import apirouter from './route/apirouter.js'

const app=express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

// registraqtion of router
app.use('/api',apirouter);


// what to do when get request on ping
app.get('/ping',(req,res)=>{
    console.log("hi");
    return res.json({
        message:'get request on ping made succesfully',
        code :'1234567'
    })
})

app.post('/home',(req,res)=>{
    console.log("home");
    console.log(req.query);//query params
    return res.json({
        message:'get request on home made succesfully',
        code :'1234567'
    })
})



// assigninig port and attaching it to server object 
app.listen(PORT,()=>{
    console.log(`Picker running on port ${PORT}`);
    connectDB();
    
})