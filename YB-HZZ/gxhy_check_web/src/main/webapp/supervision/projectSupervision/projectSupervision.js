var projectSupervisor = {
	clickRow:[],//当前点击行
	loadTable: function () {
	    	var dataParams =  {
	    		id:'table_project',//表格id
	    		url:'',//地址
	    		height:$(window).height() - clientSize * 1.2,//表格高度
	    		fileName:'项目督导信息表',//导出表格名称
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
	            title: '项目名称',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: '',
	            title: '所属行政区',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: '',
	            title: '投资总额(万)',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '完成总进度',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '计划开始时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 100,
	        },{
	            field: '',
	            title: '计划结束时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60  
	        },
	        {
	            field: '',
	            title: '建设单位名称',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80           
	        },
	        {
	            field: '',
	            title: '建设单位联系人',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80           
	        },
	        {
	            field: '',
	            title: '联系电话',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80           
	        },
	        {
	            field: '',
	            title: '审核文件',
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
	    	bootstrapTable.bootstrapTableUtil(projectSupervisor,dataParams);
	    },	    
}
$(function(){
	formatter_date_utils.initDatePicker2("startTm","endTm");
	  //清空查询参数
	bootstrapTable.clearParams();
	projectSupervisor.loadTable();
	 $(".queryBtn_table").click(function(){
    	bootstrapTable.queryParams["stm"] = $("#startTm").val();
    	bootstrapTable.queryParams["endTm"] = $("#endTm").val();
    	bootstrapTable.queryParams["type_project"] = $("#type_project").val();
    	bootstrapTable.queryParams["projectName"] = $("#projectName").val();
    	$("#table_project").bootstrapTable('refresh');
    });
});