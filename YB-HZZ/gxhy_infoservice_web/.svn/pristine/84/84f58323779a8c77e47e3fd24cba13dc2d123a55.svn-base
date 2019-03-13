layui.use('table', function() {
	 var table=layui.table;
	var  infoReport_body = $("#infoReport_body").height();
	console.log(infoReport_body - 300 * nowClientWidth)
	var tableOptions = {
	         url: WEB_ROOT+"infoReport/demo2.json"
	        ,method: "get" //方式
	        ,id:"infoTable"
	        ,page: true //开启分页
		    ,limit:20 //默认十条数据一页
		    ,limits:[20,40,60,80,100] //数据分页条
    	    ,loading:true
    	    ,height :infoReport_body - 300 * nowClientWidth
	    };
	table.init("infoTable", tableOptions);	
});
