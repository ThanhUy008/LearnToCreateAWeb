
const axios = require('axios').default;

module.exports.getCurrentPagnation = async (numOfUsers,curPage) => {
    var anchoList;
    await axios.get(`https://reqres.in/api/users?per_page=${numOfUsers}`).then(users=>{
        users = users.data;
        if(curPage > 2 && curPage < users.total_pages - 2)
     anchoList = [
        {pageNum:curPage-1,state:""},{pageNum:curPage,state:"active"},{pageNum:curPage+1,state:""}
    ]
    if(curPage<=2)
    {
        if(curPage==1)
         anchoList = [
        {pageNum:1,state:"active"},{pageNum:2,state:""},{pageNum:3,state:""}];
        else
        {
             anchoList = [
            {pageNum:1,state:""},{pageNum:2,state:"active"},{pageNum:3,state:""}];
        }
    }
    if(curPage>= users.total_pages -2)
    {
        if(curPage==users.total_pages-1)
         anchoList = [
        {pageNum:users.total_pages-2,state:""},{pageNum:users.total_pages-1,state:"active"},{pageNum:users.total_pages,state:""}];
        if(curPage==users.total_pages)
         anchoList = [
        {pageNum:users.total_pages-2,state:""},{pageNum:users.total_pages-1,state:""},{pageNum:users.total_pages,state:"active"}];
    }
    });
   
    
    return anchoList;
};

