/*     头部移动渐变 */
    var bannerH=document.querySelector(".banner").offsetHeight;
    // console.log(bannerH)
    var fixedtop=document.querySelector("#fixedtop");
    var fixedtopH=fixedtop.offsetHeight;
    var opacity=0;
   window.onscroll=function(){
   var scorllTop=document.documentElement.scrollTop;
   // console.log(scorllTop)
   if(scorllTop<=(bannerH-fixedtopH)){
       opacity= scorllTop/(bannerH-fixedtopH)*0.9
   }else{
       opacity=0.9;
   }
//    console.log(opacity)
   fixedtop.style.backgroundColor='rgba(31, 76, 241,'+opacity +')';
}


    /* 倒计时 */

    var timeClear=document.getElementsByClassName("timeClear")[0];
    var spans=timeClear.getElementsByTagName("span");
    var time=1*60*60*24;
    var nowDate=new Date();
    var now =nowDate.getTime();
    var oldDate = new Date(2018,8,3,00,00,00);
    var old=oldDate.getTime()
    var reduceDate=Math.floor((now-old)/1000);
    time=time-reduceDate;
    function timer() {
        // console.log(time)
         time--;
         var h=time/3600;
         var m=time%3600/60;
         var s=time%60;
         spans[0].innerHTML=Math.floor(h/10);
         spans[1].innerHTML=Math.floor(h%10);
         spans[3].innerHTML=Math.floor(m/10);
         spans[4].innerHTML=Math.floor(m%10);
          spans[6].innerHTML=Math.floor(s/10);
         spans[7].innerHTML=Math.floor(s%10);
         if(time<=0){
            clearInterval(timer1);
         }
  }
var timer1=setInterval(timer,1000)
