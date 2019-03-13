var reportCount = {
		//加载表格
		loadTable:function(){
			var dataParams =  {
		    		id:'table_reportCount',//表格id
		    		url:'',//地址
		    		height:$("#layui_content").height(),//表格高度
		    		fileName: '信息上报统计表',//导出表格名称
			 };
			bootstrapTable.columns = [{
	            title: '序号',
	            align: "center",
	            colspan: 1,
	            width: 1,
	            formatter: function (value, row, index) {
	                return index + 1;
	            }
	        },{
	            field: '',
	            title: '行政区',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: '',
	            title: '旬报标题',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 120,
	        },{
	            field: '',
	            title: '河流总数',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '湖泊总数',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'adLevel',
	            title: '总河长总数',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: '',
	            title: '湖泊湖长总数',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: '',
	            title: '河段河长总数',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },
	        {
	            field: '',
	            title: '河长办人数',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        }];
			bootstrapTable.bootstrapTableUtil(reportCount,dataParams);
		},
		
}


$(function(){
	  //清空查询参数
	bootstrapTable.clearParams();
	reportCount.loadTable();
	
	//表格查询
	$(".queryBtn_table").click(function(){
		 bootstrapTable.queryParams["keyword"] = $("#query_keyWord").val();
    	 $("#table_reportCount").bootstrapTable('refresh');
	});
	
});
