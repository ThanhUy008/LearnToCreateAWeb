
const listLong = 5;

const productModel = require('../model/product');

module.exports.view = async (req,res)=>{
    if(req.cookies.un)
    {
    var productList = await productModel.loadByN(1,listLong);
    var anchorList = await productModel.pagnation(1,listLong);
    res.render('home',{
      title: "Home",
      css:["../home.css","../pagnation.css"],
      script:["../home.js"],
      products: productList,
      pages: anchorList.data,
      lastpage:Number(anchorList.totalPage),
    })
    }
    else{
        res.redirect('/')
    }
}
module.exports.next = async (req,res)=>{
    if(req.cookies.un)
    {
    var productList = await productModel.loadByN(req.query.page,listLong);
    var anchorList = await productModel.pagnation(req.query.page,listLong);
    res.render('home',{
      title: "Home",
      css:["../home.css","../pagnation.css"],
      script:["../home.js"],
      products: productList,
      pages: anchorList.data,
      lastpage: anchorList.totalPage,
    })
    }
    else{
        res.redirect('/')
    }
}

module.exports.addproduct = async (req,res)=>{
    if(req.cookies.un)
    {
    var json = JSON.parse((JSON.stringify(req.body)));
    console.log(json);
    var response = await productModel.addproduct(json);
   console.log(response);
   if( response[0] != "error")
    res.render('sucess',{action: "add product",status:201});
    else{
        res.render('error',{acttion:"add product",error:response[1]});
    }
    }
    else{
        res.redirect('/')
    }
}

module.exports.updateproduct = async (req,res)=>{
    if(req.cookies.un)
    {
    var json = JSON.parse((JSON.stringify(req.body)));
    console.log(json);
    var response = await productModel.updateproduct(json);
    console.log(response);
    if( response[0] != "error")
    res.render('sucess',{action: "update product",status:201});
    else{
        res.render('error',{acttion:"update product",error:response[1]});
    }
    }
    else{
        res.redirect('/')
    }
}

module.exports.deleteproduct = async (req,res)=>{
    if(req.cookies.un)
    {
    var json = req.query.id;
    console.log(json);
    var response = await productModel.deleteproduct(json);
    console.log(response);
   if( response[0] != "error")
    res.render('sucess',{action: "delete product",status:201});
    else{
        res.render('error',{acttion:"delete product",error:response[1]});
    }
    }
    else{
        res.redirect('/')
    }
}
