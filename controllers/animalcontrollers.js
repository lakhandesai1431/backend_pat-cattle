const AnimalListing = require('../models/animalmodel');
const ListingResponse = require('../models/listingresponsemodel');
const Category = require("../models/categorymodel")


exports.getAllAnimalListings = async (req, res) => {
    try {
        const animalListings = await AnimalListing.find();
        res.json(animalListings);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

exports.getAnimalData = async(req,res)=>{
    try {
        const data = req.body;
        const animalListing = new AnimalListing({
            main_categorie:data.main_categorie,
            sub_categorie:data.sub_categorie,
            phase:data.phase,
            milking_status:data.milking_status,
            fetal_status:data.fetal_status,
            age:data.age,
            lactation:data.lactation,
            price:data.price,
            is_possibale_change:data.is_possibale_changepchange,
            vaccinated:data.vaccinated,
            userId:data.userId
        })
        const savedAnimal = await animalListing.save();
        res.json(savedAnimal)
    } catch (error) {
        console.log(error)
    }
}

exports.sendAnimalData = async(req,res)=>{
    try {
        const animalData = await AnimalListing.find({})
        console.log(animalData) 
    } catch (error) {
        console.log(error)
    }
}


exports.sendListingResponse = async(req,res)=>{
    const userId = req.body.userId;
    const listingId = req.body.listingId;
    try {
        const listing = await AnimalListing.findOne({_id:listingId})
        const listingOwnerId = listing.ownerId

        const responselisting = new ListingResponse({
            responsesender:userId,
            listingId:listingId,
            listingOwnerId:listingOwnerId
        })
        const savedData = await responselisting.save()
        res.send(savedData)
    } catch (error) {
        console.log(error)
    }
}

exports.getAllAnimalListings = async(req,res)=>{
    const userId = req.body;
    try {
        const listing = await ListingResponse.populate
    } catch (error) {
        console.log(error)
    }
}

exports.getAllSearch = async (req, res) => {
    try {
        const { query } = req.body;
        console.log(query)
        // Define the search query based on provided parameters
        const searchQuery = {
            $or: [
                { main_categorie: { $regex: query, $options: 'i' } }, // Case-insensitive search by title
                //{ description: { $regex: query, $options: 'i' } } // Case-insensitive search by description
            ]
        };
        console.log(searchQuery)
        // Perform the search based on the constructed query
        const searchResults = await AnimalListing.find(searchQuery);
        console.log(searchResults)
        res.json(searchResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.setCategory = async (req,res) => {
    const {category,subcategory} = req.body;
    try {
        const categories = new Category({
            category:category,
            subcategorys:subcategory
        }) 
        const savecategory = await categories.save();
        res.send(savecategory)
    } catch (error) {
        console.log(error)
    }
}