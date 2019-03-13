function AutoScroll(obj) {
  $(obj).find("ul:first").animate({
      marginTop: "-22px"
  }, 500, function() {
     $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
  });
  }
  $(document).ready(function() {
     setInterval('AutoScroll("#demo")', 8000);
     $("#holder li").click(function(){
    	 $('#navber-menu-ul').find('li').eq(1).trigger('click');
 		 $('#menuLeft-ul').find('li').eq(5).trigger('click'); 
     });
     if(userId=="liuzb"||userId=="dongdh"||userId=="chensh"||userId=="yinzq"||userId=="wuhq"||userId=="zhush"){//宜宾市
		$("#hzNum").html("507");
		$("#rivNum").html("36");
	 }else if(userId=="dingyh"||userId=="lvzf"||userId=="fansb"){//叙州区
		 $("#hzNum").html("56");
		 $("#rivNum").html("12");
	 }else if(userId=="heyh"||userId=="lvse"||userId=="guom"||userId=="wanglp"||userId=="xiaof"||userId=="zhouj"||userId=="huangsg"){// 南溪区   
		 $("#hzNum").html("369");
		 $("#rivNum").html("15");
	 }else if(userId=="heyuanhe"||userId=="xuxh"||userId=="yangqm"){//江安镇
		 $("#hzNum").html("2");
		 $("#rivNum").html("2");
	 }else if(userId == "liy"||userId == "sunlp"||userId == "wangd"){//高县
		 $("#hzNum").html("41");
		 $("#rivNum").html("5");
	 }
  });