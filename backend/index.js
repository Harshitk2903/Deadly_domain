//importing express
const express = require('express');
const UserRouter =require('./routers/UserRouter');
// Adding env
require('dotenv').config();

//initialize express
const app = express();

const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());

app.use('/user',UserRouter);

// endpoint on routes
app.get('/',(req,res)=>{
     res.send('Response from express');
})


// getall delete update
 
//Starting Server
app.listen(port, () => {
    console.log('Server Started');
});