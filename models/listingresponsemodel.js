const mongoose = require('mongoose')

const listngResponseSchema = new mongoose.Schema({
    listingId:{
        type:mongoose.Types.ObjectId
    },
    responsesender:{
        type:mongoose.Types.ObjectId
    },
    listingOwnerId:{
        type:mongoose.Types.ObjectId
    }
},{timestamps:true})

const ListingResponse = mongoose.model('listingresponse',listngResponseSchema)

module.exports = ListingResponse;