function dataHtml(html) {
	// 加载需要的html
	var cheerio = require('cheerio');//输入任何网址都可以
	var $ = cheerio.load(html,{decodeEntities: false}); 
	//在html里寻找需要的资源的class
	var body = $('.article-section');
	if(body.text()){
		var title=body.find('.title-article h1').html();
		var writer=body.find('.writer').text();
		var source=body.find('.source').text();
		var article=$('.left-chunk .article-list').html();
		var data={title,writer,source,article};
	}else{
		var data={};
	}
	// body.each(function(item, index) {  //遍历html文档
	// 	var obj = $(this);
	// 	var title=obj.text();
	// 	var writer=obj.find('.writer').text();
	// 	var source=obj.find('.source').text();
	// 	var article=obj.find('.left-chunk .article-list').text();
	// 	var data={title,writer,source,article};
	// });
	return data; 
}
exports.dataHtml=dataHtml;