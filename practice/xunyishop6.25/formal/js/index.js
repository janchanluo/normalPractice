
var nav=document.getElementById("hide_ul");
var nav_a=document.getElementById("nav_a");
function hidenav() {
	console.log(nav)
	if(nav.style.display=="none"){
		nav.style.display="block";
		nav_a.style.color="#000";
		nav_a.style.backgroundColor="#fff";
	}  
}
function shownav(){
	nav.style.display="none";
	nav_a.style.color="#fff";
	nav_a.style.backgroundColor="#444";
}
//图片轮播
var t;
var imgstar=0  //图片开始位置
var speed=3;
// function change(){
// 	var changlen= $(".banner").find('li').length;
// 	console.log(imgstar);
// 	$(".banner").find('li').hide();
// 	$(".banner").find('li').eq(imgstar).show();

// 	imgstar=imgstar+1 ==changlen ?0:imgstar + 1; 
// 	t=setTimeout("change()", speed*1000);
// }
window.onload=function(){
	$(document).ready(function() {
	$("ul.banner_change").hover(function() {
		clearTimeout(t);
	}, function(){
		t = setInterval(function(){
			++imgstar;
			var changlen=$(".banner_change").find('li').length;
			var lastchanglen=changlen-1;
			var  classname=classname="."+"ol"+imgstar;
			if(imgstar >= changlen){
				imgstar = 0;
			}
			/*console.log(imgstar)*/
			$(".banner_change").find('li').hide()
			$(".banner_change").find("li").eq(imgstar).show()
			if(imgstar==0){
       	     	classname="."+"ol"+lastchanglen;
       	     	 $(classname).css("backgroundColor",'#fff');  
    	     // console.log(classname);
       	     }
       for(var i=0;i<=imgstar;i++){
       		classname="."+"ol"+i;
       	     $(classname).css("backgroundColor",'#fff');         
       }
     /*  if(imgstar==0){
       		
       	}*/
       $(classname).css("backgroundColor",'#000');//圆点切换
      for(var j=0;j<changlen;j++){
      	var ool="."+"ol"+j;
      	$(ool).click(function(){
      		$(".banner_change").find('li').hide();
      		$(ool).css("backgroundColor","#000")
      	})
      }
	// setInterval(function(){
	// })
		},speed * 1000)
	});
	  $(window).scroll(function() {
	  	var top = $(document).scrollTop();
	
       if(top>4465){
	 	$(".fixedr li , .right_r , .fixedr ul div").css("backgroundColor","#6e1c89");
	 }
	 else {
	 	$(".fixedr li , .right_r ,  .fixedr ul div").css("backgroundColor","#1C8984");
	 }	
	})
	  	  var fixedrlen=$(".fixedr").find('li').length;
	  for(var i=0;i<fixedrlen;i++){

	   var liname=$(".fixedr").find('li').eq(i);
	   for(j=i;j<fixedrlen;j++){
	    var divname=$(".fixedr").find('div').eq(j);
	  	liname.hover(function(){
	  		$(divname).css("display","block")
	  	},function(){
	  		$(divname).css("display","none")
	  	})
	  		}
 
    }	 
	
	/*  if(var i=0;i<)
	$()*/

});
}