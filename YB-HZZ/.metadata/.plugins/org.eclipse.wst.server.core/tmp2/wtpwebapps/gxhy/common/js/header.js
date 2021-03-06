$(function(){
	if(adcd.indexOf('5115') != -1){
		$('.title-span').html('宜宾市河（湖）长制管理信息化系统');
	}else{
		$('.title-span').html('威远县河（湖）长制管理信息化系统');
	}
});
//初始化应用
layui.use(['layer'], function(){//此处要注意，里面的加载无顺序，顺序是按模块来的
	 var $ = layui.$,
	 basePath = layui.getPath;//项目的路径
	 menuInfo.getMenuInfo();
	 $("#header-user-id").html(username);
	 
	 var show = 0;
	 $("#contract img").click(function(){
		 show++;
		 if(show % 2 != 0){
			$(".layui-side").css("left","-2.2rem");
			$(".layui-body").css("left","0px"); 
		 }else{
			$(".layui-side").css("left","0px");
			$(".layui-body").css("left","2.22rem"); 
		 }
	 });
	 if(username == '' || username == null || username == 'undefined' || username == 'null'){
		location.href=layui.basePath+"/login/login.html";
	 }
	 $("#header-user-out").click(function(){
		 menuInfo.logOut();
	 });
});
//获取项目路径
layui.define(function(exports){
	 var pathName = document.location.pathname;
	 var num = pathName.substr(1).indexOf("/");
	 var result = pathName.substr(0,num+1);
	 layui.basePath=result;
	//注意，这里是模块输出的核心，模块名必须和use时的模块名一致
	 exports('getPath', {}); 
});
var menuInfo={
	getMenuInfo:function(){		
		 $.get(layui.basePath+"/base/login/getUserMenuInfo",null,function(result){
			 var data = result.data;
	         if(data.headMenus.length > 0){
	      	   var str = "";
	      	   var firtUrl = "";
	      	   $.each(data.headMenus,function(i,item){
	      		   var firtCss = "hide";
	      		   var firtColor = "#00dde4";
	      		   var sx_it = "|";
	      		   if(i == data.headMenus.length-1){
	      			   sx_it = "";
	      			   $('#conter-div-info').load(firtUrl);      			 
	      		   }
	      		   if(i == 0){
	      			   firtUrl = item.menuUrl;
	      			   firtCss = "show";
	      			   firtColor = "#ffd906";
	      		   }
	      		 $("#navber-menu-ul").append("<li class='menu-li'><img class='menu-img "+firtCss+"' src='"+WEB_ROOT+"images/menu/"+item.permisId+"-"+firtCss+".png'></img><a class='a_menu' style='padding: 0 0 0 0;color:"+firtColor+"' href='javascript:void(0)' id='"+item.permisId+"'    data-url="+item.menuUrl+">"+item.permisNm+"&nbsp;&nbsp;"+sx_it+"");     		  
	      	   }); 
	         }	         
	   	  //菜单点击事件
	   	  $("#navber-menu-ul,#menuLeft-ul").on("click",".menu-li",function(){ 
	   		   $(this).addClass('layui-this').siblings().removeClass('layui-this');
	   		   var  url = $(this).find("a").attr("data-url");	   		  
	   		    var id = $(this).find("a").attr("id");
	   		    var name=$(this).find("a").text().replace(/\s/g,'').replace("|","");
	   		    if(id =="zhzs"){
	   		    	$(".layui-side").hide();
	   		    }else{
	   		    	$(".layui-side").show();
	   		    }
	   		   $('#conter-div-info').load(url);//加载第一个
	   		    var arr=[];
	   		    var html="";
	   		   //按钮的显示和隐藏
	   		   if($(this).parent().attr("id")=="navber-menu-ul"){
	   			   var flag=true;
	   			   var leftMenus=data.leftMenus;	   			
	   			   for(var i=0;i<leftMenus.length;i++){
	   				if(leftMenus[i].ppermisId==id){
//	   					if(flag){
//	   					  console.log(leftMenus[0].permisNm);
//	   					  html+="<div class='title-div'><a>"+name+"><span id='currentNm'>"+leftMenus[i].permisNm+"</span></a></div>";
//	   					  arr=menuInfo.getPersData(data.pers,leftMenus[i].permisId);
//	   					  flag=false;
//	   					} 
  					   html+="<li class='layui-nav-item layui-nav-itemed menu-li'><a class='javascript:void(0);' id='"+leftMenus[i].permisId+"' data-url="+leftMenus[i].menuUrl+" >"+leftMenus[i].permisNm+"<i class='layui-icon layui-icon-right'></i></a></li>";
  				     } 
	   			   }   			
	   			   $("#menuLeft-ul").html(html);
	   			   var src = $(this).find("img").attr("src");
	   			   src = src.replace("hide","show");
	   			   $(this).find("img").attr("src",src);
	   			   $(this).find("a").css("color","#ffd906");
	   			   //同级的其它菜单原样式显示。
		   		   var siblingsImg = $(this).siblings('li').find("img"); // 删除其他兄弟元素的样式
		   		   for(var i = 0; i < siblingsImg.length; i++){
		   			   var siblingSrc = $(siblingsImg[i]).attr("src");
		   			   $(siblingsImg[i]).attr("src",siblingSrc.replace("show","hide"))
		   		   }
		   		   $(this).siblings('li').find("a").css("color","#00dde4");
			   // 添加当前元素的样式
	   		   }else{
	   			   arr=menuInfo.getPersData(data.pers,id);
	   		   }
	   		    $("#conter-div-info").attr("data-per",$.unique(arr));
	   	   });  
	  });
	},
	getPersData:function(data,id){
		var arr=[];
		$.each(data,function(i,v){
  			 var str=v.permisId;
  			 if(str.indexOf(id)!=-1){
  				 var per = str.substr(str.lastIndexOf(":")+1,str.length);
  				 arr.push(per);
  			 }
  		 });
		return arr;
	},
	logOut:function(){
		layer.confirm('您确认退出当前用户？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				var reulst = commonUtils.get(WEB_ROOT+"base/login/user/logout",null,false);
				if(reulst.flag){					
					location.href=WEB_ROOT+"login/login.html";
				}
		});
	}
}
