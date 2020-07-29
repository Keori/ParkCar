/**
* moveScroll: Adds IE6
* Author: Uairain
* Email: 1989.38@163.com
* URL: http://blog.sina.com.cn/uairain
* Version: 0.0.1a

**/
(function(){
	$.fn.ScrollX = function(o){
		var o =  $.extend({speed:"slow",num:3,pageBtn:true,PNBtn:false,auto:true,autoSpeed:8000,Direction:"left"}, o || {});
		this.each(function(){
		    var curr = 0;
			var Left = 0;
			var $this = $(this).find(".ScrollBox ul");
			var $list = $this.find("li");
			if(o.Direction=="left"){
			    $this.css({left:0});
			    var listWidth = $list.width();
			    var ScrollWidth = $(".ScrollBox",this).width();
			    var Width = $list.length*listWidth;
			    var pages = Math.ceil(Width/ScrollWidth);
			    $this.css("width",Width);
			}else if(o.Direction=="top"){
			    $this.css({top:0});
			    var listHeight = $list.height();
			    var ScrollHeight = $(".ScrollBox",this).height();
			    var Height = $list.length*listHeight;
			    var pages = Math.ceil(Height/ScrollHeight);
			}
			if(o.pageBtn){
			    var $scrollPage = $(".scrollPage",this);
			    if($(".scrollPage",this).length<=0){
				    $(this).append('<div class="scrollPage"></div>');
				    var $scrollPage = $(".scrollPage",this);
				}else{
				    $scrollPage.empty();
				}
				
				if(Width<=ScrollWidth){
					$(".scrollPage",this).hide();
					return;	
				}
				for(var i = 0; i<pages; i++){
					$scrollPage.append("<span></span>");
				}
				var $PageSpan = $("span",$scrollPage);
				$PageSpan.click(function(){
					curr = $(this).index();
					scrollPlay();
				}).hover(function(){
					clearInterval(Play);	
				},function(){
					Play = setInterval(autoPlay,o.autoSpeed);	
				})
				 scrollPage();
			}
			if(o.auto){
				var Play = setInterval(autoPlay,o.autoSpeed);
				$(".ScrollBox",this).hover(function(){
					clearInterval(Play);	
				},function(){
					Play = setInterval(autoPlay,o.autoSpeed);
				})
			}
			if(o.PNBtn){
			    if($(".SelectScrollPN",this).length<=0){
				    $(this).append('<div class="SelectScrollPN"><span class="prev"></span><span class="next"></span></div>');
				}
				var $prev = $(this).find(".prev");
				var $next = $(this).find(".next");
				$prev.addClass("prevno");
				$prev.click(function(){
					curr--;
					scrollPlay();
					$next.removeClass("nextno");
				})
				$next.click(function(){
					curr++;
					scrollPlay();
					$prev.removeClass("prevno");	
				})
			}
			
			function scrollPage(){
			    $scrollPage.find("span").eq(curr).addClass("on").css({backgroundPosition:"0 -13px"}).siblings(".on").css({backgroundPosition:"0 0"}).removeClass();
		    }
		   
			function autoPlay(){
				curr++;	
				if(o.pageBtn){
				    scrollPage();
				}
				scrollPlay();
			}
			function scrollPlay(){
				if(curr>=pages){
					curr=0;
					if(o.PNBtn)$next.addClass("nextno");
				}else if(curr<0){
					curr=pages-1;
					if(o.PNBtn)$next.addClass("prevno");
				}
				if(o.Direction=="left"){
				    Left = -(curr*ScrollWidth);
				    if(-Left>Width-ScrollWidth){
					    Left = -(Width-ScrollWidth);
				    }
				    $this.stop().animate({left:Left},o.speed);
				}else{
				    Top = -(curr*ScrollHeight);
				    if(-Top>Height-ScrollHeight){
					    Top = -(Height-ScrollHeight);
				    }
				    $this.stop().animate({top:Top},o.speed);
				}
				if(o.pageBtn){
				    scrollPage();
				}
			}
		})
	}
})(jQuery)