const express = require('express');
const router = express.Router();
const animalListingController = require('../controllers/animalcontrollers');
const cors = require('cors');

router.get('/animalListings', animalListingController.getAllAnimalListings);
router.post('/getAnimal',animalListingController.getAnimalData)
router.post('/listingresponse',animalListingController.sendListingResponse)
router.post('/getAllSearch',animalListingController.getAllSearch)
router.post('/setAllCategories',animalListingController.setCategory)


module.exports = router;
