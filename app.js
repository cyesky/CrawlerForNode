var http = require('https');
var news=require('./model/news');
var writeFile=require('./class/writeFile');
var contentArr=[];
var urlerro=[];
for (var i = 1; i < 790; i++) {
  (function(i){
    url = `https://www.boxuegu.com/news/${i}.html`;
  //   //发送get请求
    http.get(url,function(res){ 
      var html='';
      res.on('data',function(data){
        //字符串的拼接
        html += data;  
      })
      res.on('end', function(){
        var cleanData = news.dataHtml(html);
        if(Object.keys(cleanData).length)  {
          contentArr.push(cleanData);
        }
          let content = JSON.stringify(contentArr);
          writeFile.writeFunc(content,'new_data');
      });
    }).on('error',function(e){
          urlerro.push(url)
          writeFile.writeFunc(JSON.stringify(urlerro),'new_error');
      // console.log('错误',  url,  e)
    });
  })(i)
};
// let content = JSON.stringify(contentArr);

















































function openFile(url) {
  return new Promise(function (resolve, reject) {
    http.get(url,function(res){ 
      var html='';
      res.on('data',function(data){
        //字符串的拼接
        html += data;  
      })
      res.on('end', function(){
        resolve(html);
        // writeFile.writeFunc(JSON.stringify(a),'news'+i);
      });
    }).on('error',function(){
        reject(err);
    });
  });
}