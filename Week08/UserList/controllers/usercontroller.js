const currentPagnation = require("../utils/getTotalPage");
const loadUsers = require("../utils/loadUsers");


module.exports.view = async (req,res)=>{
    var usersList = await loadUsers.nextList(3,1);
    var anchoList = await currentPagnation.getCurrentPagnation(3,1);
    res.render('home',{
      title: "Home",
      css:["home.css","pagnation.css"],
      script:["home.js"],
      users: usersList.data.data,
      pages:anchoList,
      lastpage:usersList.total_pages
    })
}

module.exports.find = async (req,res)=>{
    if(!req.body.id) res.render('home',{
        title: "Home",
        css:["home.css","pagnation.css"],
        script:["home.js"],
        pages:1,
        lastpage:1
    })
    var user = await loadUsers.findUser(req.body.id);
    user = (({ data}) => ({data}))(user);
    
    res.render('home',{
        title: "Home",
        css:["home.css","pagnation.css"],
        script:["home.js"],
        users: user,
        pages:1,
        lastpage:1
      })
}


module.exports.detail = async (req,res)=>{
    if(!req.query.id) res.render('home',{
        title: "Home",
        css:["home.css","pagnation.css"],
        script:["home.js"],
        pages:1,
        lastpage:1
    })
    var user = await loadUsers.findUser(req.query.id);
    user = user.data;
    res.render('detail',{
        id: user.id,
        first_name: user.first_name,
        last_name:user.last_name,
        avatar: user.avatar,
        email: user.email
      })
}

module.exports.adduser = async (req,res)=>{
    var json = JSON.parse(JSON.stringify(req.body));
    var response = await loadUsers.adduser(json);
    console.log(response.status);
    if(response.status != '201')
    {
        //error page
    }
    else{
        
        res.render('sucess',{action: "add user",status:response.status});
    }
}


module.exports.updateUser = async (req,res)=>{
    var json = JSON.parse(JSON.stringify(req.body));
    var response = await loadUsers.update(json);
    console.log(response.status);
    if(response.status != '200')
    {
        //error page
    }
    else{
        
        res.render('sucess',{action: "edit user", status:response.status});
    }
}


module.exports.deleteUser = async (req,res)=>{
    

    if(!req.query.id) res.render('home',{
        title: "Home",
        css:["home.css","pagnation.css"],
        script:["home.js"],
        pages:1,
        lastpage:1
    })

    var response = await loadUsers.deleteUser(req.query.id);
    if(response.status != '204')
    {
        //error page
    }
    else{
        
        res.render('sucess',{action: "delete user", status:response.status});
    }
}