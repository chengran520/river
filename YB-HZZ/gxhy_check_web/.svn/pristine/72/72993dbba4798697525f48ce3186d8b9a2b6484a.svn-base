/*layui.config({
	  base: WEB_ROOT+'/common/util/' 
});
layui.use('tableUtil', function() {
	var tableRank=layui.tableRank,
	rankReload=layui.rankReload,
	tableUtil=layui.tableUtil;
	//初始化时间
	tableUtil.initTm("startTm","endTm",'date');
});
//表格
layui.define(['jquery','table','tableUtil'],function(exports){
	 var $ = layui.$,
	 table=layui.table,
	 tableUtil= layui.tableUtil;
	 var h=tableUtil.initHeight("rankForm");
	 table.render({
        elem: '#rankTable'
        ,id:'rankTable'
        ,cols: [[ //标题栏
               {field: 'num', title: '序号', width: '5%', sort: true,align:'center'}
              ,{field: 'checkNm', title: '考核名称', width: '18%',align:'center'}
              ,{field: 'applicant', title: '考核人', width: '10%',align:'center'}
              ,{field: 'createTm', title: '申请时间', width: '10%',align:'center'}
              ,{field: 'totalMark', title: '考核分数（分）', width: '10%',align:'center'}
              ,{field: 'evaluate', title: '考核评价', width: '18%',align:'center'}
              ,{field: 'rank', title: '考核排名', width: '10%',align:'center'}
              ,{field: 'mark', title: '各指标分', width:'7%', sort: true,align:'center'}
              ,{field: 'totalRank', title: '整体排名', width:'7%', sort: true,align:'center'}
        ]]
	 ,data:[
			          ]
	    ,page: true //开启分页
	    ,limit:20 //默认十条数据一页
	    ,limits:[20,40,60,80,100] //数据分页条
	    ,loading:true
	    ,height:h
    });
  exports('tableRank',function(){});
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
	 exports('rankReload',riverLakeInfo);
});
*/

var rankInfo = {
	 loadTable: function () {
	    	var dataParams =  {
	    		id:'table_rankInfo',//表格id
	    		url:'',//地址
	    		height:$(window).height() - clientSize * 1.2,//表格高度
	    		fileName:'考核排名信息表',//导出表格名称
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
	            field: '',
	            title: '考核名称',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 100,
	        },{
	            field: '',
	            title: '考核人',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: '',
	            title: '申请时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '考核分数',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '考核评价',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '考核排名',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '各指标分',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: '',
	            title: '整体排名',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        }];
	    	bootstrapTable.bootstrapTableUtil(rankInfo,dataParams);
	    },
	    
	    //点击表格行
	    onClickRow:function(row, $element, field){
	    	rankInfo.clickRow = row;
	    },	
}
$(function(){
	  //清空查询参数
	bootstrapTable.clearParams();
	rankInfo.loadTable();//加载表格
	formatter_date_utils.initDatePicker2("startTm","endTm");

    
    $(".queryBtn_patrol").click(function(){
    	bootstrapTable.queryParams["keyword"] = $("#query_applicant").val();
    	bootstrapTable.queryParams["startTm"] = $("#startTm").val();
    	bootstrapTable.queryParams["endTm"] = $("#endTm").val();
    	$("#table_rankInfo").bootstrapTable('refresh');
    });
})