var projectList = {
	clickRow:[],//当前点击行
	loadTable: function () {
	    	var dataParams =  {
	    		id:'table_projectList',//表格id
	    		url:"",//地址
	    		height:$(window).height() - clientSize * 1.2,//表格高度
	    		fileName:'项目信息表',//导出表格名称
	    	};
	    	bootstrapTable.columns =[{
	            title: '序号',
	            align: "center",
	            colspan: 1,
	            width: 1,
	            formatter: function (value, row, index) {
	                return index + 1;
	            }
	        },{
	            field: '',
	            title: '督导事项编码',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: '',
	            title: '督导事项名称',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: '',
	            title: '督导事项内容',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '限制最后完成时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '督导事项状态',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 100,
	        },{
	            field: '',
	            title: '创建时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60  
	        },
	        {
	            field: '',
	            title: '创建人',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80           
	        },
	        {
	            field: 'field',
	            title: '操作',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80           
	        }
	        ];
	    	bootstrapTable.bootstrapTableUtil(projectList,dataParams);
	    },	    
}
$(function(){
	formatter_date_utils.initDatePicker2("startTm","endTm");
	  //清空查询参数
	bootstrapTable.clearParams();
	projectList.loadTable();
	 $(".queryBtn_table").click(function(){
    	bootstrapTable.queryParams["stm"] = $("#startTm").val();
    	bootstrapTable.queryParams["endTm"] = $("#endTm").val();
    	bootstrapTable.queryParams["type_project"] = $("#type_project").val();
    	bootstrapTable.queryParams["projectName"] = $("#projectName").val();
    	$("#table_projectList").bootstrapTable('refresh');
    });
});