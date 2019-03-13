//初始化应用
layui.use('layer', function(){//此处要注意，里面的加载无顺序，顺序是按模块来的
	 var $ = layui.$,
	 basePath =layui.getPath,//项目的路径
	 loginForm = layui.loginForm;
	 layui.vercode();
});
//获取项目路径
layui.define(function(exports){
	 var pathName = document.location.pathname;
	 var index = pathName.substr(1).indexOf("/");
	 var result = pathName.substr(0,index+1);
	 layui.basePath=result;
	//注意，这里是模块输出的核心，模块名必须和use时的模块名一致
	 exports('getPath', {}); 
})
//获取验证码
layui.define('jquery',function(exports){
	var $ = layui.$;
	var html = "";
	exports('vercode',function(){
		html = " <img src='"+layui.basePath+"/base/login/getVerifyCodeImage' id='verifyCodeImage' class='layadmin-user-login-codeimg'>";
		$("#vercode").html(html);
	});
});
layui.define(['jquery','form'],function(exports){
	var $ = layui.$,
	form = layui.form;
	form.render();
	$(document).on('keydown', function(e){  //document为当前元素，限制范围，如果不限制的话会一直有事件
	   if(e.keyCode == 13){
			var data = {'loginName':$("#login-username").val(),'loginPasswd':$("#login-password").val(),'verifyCode':$("#login-vercode").val()};
			$.post(layui.basePath+"/base/login/user/login",data,function(result){
	    		if(result.success){
				    $('#loginPasswd').val(''); 
		      	    location.href = layui.basePath+result.message;
	    		}else{
	    			layer.msg(result.msg, {icon: 5,time:1500});
	    		}
	    	});
	   }   
	})
	exports('loginForm',function(){});
});
//登录
layui.define(['layer','form'],function(exports){
	var $ = layui.$
	,form = layui.form
    ,router = layui.router()
    ,search = router.search;
    form.render();
    form.on('submit(user-login-submit)', function(datas){
    	var data = datas.field;
    	var data = {'loginName':data.username,'loginPasswd':data.password,'verifyCode':data.verifyCode};
    	$.post(layui.basePath+"/base/login/user/login",data,function(result){
    		if(result.success){
			    $('#loginPasswd').val(''); 
	      	    location.href = layui.basePath+result.message;
    		}else{
    			layer.msg(result.msg, {icon: 5,time:1500});
    		}
    	});
    });
	exports('login',function(){});
});
