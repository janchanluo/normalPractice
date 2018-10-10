/**
 * Created by duodi on 2018/1/29.
 */
var designWidth=750;
var fontSize=100;
function font(){
    var windowWidth=document.documentElement.clientWidth;
    var realFontsize=fontSize*windowWidth/designWidth;
    document.getElementsByTagName("html")[0].style.fontSize=realFontsize+"px";
}
font();
window.onresize=font;



