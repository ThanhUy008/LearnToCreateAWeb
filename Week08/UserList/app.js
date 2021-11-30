const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
});

const currentPagnation = require("./utils/getTotalPage");
const loadUsers = require("./utils/loadUsers");

const port = 3000;
const app = express();

app.use(express.urlencoded({extended:false}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

const routes = require('./routes/user');

app.use('/',routes);



app.get('/next',async (req, res) =>  {
  var currenPageNum = req.query.page;
  var usersList = await loadUsers.nextList(3,currenPageNum);
 var anchoList = await currentPagnation.getCurrentPagnation(3,currenPageNum);
 res.render('home',{
  title: "Home",
   css:["home.css","pagnation.css"],
   script:["home.js"],
   users: usersList.data.data,
   pages:anchoList,
   lastpage:usersList.data.total_pages
 })
 
});



app.use(express.static(__dirname+'/views'));
app.listen(port,()=> {console.log(`Listen at port ${port}`)});