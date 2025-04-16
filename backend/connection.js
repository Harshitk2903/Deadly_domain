require('dotenv').config();

const mongoose = require('mongoose');

const url = process.env.DB_URL;

// Asynchronous function :- return a promise 

mongoose.connect(url)
.then((result) => {
    console.log('Database connected');
    
})
.catch((err) => {
    console.log(err);
});


module.exports=mongoose;