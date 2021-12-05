const express = require('express');
const exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser')


const product_routes = require('./routes/product');

const routes = require('./routes/user');

const port = 3000;

const app = express();

app.use(cookieParser());

const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
});



app.use(express.urlencoded({extended:false}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use('/',routes);


app.use('/verified',product_routes);


app.use(function (req, res,next) {
    // Cookies that have not been signed
    next();
  })

app.use(express.static(__dirname+'/views'));
app.listen(port,()=> {console.log(`Listen at port ${port}`)});