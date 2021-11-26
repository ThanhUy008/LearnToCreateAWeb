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
      script: ["home.js"],
      css: ['home.css'],
      title: 'Covid conference'
  })
});


app.get('/signup',(req,res)=>{
  res.render('signup',{
    title: 'Sign up for the conference',
    script: [],
    css: ['signup.css'],
  })
  
})


app.post('/thankyou',(req,res)=>{
  let name = (req.body.name);
  let email = (req.body.email);
  let tel = req.body.tel;
  
  res.render('thankyou',{
    name: name,
    email: email,
    tel: tel
  })
  
})


app.use(express.static(__dirname+'/views'));
console.log(__dirname + '/views');
app.listen(port,()=> {console.log(`Listen at port ${port}`)});