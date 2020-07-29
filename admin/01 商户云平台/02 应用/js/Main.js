// JavaScript Document
$(function(){
	/*
	//optiondiv
	$(".optiondiv .select").bind({
		click:function(){
			if($(this).find(".option").css("display")=="none")
			$(this).find(".option").slideDown(200);
			else
			$(this).find(".option").slideUp(0);
			
			$(this).find(".option span").unbind("click.s").bind({
			    "click.s":function(){
			        $(this).parent().slideUp(0);
		            $(this).parent().parent().find("b").html($(this).html());
		            return false;
			    }
			});
		},
		mouseleave:function(){
			$(this).find(".option").slideUp(0);	
		}
	})*/
	
	$(window).scroll(function(){
		if($(window).scrollTop()>250)
		{
			$("#iphone5").css({"position":"fixed","top":"0"})
		}else{
			$("#iphone5").css({"position":"relative","top":"0"})
		}
	})
	
	
	var $txt2_obj=$('#showpassword');//获取id为txt2的jquery对象
	var $pswd_obj=$('#password');//获取id为txt2的jquery对象
	$txt2_obj.focus(function(){
		$pswd_obj.show().focus();//使密码输入框获取焦点
		$txt2_obj.hide();//隐藏文本输入框

   })
	$pswd_obj.blur(function(){
		 if($pswd_obj.val()==''){//密码输入框失去焦点后，若输入框中没有输入字符时，则显现文本输入框
		 $txt2_obj.show();
		 $pswd_obj.hide();
		 }
	})   
	
	$("#vip_lxradio label").hover(function(index){
		var Index = $(this).index();
		if(Index==1){
			$(".type_vote").eq(0).slideDown();	
		}else if(Index==3){
			$(".type_vote").eq(1).slideDown();	
		}else if(Index==5){
			$(".type_vote").eq(2).slideDown();	
		}else if(Index==7){
			$(".type_vote").eq(3).slideDown();	
		}
		
	},function(){
		
		$(".type_vote").hide();	
	})
	
	$(".help_icon2").hover(function(){
		$(".type_vote").slideDown();	
	},function(){
		$(".type_vote").hide();	
	})
	
	$(".select").each(function(index, $this){
		var Index = 99;
		$(this).css({"z-index":Index-index})
	});
	
	$(".order_table tr:even").addClass("bg_f3");
	$("textarea.ms").focus(function(){
		var defaultVal = this.defaultValue;
		var textVal = $(this).val();
		if(textVal == defaultVal){
			$(this).val("");
			$(this).css("color","#333");
		};
	       
	})
	$("textarea.ms").blur(function(){
		var defaultVal = this.defaultValue;
		var textVal = $(this).val();
		if(textVal == ""){
			$(this).val(defaultVal);
			$(this).css("color","#999");
		}
	});
	
	$(".doc_box span").click(function(){
		if($(this).next(".show_doc").is(":hidden")){
		 $(this).next(".show_doc").fadeIn(100);
		}else{
		 $(this).next(".show_doc").fadeOut(100);
		};
	});
	
	$(".ewm_img a").hover(function(){
		$(this).next("div").show();	
	},function(){
		$(this).next("div").hide();	
	})
	
	$(".app_icon").click(function(){
		$(".app_header").toggleClass("hover").slideToggle();
		$("#header").slideToggle();
		$(this).toggleClass("hover");
		
		if($("#content").scrollTop()>$(".index_header").height()){
			alert("a");	
		}
	})
	

//开关
	  $(".jjy_box .skin-minimal input[type='checkbox']").on('ifUnchecked', function(event) {
		  	$(this).parent().siblings(".sub").fadeOut(100);
			//$(this).parent().siblings("label").css("color","#333333");
			$(this).parent().parent("li").css({"border-bottom":"none"});
	  });
	  $(".jjy_box .skin-minimal input[type='checkbox']").on('ifChecked', function(event) {
		  	$(this).parent().siblings(".sub").fadeIn(100);
			//$(this).parent().siblings("label").css("color","#f35e0b");
			$(this).parent().parent("li").css({"border-bottom":"1px #cccccc dotted"});
	  });
//隔行变色
	$(".tr_color tbody tr:odd").css({"background-color":"#fafafa"});


});


//积分抵现上限设置	
function selTab(v){
	  for(i=1;i<3;i++){
	   document.getElementById("sel_con_"+i).style.display = 'none';
	   if(i==v){
		document.getElementById("sel_con_"+v).style.display = 'inline';
	   }
	  }
	 }
	 