var waterResource = {
	clickRow:[],//当前点击行
	 loadTable: function () {
	    	var dataParams =  {
	    		id:'table_waterResource',//表格id
	    		url:null,//地址
	    		height:$(window).height() - clientSize * 1.2,//表格高度
	    		fileName:'综合查询信息表',//导出表格名称
	    	};
	    	bootstrapTable.columns =[{
	            title: '序号',
	            align: "center",
	            colspan: 1,
	            width: 1,
	            formatter: function (value, row, index) {
	            	 var pageSize = $('#table_waterResource').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
		             var pageNumber = $('#table_waterResource').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
		             return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
	            }
	        },{
	            field: 'rvNm',
	            title: '河流名称',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'adnm',
	            title: '所属行政区',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'busineType',
	            title: '档案标题',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'busineType',
	            title: '档案内容',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width:100
	        },{
	            field: 'downNum',
	            title: '文档下载量',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60
	        },{
	            field: 'clickNum',
	            title: '文档点击量',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60,
	        }
	        ];
	    	bootstrapTable.bootstrapTableUtil(waterResource,dataParams);
	    }
}
$(function(){
	formatter_date_utils.initDatePicker2("startTm","endTm");
	bootstrapTable.clearParams();
	waterResource.loadTable();
	//commonZtree.ztree("menuZtree",false,WEB_ROOT+"adcd/getUserAdcdZtree");
});