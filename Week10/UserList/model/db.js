
const pgp = require('pg-promise')({
    capSQL:true,
});

const schema = 'public';

const { Pool, Client } = require('pg')
const cn = {
  user: 'postgres',
  host: 'localhost',
  database: 'WebData',
  password: 'master',
  port: 5432,
};
const db = pgp(cn);


module.exports.load = async (tbName) =>{
    var table  = new pgp.helpers.TableName({table: tbName,schema: schema});
    var qStr = pgp.as.format('SELECT * FROM  $1',table);
    try{
        var res = await db.any(qStr);
        
        return res;
    }
    catch(error)
    {
        console.log(error);
    }
    
}


module.exports.loadTotal = async (tbName) =>{
    var table  = new pgp.helpers.TableName({table: tbName,schema: schema});
    var qStr = pgp.as.format('SELECT COUNT(*) as totalNum FROM  $1',table);
    try{
        var res = await db.any(qStr);
        return res;
    }
    catch(error)
    {
        console.log(error);
    }
    
}


module.exports.loadByN = async (tbName,orderBy,curPage,listLong) =>{
    var offSetNum = Number(curPage-1)*listLong;
    var table  = new pgp.helpers.TableName({table: tbName,schema: schema});
    var qStr = pgp.as.format(`SELECT * FROM  $1 ORDER BY "${orderBy}" ASC LIMIT ${listLong} OFFSET ${offSetNum}`,table);
    try{
        var res = await db.any(qStr);
        
        return res;
    }
    catch(error)
    {
        console.log(error);
    }
    
}



module.exports.addnew = async (tbName,tbCol,valueStr) =>{
    var table  = new pgp.helpers.TableName({table: tbName,schema: schema});
    var qStr = pgp.as.format(`INSERT INTO  $1(${tbCol}) VALUES (${valueStr})`,table);
    try{
        await db.any(qStr);
        
        return ["success"];
    }
    catch(error)
    {
        return ["error",error];
    }
    
}


module.exports.update = async (tbName,condition,valueStr) =>{
    var table  = new pgp.helpers.TableName({table: tbName,schema: schema});
    var qStr = pgp.as.format(`UPDATE $1 SET ${valueStr} WHERE ${condition}`,table);
    console.log(qStr);
    try{
        await db.any(qStr);
        return ["success"];
    }
    catch(error)
    {
        
        return ["error",error];
    }
    
}


module.exports.delete = async (tbName,condition) =>{
    var table  = new pgp.helpers.TableName({table: tbName,schema: schema});
    var qStr = pgp.as.format(`DELETE FROM $1 WHERE ${condition}`,table);
    console.log(qStr);
    try{
        await db.any(qStr);
        return ["success"];
    }
    catch(error)
    {
       
      
        return ["error",error];
    }
    
}




module.exports.find = async (tbName,condition) =>{
    var table  = new pgp.helpers.TableName({table: tbName,schema: schema});
    var qStr = pgp.as.format(`SELECT * FROM $1 WHERE ${condition}`,table);
    try{
        var rs = await db.any(qStr);
        return rs;
    }
    catch(error)
    {
       
      
        return error;
    }
    
}