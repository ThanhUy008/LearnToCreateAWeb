const axios = require('axios').default;
module.exports.nextList = async (numOfUsers,pageNum) =>  {
    var users;
   await axios.get(`https://reqres.in/api/users?per_page=${numOfUsers}&page=${pageNum}`).then(response => { users =  response});
   return users;
};

module.exports.findUser = async (userId) =>{
    var user;
    await axios.get(`https://reqres.in/api/users/${userId}`).then(response => { user =  response.data; console.log(response)});
    return user;
}


module.exports.adduser = async (json) =>{
    var res;
    await axios.post('https://reqres.in/api/users',json).then((response)=>{res=response}).catch((error)=>console.log(error))
    return res;
}

module.exports.update = async (json) =>{
    var res;
    await axios.put('https://reqres.in/api/users',json).then((response)=>{res=response}).catch((error)=>console.log(error))
    return res;
}

module.exports.deleteUser = async (userId) =>{
    var user;
    await axios.delete(`https://reqres.in/api/users/${userId}`).then(response => { user =  response; console.log(response)});
    return user;
}