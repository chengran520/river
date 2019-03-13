<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="container-fluid" >
	<div class="header-div">
		<div class="header-div-img" >
			<img class="img-login" src="<%=request.getContextPath() %>/images/logo.png">
		</div>
		<div class="header-div-title" >
			<span class="header-title title-span">宜宾市河（湖）长制管理信息化系统</span>
		</div>
		<div class="header-div-img1">
	        <img src="<%=request.getContextPath() %>/images/user.png">
    	</div>
    	<div class="header-div-txt user-txt">
	        <span class="header-span" id="header-user-id"></span>
    	</div>
		<div class="header-div-img2">
	        <img src="<%=request.getContextPath() %>/images/message.png">
    	</div>
    	<div class="header-div-txt help-txt">
	        <span class="header-span">消息</span>
    	</div>
		<div class="header-div-img3">
	        <img src="<%=request.getContextPath() %>/images/logout.png">
    	</div>
    	<div class="header-div-txt out-txt">
	        <span class="header-span" id="header-user-out">退出</span>
    	</div>
		<div class="content-div-header">
			<img src="<%=request.getContextPath() %>/images/header_bg.png">
			<ul  id="navber-menu-ul" class="layui-nav navber-menu-ul" ></ul>
		</div>
	</div>
</div>
