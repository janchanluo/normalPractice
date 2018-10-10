var designWidth=750;
var fontSize=100;
function font() {
    var pageWidth = document.documentElement.clientWidth || window.innerWidth;
    var font = pageWidth*fontSize/designWidth
   document.querySelector("html").style.fontSize=font+"px";

  }
  font();
  window.onresize=font;