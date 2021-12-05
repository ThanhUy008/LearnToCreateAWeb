const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller')


router.get('/', userController.view);


router.post('/login', userController.login);

router.post('/signup1', userController.signup);

router.get('/signup', userController.renderSignupForm);

router.get('/logout', userController.logout);


module.exports = router;