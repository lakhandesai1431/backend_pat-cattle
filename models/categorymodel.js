const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    category:{
        type:String
    },
    subcategorys:{
        type:Array
    }
})

const CategoryModel = mongoose.model('Category',categorySchema)


module.exports = CategoryModel;