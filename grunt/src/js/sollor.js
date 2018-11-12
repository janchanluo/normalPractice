define(function(require,exports,module){
	
	function move(obj){
		obj.onmousedown=function(ev){
			
			var disx=ev.clientX-obj.offsetLeft;
			var disy=ev.clientY-obj.offsetTop;
			
			document.onmousemove=function(ev){	
				var control =require('./control.js');
				
				var l=control.control(0,500,ev.clientX-disx);
				var t=control.control(0,500,ev.clientY-disy);
				obj.style.left=l+'px';
				obj.style.top=t+'px';
			document.onmouseup=function(){
				
					document.onmousemove=document.onmouseup=null;	
				}
			}
			ev.preventDefault();
		}
	}
	module.exports={
		move:move
	}
	
})
