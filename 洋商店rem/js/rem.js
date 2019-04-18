var designWidth=720;
var fontSize=100;
var meta=document.getElementsByTagName('meta')[0];
var head=document.getElementsByTagName('head')[0]
var i = window.devicePixelRatio;
meta.name = "viewport";
meta.content="device-width,initial-scale=1,minimum-scale="+i+",maximum-scale="+i+",user-scalable=no"
head.appendChild(meta)
function font() {
    var pageWidth = document.documentElement.clientWidth || window.innerWidth;
    var font = pageWidth*fontSize/designWidth
   document.querySelector("html").style.fontSize=font+"px";

  }

  font();

  window.onresize=font;