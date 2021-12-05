const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller')

router.get('/', productController.view);

router.get('/next', productController.next);

router.post('/addproduct',productController.addproduct);

router.get('/addnew', (req,res)=>{
    res.render('addproduct');
});

router.get('/update', (req,res)=>{
    
    res.render('editproduct',{id:req.query.id});
});
router.post('/editproduct', productController.updateproduct);

router.get('/delete', productController.deleteproduct);

module.exports = router;