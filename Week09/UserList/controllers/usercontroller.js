
const userModel = require('../model/user');
const shajs = require('sha.js');
const pswhashlength = 64;
module.exports.view = async (req,res)=>{
    if(req.cookies.un)
    {
        res.redirect('/verified');
    }
    res.render('login',{
      title: "Login page",
      css:["login.css"]
    })
}
module.exports.logout = (req,res) =>{
    res.session = null;
    req.session = null;

    res.clearCookie('un');

    res.redirect('/');
}
module.exports.renderSignupForm = async (req,res)=>{
    if(req.cookies.un)
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
    
    console.log(req.body);
    console.log(username,psw);
    let user = await userModel.getUser(username);
    console.log(user);
    if(typeof user !== 'undefined' && user.length > 0)
    {
        res.redirect('./signin');
        return;
    }
    else
    {
        var hashedpwd = shajs('sha256').update(psw).digest('hex');
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

module.exports.login = async (req,res)=>{

    if(req.cookies.un)
    {
        res.redirect('/verified');
    }
    var username = req.body.username;
    var psw = req.body.password;
    let user = await userModel.getUser(username);
    if(typeof user !== 'undefined' && user.length > 0)
    {
        var salt = user[0].f_Password.substring(pswhashlength);
        var hashedpwd = shajs('sha256').update(psw + salt).digest('hex') + salt;
        if(hashedpwd === user[0].f_Password)
        {
            res.cookie('un',user.f_Username,{ maxAge: 500000, httpOnly:true });
            res.redirect('/verified');
        }
    }
    else{
        res.redirect('./signin');
        return;
    }
}