const express = require('express');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';
const mCal = require('./mCal');
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.post('/cal2',(req,res)=>{
    console.log(req.body);
    let x = Number(req.body.x);
    let y = Number(req.body.y);
    let opt = req.body.opt;
    let rs = 0;
    switch (opt)
    {
        case '1':
            rs = x + y;
            break;
        case '2':
            rs = x - y;
            break;
        case '3':
            rs = x * y;
            break;
        case '4':
            rs = x / y;
            break;     
    }
    
    res.status(res.statusCode).send(mCal.html(x,y,opt,rs));
    
})


app.post('/cal',(req,res)=>{
    console.log(req.body);
    let x = Number(req.body.x);
    let y = Number(req.body.y);
    let opt = req.body.opt;
    let rs = 0;
    switch (opt)
    {
        case '1':
            rs = x + y;
            break;
        case '2':
            rs = x - y;
            break;
        case '3':
            rs = x * y;
            break;
        case '4':
            rs = x / y;
            break;     
    }
   
    res.status(res.statusCode).send(rs.toString());
    
})

app.use(express.static(__dirname+'/public'));
console.log(__dirname + '/public');
app.listen(port,()=> {console.log(`Listen at port ${port}`)});