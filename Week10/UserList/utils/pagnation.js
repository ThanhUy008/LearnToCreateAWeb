
module.exports.getCurrentPagnation = async (curPage,total_pages) => {
   var data = {};
   curPage = Number(curPage);
   total_pages = Number(total_pages);
   
    if(curPage > 2 && curPage <= total_pages - 2)
    {
        data = [
            {pageNum:curPage-1,state:""},{pageNum:curPage,state:"active"},{pageNum:curPage+1,state:""}
        ]
        
        
    }
    if(curPage<=2)
    {
        if(curPage==1)
         data = [
        {pageNum:1,state:"active"},{pageNum:2,state:""},{pageNum:3,state:""}];
        else
        {
             data = [
            {pageNum:1,state:""},{pageNum:2,state:"active"},{pageNum:3,state:""}];
        }
    }
    if(curPage> total_pages -2)
    {
        if(curPage==total_pages-1)
         data = [
        {pageNum:total_pages-2,state:""},{pageNum:total_pages-1,state:"active"},{pageNum:total_pages,state:""}];
        if(curPage==total_pages)
         data = [
        {pageNum:total_pages-2,state:""},{pageNum:total_pages-1,state:""},{pageNum:total_pages,state:"active"}];
    }

   var anchoList = {};
   anchoList['totalPage'] = total_pages;
   anchoList['data'] = data;
    return anchoList;
};

