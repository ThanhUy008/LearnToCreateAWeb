
const userModel = require('../model/user.M');
const bcrypt = require('bcrypt');
const passport = require("passport");
const saltRounds = 10;


module.exports.view = async (req,res)=>{
    if (req.user && req.cookies.un)
    {
        res.redirect('/verified');
    }
    res.render('login',{
      title: "Login page",
      css:["login.css"]
    })
}
module.exports.logout = (req,res) =>{
    if (req.user && req.cookies.un) req.logOut();
    return res.redirect("/");
}
module.exports.renderSignupForm = async (req,res)=>{
    if (req.user && req.cookies.un)
    {
        res.redirect('/verified');
    }
    else
    {
        res.render('signup',{
            title: "Signup page",
            css:["signup.css"]
        })
    }
}
module.exports.signup = async (req,res)=>{
    var username = req.body.username;
    var psw = req.body.password;
    
   
    let user = await userModel.getUser(username);

    if(typeof user !== 'undefined' && user.length > 0)
    {
        console.log(user);
        res.redirect('/login');
        return;
    }
    else
    {
        var hashedpwd = await bcrypt.hash(psw, saltRounds);

        user ={
            f_Username: username,
            f_Password: hashedpwd,
            f_Name: req.body.name,
            f_Email: req.body.email,
            f_DOB: req.body.dob,
            f_Permission:0
        };
        console.log(user);
        const rs = await userModel.adduserr(user);
        console.log(rs);
        res.redirect('/')
    }
}

module.exports.login = async (req,res,next)=>{
    

    passport.authenticate("local", function (err, user, info) {
        
        if (err || !user) {
            
          return res.redirect('/');
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.redirect('/');
            }
          
            res.cookie('un',user.f_Username,{ maxAge: 500000, httpOnly:true });
            res.redirect('/verified');
          
        });
      })(req, res, next);

}