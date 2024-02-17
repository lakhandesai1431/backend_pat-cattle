const mongoose = require('mongoose')
const animalSchema = new mongoose.Schema({

    main_categorie:{
        type:String
    },
    sub_categorie: {
        type:String
    },

    phase: {
        type:String,
    },
    
    milking_status: {
        type:Boolean,
    },
    
    fetal_status: {
        type:Boolean,
    },

    age: {
        type:Number,
    },

    lactation: {
        type:Number,
    },

    price: {
        type:Number,
    },

    is_possibale_change: {
        type:Boolean,
    },

    vaccinated: {
        type:Boolean,
    },
    userId:{
        type:mongoose.Types.ObjectId
    }

},{timestamps:true});

const animal = mongoose.model('animal', animalSchema);    

module.exports = animal