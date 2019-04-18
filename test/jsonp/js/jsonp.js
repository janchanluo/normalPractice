	(function(){
		var head=document.querySelector('head');
		
		window.jsonp=function(obj){
			var head=document.querySelector('head');
			var strU='';
			obj.fnName=obj.fnName||'jsonpApi_function';
			obj.data[obj.callback]=obj.fnName;
			for(var item in obj.data){
				strU+='&'+item+'='+obj.data[item];
			}
			var opation={
				  url:obj.url+'?'+strU,	  
			}
			os=document.createElement("script");
			os.src=opation.url;
			head.appendChild(os);
			window[obj.fnName]=function(data){
				obj.success(data)
				 os.remove();
			}
		}
		console.log(this)
	})()
	