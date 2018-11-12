window.onload = function(){
	
	var scrolls = function(){
		//透明度需求
	//当鼠标滚动时候,颜色会越来越深,滚动超过轮播图高度,颜色一直是100%
	//1.获取banner高度
	var banner = document.querySelector('.nav')
	//获取透明度改变的盒子
	var searchbox = document.querySelector('.search_box')
	//console.log(banner)
	var bannerHeight = banner.offsetHeight;
	//console.log(bannerHeight)
	
	window.onscroll = function(){
		//获取滚动的距离
		var scollHeight = document.documentElement.scrollTop;
	    //console.log(scollHeight)
	    var opocity = 0;
	    //判断当滚动的距离小于banner高度的时候透明度会改变，要不然就到了固定的透明度
	    if(scollHeight<=bannerHeight){
	    	opocity = scollHeight/bannerHeight*0.9
	    }else{
	    	opocity=0.9
	    }
	    //给searchbox的背景赋值
		searchbox.style.backgroundColor='rgba(255,0,0,'+opocity+')'
		
	}
	}
	
	
	scrolls()
	
	
	//获取到time里面所有的span
	var allspan = document.querySelectorAll('.time span')
	//console.log(allspan.length)
	//倒计时
	var timeout= function(){
		//定义一个倒计时的事件
		var time = 12*60*60;
		var timer = setInterval(function(){
			time--;
			var h = Math.floor(time/3600)
			var m = Math.floor(time%3600/60)
			var s = Math.floor(time%60)
			//填值
			allspan[0].innerHTML=Math.floor(h/10);
			allspan[1].innerHTML=Math.floor(h%10);
			allspan[3].innerHTML=Math.floor(m/10);
			allspan[4].innerHTML=Math.floor(m%10);
			allspan[6].innerHTML=Math.floor(s/10);
			allspan[7].innerHTML=Math.floor(s%10);
			if(time<=0){
				clearInterval(timer);
				alert('傻了吧')
			}
			
			
			
		},1000)
		
		
		
		
	}
	
	timeout()
	
	
	//banner制作
	var banners = function(){
		//滑动的时候让图片移动
		//当滑动距离大于一张图片的1/3的时候，判断要不要进入下一张
		//定时器
		
		//1.获取banner_img
		var banner_img = document.querySelector('.banner_img')
        var banner = document.querySelector('.banner');
        var btn_li = document.querySelectorAll('.banner_btn li')
		//获取一张图片也就是banner_img里面li的宽度
		var bannerWidth = banner.offsetWidth;
		//console.log(bannerWidth)
		//滑动事件，让图片移动
		//定义一个索引，改变的距离是根据索引改变的
		
        
		//定义几个方法
		//图动画方法
		//清除动画方法
		//移动方法
		var settranstion = function(){
			banner_img.style.transition = 'all 0.8s';
			banner_img.style.webkitTransition = 'all 0.8s'
		}
		var remvetranstion = function(){
			banner_img.style.transition = 'none';
			banner_img.style.webkitTransition = 'none'
		}
		var settranslate = function(late){
			banner_img.style.transform = 'translateX('+late+'px)';
			banner_img.style.webkitTransform = 'translateX('+late+'px)'
		}
		
		//定义一个索引
		var i = 1;
		
		//先让图片自己动
		var timer = setInterval(function(){
			//每动一次i加1
			i++;
			
			//调用动画
			settranstion();
			//图片移动大小
			//调用图片跑
			settranslate(-i*bannerWidth)
		},1000)
		
		banner_img.addEventListener('transitionend',function(){
			if(i>=9){
				i=1;
				remvetranstion();
				settranslate(-i*bannerWidth)
			}else if(i<=0){
				i=8
				remvetranstion();
				settranslate(-i*bannerWidth)
			}
			point()
			
		})
		
		//定义一个坐标点移动的事件
		var point = function(){
			for(var m = 0 ;m<btn_li.length;m++){
				var obj = btn_li[m];
				obj.classList.remove('on')
			}
			btn_li[i-1].classList.add('on')
			
		}
		
		
		//做touch事件，考虑到什么问题
		//移动的距离小于图片1/3的时候会会回去，大于1/3进入下一张
		
		//定义一个全局变量
		//鼠标刚开始的位置
		var startmove = 0;
		var dismove = 0;
		var ismove = false;
		banner_img.addEventListener('touchstart',function(e){
			//移上去清除定时器
			clearInterval(timer)
			
			//获取刚开始的时候的clientX
			startmove = e.touches[0].clientX;
			//console.log(startmove)
			
		})
		banner_img.addEventListener('touchmove',function(e){
			 //获取移动的时候的clientX
			 var move = e.touches[0].clientX;
			 //console.log(move);
			 //移动距离
			 dismove = move - startmove;
			 //console.log(dismove)
			 ismove = true;
			 
			 //调用动画
					settranstion();
					//图片移动大小
					//调用图片跑
					settranslate(-i*bannerWidth+dismove)
			
		})
		banner_img.addEventListener('touchend',function(){
			//判断有没有移动，再根据移动距离判断是吸附回去还是下一张
			if(ismove){
				if(Math.abs(dismove)>=bannerWidth/3){
				   
				   if(dismove>0){
				   	i--;
				   }else{
				   	i++;
				   }
				   //调用动画
					settranstion();
					//图片移动大小
					//调用图片跑
					settranslate(-i*bannerWidth)
				}else{
					
					//调用动画
					settranstion();
					//图片移动大小
					//调用图片跑
					settranslate(-i*bannerWidth)
					
				}
				
				
				
			    }
			
			var timer = setInterval(function(){
			//每动一次i加1
			i++;
			
			//调用动画
			settranstion();
			//图片移动大小
			//调用图片跑
			settranslate(-i*bannerWidth)
		},1000)
			
			
			
			
			
		})
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
	
	
	banners()
	
	
	
	
	
	
	
}
