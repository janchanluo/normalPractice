 $.fn.extend({
        change:function(col){
            if(!col){
                col="nav";
            }
          $(this).find('span').click(function(){
              $(this).addClass(col).siblings().removeClass(col);
            var index = $(this).index();
              $(".appchange").find('li').eq(index).css('display','block').siblings().css('display','none');
          })
        }   
    });
    $(function(){

        $(".bag").hover(function(){
            $(this).animate({width:"300px"},500)
  
        },function(){
            $(this).animate({width:"800px"},500)

        })
    })
$.fn.gotop=function(){
    $("#gotop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop()<=800){
            $("#gotop").hide();
        }
        else{
            $("#gotop").show();
        }
        $("#gotop").click(function(){
            $("body,html").animate({"scrollTop":0},500);
        })
    }

)
}

/* $("div:lt(1)");
$("div").first();
$("div").not("class") */