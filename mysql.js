// 同步读取
var fs=require('fs');
var data = fs.readFileSync('./data/new_data.json');
var arr=JSON.parse(data.toString());
var len=arr.length;
console.log(len);
var mysql  = require('mysql');  
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'test',              
  password : 'test',       
  port: '3306',                   
  database: 'test' 
}); 
 
connection.connect();
var addSql = 'INSERT INTO news(id,create_time,edit_time,title,writer,origin,content,click_count) VALUES(null,"2019-07-29 10:00:00","2019-07-29 10:00:00",?,?,?,?,?)';
for (var i = 0; i <len; i++) {
	var addSqlParams = [arr[i].title,arr[i].writer,arr[i].source,arr[i].article,Math.ceil(Math.random()*100)];
	connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
	});
};
connection.end();    