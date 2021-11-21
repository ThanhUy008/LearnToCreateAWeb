const express = require('express');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';
const thank = require('./thankyou');
app.use(express.urlencoded({extended:false}));


app.get('/signup',(req,res)=>{
    res.redirect('/signup.html');
    
})


app.post('/thankyou',(req,res)=>{
    console.log(req.body);
    let name = (req.body.name);
    let email = (req.body.email);
    let tel = req.body.tel;
    rs = name +" "+ email +" "+ tel;
    res.status(res.statusCode).send(thank.html(name,email));
    
})


app.use(express.static(__dirname+'/views'));
console.log(__dirname + '/public');
app.listen(port,()=> {console.log(`Listen at port ${port}`)});