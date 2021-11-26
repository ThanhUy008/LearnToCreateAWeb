const fetch = require('node-fetch');
module.exports.nextList = async (numOfUsers,pageNum) =>  {
    var users;
   await fetch(`https://reqres.in/api/users?per_page=${numOfUsers}&page=${pageNum}`).then(response => response.json()).then( async data=> {users =  data});
   return users;
};