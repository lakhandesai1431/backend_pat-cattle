const mongoose  = require('mongoose')

const connectDB = async () =>{ 
    try {
        const db = await mongoose.connect('mongodb+srv://21bca049:dAMskZLohPJqI9FG@cluster0.pprwny7.mongodb.net/pets_and_cattle?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('database connect')
        return db;
    } catch (error) {
       console.log(error) 
    }
} 

module.exports = connectDB

