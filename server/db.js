const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = `mongodb+srv://amartyasen:${process.env.MONGODB_PASSWORD}@cluster0.tlqtekf.mongodb.net/mern-renter`;

mongoose.connect(mongoUrl , {useUnifiedTopology:true, useNewUrlParser:true});

const connection = mongoose.connection;

connection.on('error',()=>{
    console.log('MongoDb connection failed');
});

connection.on('connected',()=>{
    console.log('Mongodb connected Successfully');
})

module.exports = mongoose;


