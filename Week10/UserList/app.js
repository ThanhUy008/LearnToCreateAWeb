const express = require('express');
const exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser')
const { checkAuthenticated } = require("./config/authenticate");

const app = express();

require("./config/handlebars")(app);
require("./config/session")(app);
require("./config/cookie")(app);
require("./config/passport")(app);

const product_routes = require('./routes/product.R');

const user_routes = require('./routes/user.R');

const port = 3000;


app.use(cookieParser());

const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
});



app.use(express.urlencoded({extended:false}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use('/',user_routes);


app.use('/verified',product_routes);


app.use(function (req, res,next) {
    // Cookies that have not been signed
    next();
  })

app.use(express.static(__dirname+'/views'));
app.listen(port,()=> {console.log(`Listen at port ${port}`)});