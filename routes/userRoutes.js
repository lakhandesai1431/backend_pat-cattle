const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');


router.get('/users', userController.getAllUsers);
router.post('/getuser',userController.getUserData)
router.get('/userlisting', userController.getUserListing);



// router.post('/users', userController.createUser);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

module.exports = router;
