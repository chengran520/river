layui.config({
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
              {field: 'num', title: '序号', width: '5%', sort: true,align:'center'}
              ,{field: 'type', title: '投诉类型', width: '10%',align:'center'}
              ,{field: 'source', title: '投诉来源', width: '10%',align:'center'}
              ,{field: 'address', title: '地区名称', width: '15%',align:'center'}
              ,{field: 'riverNm', title: '河流名称', width: '15%',align:'center'}
              ,{field: 'username', title: '投诉人', width: '10%',align:'center'}
              ,{field: 'Tm', title: '投诉时间', width: '10%',align:'center'}
              ,{field: 'status', title: '处理状态', width: '10%',align:'center'}
              ,{field: 'repeat', title: '处理状态', width:'10%',align:'center'}
        ]]
	 ,data:[]
	    ,page: true //开启分页
	    ,limit:10 //默认十条数据一页
	    ,limits:[10,20,30,40,50] //数据分页条
	    ,loading:true
	    ,height:400 * nowClientWidth
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
});
$(function(){

	//初始化
	var bl = parseInt($('.yuan_text').html());
	var rotatenum = bl;
	if(bl > 180){
		var blhtml = '';
		rotatenum = bl - 180;
		blhtml += '<div class="yuan_bl2">';
		blhtml += '<div class="yuan_bl4" style="-webkit-transform:rotate(' + rotatenum + 'deg);transform:rotate(' + rotatenum + 'deg);"></div>';
		blhtml += '</div>';
		//$('.yuan_bl1').remove($('.yuan_bl3'));
		$('.yuan_bl1').after(blhtml);
	}else{
		var blhtml = '';
		blhtml += '<div class="yuan_bl3" style="-webkit-transform:rotate(' + rotatenum + 'deg);transform:rotate(' + rotatenum + 'deg);"></div>';
		$('.yuan_bl1').append(blhtml);
	}
});