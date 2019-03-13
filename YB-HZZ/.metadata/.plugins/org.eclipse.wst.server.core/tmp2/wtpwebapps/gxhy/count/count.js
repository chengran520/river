layui.use(['table'], function(){
	var $ = layui.$;
	 tableCount=layui.tableCount,
	 countDetail=layui.countDetail,
	 toolCount=layui.toolCount;
});
//表格
layui.define(['jquery','table'],function(exports){
	 var $ = layui.$,
	 tableH=layui.tableH,
	 table=layui.table;
	 var res=[];
	 var h=$(window).height()-110;
	 var h1=$("#layui-row1").height();
	 var h2=h-h1-100;
	 $("#countTable").height(h2);
	 table.render({
	        elem: '#countTable'
	        ,id:'countTable'
	        ,cols: [[ //标题栏
	              {field: 'num', title: '序号', width: '9%', sort: true,align:'center'}
	              ,{field: 'rank', title: '排名', width: '10%',align:'center'}
	              ,{field: 'khnm', title: '考核名称', width: '20%',align:'center'}
	              ,{field: 'sqsj', title: '申请时间', width: '10%',align:'center'}
	              ,{field: 'sqr', title: '申请人', width: '10%',align:'center'}
	              ,{field: 'zbf', title: '各项指标分', width: '10%',align:'center'}
	              ,{field: 'khpj', title: '考核评价', width:'8%', sort: true,align:'center'}
	              ,{field: 'khdf', title: '考核得分', width:'9%', sort: true,align:'center'}
	              ,{field: 'khpm', title: '考核排名', width:'10%', sort: true,align:'center'}
	        ]]
		 ,data:res
		    ,page: true //开启分页
		    ,limit:20 //默认十条数据一页
		    ,limits:[20,40,60,80,100] //数据分页条
		    ,loading:true
		    ,height:h2
	    });
  exports('tableCount',function(){});
});	
//表格高
layui.define('jquery',function(exports){
	 var $ = layui.$;
	 var h=$(".second").height();
	 var h1=$(".count-title").height();
	 var h2=h-h1-50;
     exports('tableH',function(){});
});
//监听行工具事件
layui.define('table',function(exports){
	  var table=layui.table;
	  table.on('tool(parse-table-demo)', function(obj){
	    if(obj.event === 'countdetail'){
	    	layer.open({
	            type:1,
	            skin:"layui-layer-lan",
	            title:"详情",
	            area: ['40%','50%'],
	            content:$("#countDetail").html()
	        });
	     } 
	  });
	exports('toolCount',function(){});
});