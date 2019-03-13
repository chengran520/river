<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/base/taglibs_logout.jsp"%>
<%@ include file="/common/base/include_BaseCommon.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui">
	<link rel="icon" href="images/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
	<link rel="bookmark" href="images/favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" href="${basePath}common/css/header.css" >
	<script src="${basePath}common/js/header.js"></script>
	<script src="${basePath}common/util/rem.js"></script>
	<title>河（湖）长制管理信息化系统</title>
	<script type="text/javascript">
	    var  userId='${userId}';
		var username = '${username}';
		var WEB_ROOT = '${basePath}';
		var adcd = '${userAdcd}';
		var nowClientWidth;//当前屏幕宽度
		var imgPath = "D:/rcxh/file/";
	 	</script>
</head>
<body id="body" class="body" style="overflow: hidden;">
	<header class="header"  style="z-index:999;padding: 0px 0px;">
        <jsp:include page="/common/base/header.jsp"></jsp:include>
    </header>
	<div id="loadurl">
	  <div class="layui-side layui-bg-black">
	    <div class="layui-side-scroll">
			 <ul class="layui-nav layui-nav-tree site-demo-nav" id="menuLeft-ul"></ul>
	    </div>
	    <div id="contract">
	        <img src="${basePath}common/images/leftMenu/hide.png">
	    </div>
	  </div>	  
	  <div id="conter-div-info" data-per="">
	  </div>
	</div>
</body>
</html>