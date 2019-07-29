// Node.js提供了http模块，用于搭建HTTP服务端和客户端
var http = require('https');
// 数据分析
var news=require('./model/news');
// 文件写入
var writeFile=require('./class/writeFile');
// 抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现
var url='';
var contentArr=[];

for (var i = 20; i < 27; i++) {
  (function(i){
    url = `https://www.boxuegu.com/news/${i}.html`;
    //发送get请求
    
  })(i)
};
console.log(2)
// let content = JSON.stringify(contentArr);
// writeFile.writeFunc(content,news);




function openFile(url) {
  return new Promise(function (resolve, reject) {
    http.get(url,function(res){ 
      var html='';
      res.on('data',function(data){
        //字符串的拼接
        html += data;  
      })
      res.on('end', function(){
        console.log(i)
        var cleanData = news.dataHtml(html);
        contentArr.push(cleanData);

        // writeFile.writeFunc(JSON.stringify(a),'news'+i);
      });
    }).on('error',function(){
      console.log('获取资源出错！');
    });


    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });

  });
}