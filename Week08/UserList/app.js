const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
});

const currentPagnation = require("./utils/getTotalPage");
const loadNextList = require("./utils/loadUsers");

const port = 3000;
const app = express();

app.use(express.urlencoded({extended:false}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/',async (req, res) =>  {
   var usersList = await loadNextList.nextList(3,1);
  var anchoList = await currentPagnation.getCurrentPagnation(3,1);
  console.log(usersList);
  res.render('home',{
    css:["home.css","pagnation.css"],
    script:["home.js"],
    users: usersList.data,
    pages:anchoList,
    lastpage:usersList.total_pages
  })
});


app.get('/next',async (req, res) =>  {
  var currenPageNum = req.query.page;
  console.log(currenPageNum);
  var usersList = await loadNextList.nextList(3,currenPageNum);
 var anchoList = await currentPagnation.getCurrentPagnation(3,currenPageNum);
 res.render('home',{
   css:["home.css","pagnation.css"],
   script:["home.js"],
   users: usersList.data,
   pages:anchoList,
   lastpage:usersList.total_pages
 })
});




app.use(express.static(__dirname+'/views'));
console.log(__dirname + '/views');
app.listen(port,()=> {console.log(`Listen at port ${port}`)});