<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!-- 此公共JSP中存放系统中所有界面可能用得到的插件。个体单用的界面使用插件不要放在此处 -->
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="common/util/bootstrap/css/bootstrap.min.css"/>
	
	<link rel="stylesheet" href="<%=request.getContextPath()%>/common/layui/css/layui.css" >
	<link rel="stylesheet" href="<%=request.getContextPath()%>/common/zTree_v3/css/metroStyle/metroStyle.css" >
	<link rel="stylesheet" href="<%=request.getContextPath()%>/common/css/layUtil.css" >
	<link type="text/css" rel="stylesheet" href="<%=request.getContextPath()%>/common/easyui/themes/metro-blue/easyui.css">
    <link type="text/css" rel="stylesheet" href="<%=request.getContextPath()%>/common/easyui/themes/icon.css">
	<link rel="stylesheet" href="<%=request.getContextPath()%>/common/lightBox/zoomify.min.css"  />
	
   <!-- 表格 -->
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/common/util/bootstrap/css/bootstrap-table.min.css"/>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/common/css/base_modal.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/common/css/base_table.css">
	<!-- JS -->
	<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.3&key=832085f1e357efae7eb7e34449ac1a36"></script> 
	<script src="http://webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
	<script  src="http://api.tianditu.com/api?v=4.0&tk=ecf2c200ad3310de9b5adbcaca144c66"></script>	 
	<%-- <script type="text/javascript" src="<%=request.getContextPath()%>/common/js/jquery/jquery-1.11.2.js"></script> --%>
	<%-- <script  src="<%=request.getContextPath()%>/common/jquery/jquery-3.1.1.min.js"></script> --%>
	
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/jquery/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/jquery/jquery-latest.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/jquery/jquery-ui.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/laydate/laydate.js"></script>
	<script  src="<%=request.getContextPath()%>/common/layui/layui.js"></script>
	<script  src="<%=request.getContextPath()%>/common/echarts/echarts.min.js"></script>
	<script  src="<%=request.getContextPath()%>/common/dateUtil/formatterDateUtils.js"></script>
	<script  src="<%=request.getContextPath()%>/common/dateUtil/formatterTipUtils.js"></script>
	<!-- ztree插件 -->
	<script src="<%=request.getContextPath()%>/common/zTree_v3/js/jquery.ztree.core-3.5.min.js"></script>
	<script src="<%=request.getContextPath()%>/common/zTree_v3/js/jquery.ztree.excheck-3.5.min.js"></script>
	<script src="<%=request.getContextPath()%>/common/zTree_v3/js/jquery.ztree.exhide-3.5.min.js" ></script>
	<script src="<%=request.getContextPath()%>/common/lightBox/zoomify.min.js"></script>	
	<script src="https://open.ys7.com/sdk/js/1.3/ezuikit.js"></script>
	<script src="<%=request.getContextPath()%>/common/My97DatePicker/WdatePicker.js"></script>  
	
	<!-- 表格 -->
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/bootstrap/js/bootstrap-table.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/bootstrap/js/bootstrap-table-zh-CN.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/bootstrap/js/bootstrap-table-filter-control.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/bootstrap/js/tableExport.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/bootstrap/js/bootstrap-table-export.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/bootstrap/js/bootstrap-table-toolbar.js"></script>


	<!-- 公共js -->
    <script type="text/javascript" src="<%=request.getContextPath()%>/common/util/commonUtils.js"></script>

	<!--  <script type="text/javascript" src="<%=request.getContextPath()%>/common/util/tree.js"></script> --->
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/bootstrapTable.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/common/util/form.js"></script>
</head>
<body>
</body>
</html>