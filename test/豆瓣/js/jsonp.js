	(function(){
		var head=document.querySelector('head');
		
		window.jsonp=function(obj){
			var head=document.querySelector('head');
			var strU='';
			obj.fnName=obj.fnName||'jsonpApi_function';
			if(obj.data){
			  obj.data[obj.callback]=obj.fnName;
			  	for(var item in obj.data){
				strU+='&'+item+'='+obj.data[item];
				}
			 obj.url= obj.url+'?'+strU;
			}else{
				obj.url= obj.url+'?'+obj.callback+'='+obj.fnName;
			}
	

			console.log(obj.url)
			os=document.createElement("script");
			os.src=obj.url;
			head.appendChild(os);
			window[obj.fnName]=function(data){
				obj.success(data)
				 os.remove();
			}
		}
		
	})()
	

//https://api.douban.com/v2/movie/subject/27069427?jsonpApi_function
//count
//:
//10
//start
//:
//0
//subjects
//:
//Array(10)
//0
//:
//{rating: {…}, genres: Array(2), title: "悲伤逆流成河", casts: Array(3), collect_count: 38115, …}
//1
//:
//{rating: {…}, genres: Array(2), title: "黄金兄弟", casts: Array(3), collect_count: 30377, …}
//2
//:
//{rating: {…}, genres: Array(3), title: "反贪风暴3", casts: Array(3), collect_count: 61496, …}
//3
//:
//{rating: {…}, genres: Array(3), title: "碟中谍6：全面瓦解", casts: Array(3), collect_count: 484704, …}
//4
//:
//{rating: {…}, genres: Array(2), title: "江湖儿女", casts: Array(3), collect_count: 114578, …}
//5
//:
//{rating: {…}, genres: Array(3), title: "虎胆追凶", casts: Array(3), collect_count: 14156, …}
//6
//:
//{rating: {…}, genres: Array(2), title: "镰仓物语", casts: Array(3), collect_count: 77593, …}
//7
//:
//{rating: {…}, genres: Array(3), title: "大闹西游", casts: Array(3), collect_count: 665, …}
//8
//:
//{rating: {…}, genres: Array(1), title: "爱猫之城", casts: Array(3), collect_count: 13569, …}
//9
//:
//{rating: {…}, genres: Array(1), title: "张艺谋和他的“影”", casts: Array(3), collect_count: 333, …}
//length
//:
//10
//__proto__
//:
//Array(0)
//title
//:
//"正在上映的电影-成都"
//total
//:
//24
//__proto__
//:
//Object