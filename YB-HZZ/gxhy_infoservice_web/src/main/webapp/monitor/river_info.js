layui.config({
	  base: WEB_ROOT+'/common/util/' 
});
var monitor={
	getChartData:function(datas){
		var reulst = commonUtils.get(WEB_ROOT+"basicInfo/riverLong/echartRiver",datas,false);
		if(reulst.flag){
			 riverChartMap.initRiverChart(reulst.data,reulst.data.stnm);
		}
    },
    getQualityData:function(datas){
		var reulst = commonUtils.get(WEB_ROOT+"data_monitor/quality/echartQuality",datas,false);
		if(reulst.flag){
			QualityChart.inintChart(reulst.data,datas.id,6);
		}
	}
 }
var index=0;
var date; 
//使用表格初始化
layui.use(['tableUtil'], function(){
	 var layTab=layui.layTab;
});
layui.define(['element','tableUtil','table'],function(exports){
	 var $ = layui.$,
	 element=layui.element,
	 table=layui.table,
	 tableUtil=layui.tableUtil;
	 var height=$(".layui-body").height();
	 var titleH=$(".layui-tab-title").height();
	 $(".layui-tab-content").height(height-titleH);
	 var h=$("#initRiverInfoChart").height();
	 var h1=height-titleH-h-120;
	 $(".layui-table-box").height(h1);	 
	//初始化表格
	 var option={url:WEB_ROOT+"basicInfo/riverLong/getriverInfoList",id:'table_'+index,height:h};
	 tableUtil.initTable(option); 
	 var datas={"stcd":"62323590","tm":"2018-11-01 14:24:00"};
	 monitor.getChartData(datas);
	 table.on('row("table_0")', function(obj){
		 var data = obj.data;
	      var datas ={stcd:data.stcd,tm:data.tm};
		  monitor.getChartData(datas);		    
	   });  
	 //监听tab切换事件
	 element.on('tab(layTab)', function(data){	
		  index=data.index;	
		  var url="";
		  console.log(index);
		  if(index==0){
			  url=WEB_ROOT+"basicInfo/riverLong/getriverInfoList";
		  }else if(index==1){
			  url=WEB_ROOT+"data_monitor/quality/getQualityList";
		  }else if(index==2){
			   layer.msg('正在加载中...', {icon: 16,shade: [0.1, '#f5f5f5'], time:1000})
			  $("#videoIfram").attr("data","1");
			  $("#videoIfram").attr("src","monitor/video/demo/demo.html");
		  }
		  var option={url:url,id:'table_'+index,height:h};
		  tableUtil.initTable(option);	
		  if(index==1){
			  if(date==null){
				  date="2018-11-09 04:52:00";
			  }
			  var datas = {"id":"wt","date":date};
			  monitor.getQualityData(datas);
			  $("#wt-val").html("14.5");
			  $("#torb-val").html("5.43");
			  $("#cond-val").html(" 9.87");
			  $("#ph-val").html(" 6.97");
			  $("#dox-val").html(" 9.67");
		  } 
		  table.on('row('+'table_'+index+')', function(obj){
			  if(index==0){
				  var data = obj.data;
			      var datas ={stcd:data.stcd,tm:data.tm};
				  monitor.getChartData(datas);	
			  }else{
				  var data = obj.data;
				  date=obj.data.spt;
				  $("#wt-val").html(data.wt.toFixed(2));
				  $("#torb-val").html(data.turb.toFixed(2));
				  $("#cond-val").html(data.cond.toFixed(2));
				  $("#ph-val").html(data.ph.toFixed(2));
				  $("#dox-val").html(data.dox.toFixed(2));
				  console.log(data);
				  var datas = {"id":"wt","date":date};
				  monitor.getQualityData(datas);
			  }		    
		   }); 			 
     }); 	
    exports('layTab',function(){});
});

$(function(){	
	$("#wt").on("click",function(){
		var datas={"id":"wt","date":date};
		monitor.getQualityData(datas);
		$("#wt").addClass('active').siblings().removeClass("active");
	});
	$("#turb").on("click",function(){
		var datas={"id":"turb","date":date};
		monitor.getQualityData(datas);
		$("#turb").addClass('active').siblings().removeClass("active");
	});
	$("#cond").on("click",function(){
		var datas={"id":"cond","date":date};
		monitor.getQualityData(datas);
		$("#cond").addClass('active').siblings().removeClass("active");
	});
	$("#ph").on("click",function(){
		var datas={"id":"ph","date":date};
		monitor.getQualityData(datas);
		$("#ph").addClass('active').siblings().removeClass("active");
	});
	$("#dox").on("click",function(){
		var datas={"id":"dox","date":date};
		monitor.getQualityData(datas);
		$("#dox").addClass('active').siblings().removeClass("active");
	});
});
