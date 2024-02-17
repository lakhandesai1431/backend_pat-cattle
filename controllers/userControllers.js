const User = require('../models/usermodel.js');
const AnimalListing = require('../models/animalmodel')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserData = async(req,res)=>{
    try {
        const data = req.body;
        const user = new User({
            name:data.name,
            lastname:data.lastname,
            mobilenumber:data.mobilenumber
        })
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (error) {
        console.log(error)
    }
}

exports.getUserListing = async(req,res)=>{
    const loggedUser = req.body.id;
    try {
        const allListing = await AnimalListing.find({userId:loggedUser})
        return res.send(allListing)
    } catch (error) {
        console.log(error)
    }
}