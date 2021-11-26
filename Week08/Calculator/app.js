const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
});
const port = 3000;
const app = express();
app.use(express.urlencoded({extended:false}));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home',{
        fnum: "",
        snum: "",
        s1:"selected",
        s2:"",
        s3:"",
        s4:"",
        result:""
    });
});

app.post('/cal', (req, res) => {
    let x = Number(req.body.x);
    let y = Number(req.body.y);
    let opt = req.body.opt;
    let _s1="",_s2="",_s3="",_s4=""
    let rs = 0;
    switch (opt)
    {
        case '1':
            _s1 = "selected";
            rs = x + y;
            break;
        case '2':
            _s2 = "selected";
            rs = x - y;
            break;
        case '3':
            _s3 = "selected";
            rs = x * y;
            break;
        case '4':
            _s4 = "selected";
            rs = x / y;
            break;     
    }
    res.render('home',{
        fnum: x,
        snum: y,
        s1:_s1,
        s2:_s2,
        s3:_s3,
        s4:_s4,
        result:rs
    });
});


app.use(express.static(__dirname+'/public'));
console.log(__dirname + '/public');
app.listen(port,()=> {console.log(`Listen at port ${port}`)});