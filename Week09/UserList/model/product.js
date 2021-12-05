const db = require('./db');

const pagnationUtils = require('../utils/pagnation');
const e = require('express');

const tbCol = `"ProName","TinyDes","FullDes","Price","CatID","Quantity"`;
const tbName = 'Products';
const orderBy = `ProID`;

module.exports.load = async () =>{
    var res = await db.load(tbName);
  
   
    return res;
}


module.exports.loadByN = async (curPage,listLong) =>{

    var res = await db.loadByN(tbName,orderBy,curPage,listLong);
 
    return res;
}


module.exports.pagnation = async (curPage,listLong) =>{
    var res = await db.loadTotal(tbName);
    var lastPage;
    if(Number(res[0].totalnum)%listLong == 0)
    {
        lastPage = Number(res[0].totalnum)/listLong;
    }
    else{
        lastPage = (Number(res[0].totalnum)-Number(res[0].totalnum)%listLong)/listLong + 1;
    }
   
    var anchorList = pagnationUtils.getCurrentPagnation(curPage,Number(lastPage));
    
    return anchorList;
}


module.exports.addproduct = async (inputStr) =>{
    inputStr = Object.values(inputStr);
    
    var valueStr ="";
    inputStr.forEach((x,i)=>{
        if(!isNaN(x))
        valueStr = valueStr + x +",";
        else{
            valueStr = valueStr + `'` + x + `'` +",";
        }
    })
    valueStr = valueStr.slice(0, -1);
    var res = await db.addnew(tbName,tbCol,valueStr);
    return res;
}



module.exports.updateproduct = async (inputStr) =>{
    inputStr = Object.values(inputStr);
    var condition = `"ProID" = ${inputStr[0]}`
    var valueStr =`"ProName" = '${inputStr[1]}',"TinyDes"  = '${inputStr[2]}',"FullDes"  = '${inputStr[3]}',"Price"  = '${inputStr[4]}',"CatID"  = '${inputStr[5]}',"Quantity"  = '${inputStr[6]}'`;
    var res = await db.update(tbName,condition,valueStr);
    return res;
}



module.exports.deleteproduct = async (inputStr) =>{
    inputStr = Object.values(inputStr);
    var condition = `"ProID" = ${inputStr[0]}`
    var res = await db.delete(tbName,condition);
    return res;
}