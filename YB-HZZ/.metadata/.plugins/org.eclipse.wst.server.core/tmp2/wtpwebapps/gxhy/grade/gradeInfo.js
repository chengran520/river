/*layui.config({
	  base: WEB_ROOT+'/common/util/' 
});
layui.use('tableUtil', function() {
	var tableGrade=layui.tableGrade,
	gradeReload=layui.gradeReload,
	tableUtil=layui.tableUtil,
	toolGrade=layui.toolGrade;
	//初始化时间
	tableUtil.initTm("startTm","endTm",'date');
});
//表格
layui.define(['jquery','table','tableUtil'],function(exports){
	 var $ = layui.$,
	 table=layui.table,
	 tableUtil= layui.tableUtil;
	 var h=tableUtil.initHeight("gradeForm");
	 table.render({
        elem: '#gradeTable'
        ,id:'gradeTable'
        ,cols: [[ //标题栏
              {field: 'num', title: '序号', width: '10%', sort: true,align:'center'}
              ,{field: 'applicant', title: '申请人', width: '20%',align:'center'}
              ,{field: 'addvnm', title: '行政区名称', width: '10%',align:'center'}
              ,{field: 'checkNm', title: '考核名称', width: '20%',align:'center'}
              ,{field: 'creteTm', title: '上报时间', width: '20%',align:'center'}
              ,{field: 'checkStatus', title: '考核状态', width: '10%',align:'center'}
              ,{field: 'repeat', title: '操作', width:'8%', sort: true,align:'center',toolbar: '#barDemo'}
        ]]
	 ,data:[]
	    ,page: true //开启分页
	    ,limit:20 //默认十条数据一页
	    ,limits:[20,40,60,80,100] //数据分页条
	    ,loading:true
	    ,height:h
    });
  exports('tableGrade',function(){});
});	

layui.define(['jquery','table'],function(exports){
	 var $ = layui.$,
	 table=layui.table;
	//监听按钮点击事件
	 $('#gradeForm .layui-btn').on('click', function(){
	    var othis = $(this), method = othis.data('method');
	    riverLakeInfo[method] ? riverLakeInfo[method].call(this, othis) : '';
	   
	 });
	 //静态不可用
	 var riverLakeInfo={
		 reloadGrade:function(){
			 var startTm=$("#startTm").val();
			 var endTm=$("#endTm").val();
		     var keyWord=$("#keyWord").val();
		     console.log(keyWord);
			 table.reload("gradeTable",{
			   	 page: {
			   	      curr: 1
			   	   }
		        ,where:{keyWord:keyWord,startTm:startTm,endTm:endTm}
		    });
		 }
	 }
	 exports('gradeReload',riverLakeInfo);
});

//监听行工具事件
layui.define('table',function(exports){
	  var table=layui.table;
	  table.on('tool(gradeTable)', function(obj){
		  console.log(obj);
	    if(obj.event === 'handleGrade'){
	    	layer.open({
	    		  type: 2,
	    		  skin:"layui-layer-lan",
	    		  title: '领导打分',
	    		  area: ['60%', '85%'],
	    		  content: WEB_ROOT+'/grade/leaderGrade.html'  
	    		});
	     } 
	  });

	exports('toolGrade',function(){});
});*/

var gradeInfo = {
	 loadTable: function () {
	    	var dataParams =  {
	    		id:'table_gradeInfo',//表格id
	    		url:'',//地址
	    		height:$(window).height() - clientSize * 1.2,//表格高度
	    		fileName:'领导打分信息表',//导出表格名称
	    		sidePagination:0,
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
	            field: 'applicant',
	            title: '申请人',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 100,
	        },{
	            field: 'addvnm',
	            title: '行政区',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: 'checkNm',
	            title: '考核名称',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'creteTm',
	            title: '上报时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'checkStatus',
	            title: '考核状态',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'field',
	            title: '操作',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        }];
	    	bootstrapTable.bootstrapTableUtil(gradeInfo,dataParams);
	    },
	    
	    //点击表格行
	    onClickRow:function(row, $element, field){
	    	gradeInfo.clickRow = row;
	    },	
}
$(function(){
	  //清空查询参数
	bootstrapTable.clearParams();
	gradeInfo.loadTable();//加载表格
	formatter_date_utils.initDatePicker2("startTm","endTm");
    $(".queryBtn_patrol").click(function(){
    	bootstrapTable.queryParams["keyword"] = $("#query_applicant").val();
    	bootstrapTable.queryParams["startTm"] = $("#startTm").val();
    	bootstrapTable.queryParams["endTm"] = $("#endTm").val();
    	$("#table_gradeInfo").bootstrapTable('refresh');
    });
})