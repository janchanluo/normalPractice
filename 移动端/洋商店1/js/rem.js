var designWidth=750;                                                                                            //响应式，类似媒体查询
var fontSize=100;
function font(){
    var windowWidth=document.documentElement.clientWidth;
    var realFontsize=fontSize*windowWidth/designWidth;
    document.getElementsByTagName("html")[0].style.fontSize=realFontsize+"px";
}
font();
window.onresize=font;
