const axios = require('axios').default;
module.exports.crawTinh = async ()=>{
    var res;
    await axios.get('https://provinces.open-api.vn/api/?depth=3').then((response)=>{res=response}).catch((error)=>console.log(error))
    var endresult = [];
    for (let child of res.data) {
        for (let smaller of child.districts) {
            for (let smallersmaller of smaller.wards) {
                endresult.push(child.name+`','`+small.name +`','`+smallersmaller.name);
              }
          }
          
      }
    return endresult;
}