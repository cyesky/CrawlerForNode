function writeFunc(content,filename){
	// 加载文件模块
	var fs = require("fs");
	fs.writeFile('./data/'+filename+'.json',content, function(err){
	  //文件路经，写入的内容，回调函数
	  if(err) throw new Error ('写文件失败'+err);
	  console.log("成功写入文件");
	});
}
exports.writeFunc=writeFunc;