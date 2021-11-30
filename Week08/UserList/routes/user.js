const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller')

router.get('/', userController.view);

router.post('/finduser', userController.find);

router.get('/detail', userController.detail);

router.get('/addnew', (req,res)=>{
    res.render('adduser');
});

router.post('/adduser', userController.adduser);

router.get('/update', (req,res)=>{
    res.render('edituser');
});
router.post('/edituser', userController.updateUser);

router.get('/delete', userController.deleteUser)

module.exports = router;