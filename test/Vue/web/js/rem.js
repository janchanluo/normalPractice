var designWidth=720;
var fontSize=100;
var meta=document.getElementsByTagName('meta')[0];
var head=document.getElementsByTagName('head')[0]
var i = window.devicePixelRatio?1/window.devicePixelRatio:1;
meta.name = "viewport";
meta.content='width=device-width,user-scalable=no,initial-scale='+i+',minimum-scale='+i;
head.appendChild(meta) 
function font() {
    var pageWidth = document.documentElement.clientWidth || window.innerWidth;
    var font  = pageWidth*fontSize/designWidth
   document.querySelector("html").style.fontSize=font+"px";

  }

  font();

  window.onresize=font;