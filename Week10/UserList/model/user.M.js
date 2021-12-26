const db = require('./db');

const e = require('express');

const tbName = 'Users';
const tbCol = `"f_Username","f_Password","f_Name","f_Email","f_DOB","f_Permission"`;
const orderBy = `f_ID`;



module.exports.getUser = async (username) =>{
    var condition = `"f_Username" = '${username}'`
    var res = await db.find(tbName,condition);
 
    return res;
}



module.exports.adduserr = async (inputStr) =>{
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