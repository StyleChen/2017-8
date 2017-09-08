/**
类 XmlHttp
用例:
将此类,加入到你工程的用到的js文件中即可使用
XmlHttp.setRequestHeadher("key","value");
最常用的功能
第一节 获取 服务器的响应文本
//1. get(回调)方式获取服务器的信息
new XmlHttp().getText("http://www.163.com",function(result){
alert(result);
})
2. get(等待)方式获取服务器的信息
var result=new XmlHttp().getTextD("http://www.163.com");
alert(result);
3.post(回调)方式获取服务器的信息
new XmlHttp().postText("http://www.163.com","",function(result){
alert(result);
});
4.post(等待)方式获取服务器的信息
var result=new XmlHttp().postTextD("http://www.163.com","");
alert(result);
第二节 获取服务器的响应xml
1.get(回调)获取服务器响应的xml对象
new XmlHttp().getXML("http://rss.sina.com.cn/sina_all_opml.xml",function(result){
alert(result); //此处已经为xml对象了,需要dom来遍历
});
2.get(等待)获取服务器响应的xml对象,得服务器支持post请求
alert(new XmlHttp().getXMLD("http://rss.sina.com.cn/sina_all_opml.xml"));
3.post(回调)获取服务器的响应xml对象
new XmlHttp().postXML("http://rss.sina.com.cn/sina_all_opml.xml",null,function(result){
alert(result);
});
4.post(等待)获取服务器的响应xml对象
new XmlHttp().postXMLD("http://rss.sina.com.cn/sina_all_opml.xml",null,function(result){
alert(result);
});
*/
function XmlHttp()
{
//构造方法
var xmlhttp=false;
//超时
var timer;
try{
//ie7,firefox
xmlhttp=new XMLHttpRequest();
}catch(trymicrosoft){
//ie6,==
try {
	　　　xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
　　} catch (othermicrosoft) {
	　　　try {
		　　　　xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	　　　} catch (failed) {
		　　　　xmlhttp = false;
	　　　}
}
}
if(!xmlhttp){
	alert("创建request错误,请稍候重试");
	return;
}
//请求
/**
1.请求的方法
2.请求url
3.post的查询字符串
4.回调函数或回调函数指针
5.是否等待
用法:
XmlHttp.call("get","http://www.google.cn",null,function(xmlhttp){
alert(xmlhttp.responseText);
});
*/
this.call=function(method,url,content,callback,isAsync){
	if(typeof isAsync=="undefined") isAsync=true;
	try{
		xmlhttp.open(method,url,isAsync);
	}catch(e){
		alert("XMLHttpRequest打开url失败,ie支持本地打开,ajax不支持跨域,请请求代理");
	}
	if(content&&method.toUpperCase()=="POST"){
		xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		xmlhttp.send(content);
	}else{
		xmlhttp.send(null);
	}
if(isAsync){//异步
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(timer) clearTimeout(timer);
			if(xmlhttp.status==200)
				callback(xmlhttp);
		}
	}
}else{//同步
	if(xmlhttp.readyState==4&&xmlhttp.status==200){
		return xmlhttp;
	}else
	throw new Error([60000,"XMLHttpRequest错误,远程调用失败!"+url]);
}
}
//取消
this.cancel=function(){
	xmlhttp.abort();
}
//超时[单位:秒]
this.setTimeout=function(second){
	timer=setTimeout(function(){this.cancel();},second?second*1000:2*1000*60);
}
//设置请求头
this.setRequestHeader=function(header,value){
	xmlhttp.setRequestHeader(header,value);
}
/**[new],获取服务端文本
XmlHttp.getText("http://www.google.cn",function(result){
alert(result);
})
*///异步状态
this.getText=function(url,callback){
	url=urlRewrite(url);
	this.call("GET",url,null,function(xmlhttp){
		callback(xmlhttp.responseText);
	});
}
//同步状态
this.getTextD=function(url){
	return this.call("GET",url,null,null,false).responseText;
}
/**post方式,发送请求
@argument url :
@argument content :请求字符串
@argument callback
*/
this.postText=function(url,content,callback){
	this.call("POST",url,content,function(xmlhttp){callback(xmlhttp.responseText)});
}
/**post方式,发送请求
@argument url :
@argument content :请求字符串
@return string 
*/
this.postTextD=function(url,content){
	return this.call("GET",url,content,null,false).responseText;
}
/**[new],获取xml
1.url
2.callback[函数指针]
用法:
XmlHttp.getXML(url,function(xml){
alert(xml);
});
*///异步状态
this.getXML=function(url,callback){
	url=urlRewrite(url);
	this.call("GET",url,null,function(xmlhttp){
		callback(xmlhttp.responseXML);
	});
}
//同步状态
this.getXMLD=function(url){
	return this.call("GET",url,null,null,false).responseXML;
}
/**post方式,发送请求
@argument url :
@argument content :请求字符串
@argument callback
*/
this.postXML=function(url,content,callback){
	this.call("POST",url,content,function(xmlhttp){callback(xmlhttp.responseXML)});
}
/**post方式,发送请求
@argument url :
@argument content :请求字符串
@return string 
*/
this.postXMLD=function(url,content){
	return this.call("POST",url,content,null,false).responseXML;
}
/**[new]
用法:
XmlHttp.getHeaders("http://www.google.cn",function(headers){
for(var head in headers){
alert(head+":"+headers[head]);
}
})
*/
this.getHeaders=function(url,callback){
	this.call("head",url,null,function(xmlhttp){
		callback(parseHeaders(xmlhttp));
	});
}
//私有,解析headers
var parseHeaders=function(xmlhttp){
	var headerText=xmlhttp.getAllResponseHeaders();
	var headers={};
	var lines=headerText.split("\n");
	for(var i=0;i<lines.length;i++){
		var line=lines[i];
		if(line.length==0) continue;
		var pos=line.indexOf(":");
		var name=line.substring(0,pos);
		var value=line.substring(pos+1);
headers[name]=value;//arraylike obj
}
return headers;
}
//私有,获取 时间戳
var getTimeStamp=function(){return "nowtimestamp="+new Date().getTime()}
//重新 url
var urlRewrite=function(url){
	return url;
	var tag="";
	if(url.indexOf("?")>0)
		tag="&";
	else
		tag="?";
	return url+tag+getTimeStamp();
}
};