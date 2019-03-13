layui.config({
	  base: '../../common/util/' 
});
layui.use('tableUtil', function() {
	var tableUtil=layui.tableUtil;
	$(".mark").mouseout(function(){
		var val=$(this).text();
		var mark=$(this).prev().text();
		tableUtil.layerAlert(val,mark);
	});	
});