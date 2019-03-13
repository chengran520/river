var index=0;
var url=WEB_ROOT+"basicInfo/riverLong/";
layui.config({
	  base: WEB_ROOT+'/common/js/' 
});
//使用表格初始化
layui.use(['tableUtil'], function(){
	 var riverLongTab=layui.riverLongTab;
});
layui.define(['element','tableUtil'],function(exports){
	 var $ = layui.$,
	 element=layui.element,
	 tableUtil=layui.tableUtil;
	 $("#uploadRL").hide();
	 var h=tableUtil.initStyle("riverLongForm");
	 $(".layui-tab-content").height(h);
	//初始化表格
	 var option={url:url+"getAllRiverLong",id:'riverLong',height:h};
	 tableUtil.initTable(option); 
	//监听tab切换事件
	 element.on('tab(riverlongTab)', function(data){	
		  index=data.index;	
		  var option={url:url+"getAllRiverLong?index="+index+"",id:'riverLong',height:h};
		  tableUtil.initTable(option);
     });  	  
     exports('riverLongTab',function(){});
});
layui.define(['table','tableUtil'],function(exports){
	 var $ = layui.jquery,
	 table=layui.table,
	 tableUtil=layui.tableUtil;
	 //监听按钮点击事件
	 $('#riverLongForm .layui-btn').on('click', function(){
	    var othis = $(this), method = othis.data('method');
	    riverLongInfo[method] ? riverLongInfo[method].call(this, othis) : '';
	 });
	 var riverLongInfo={
		//打开上传的弹窗
		 offsetRL: function(othis){
	         var type = othis.data('type');
	         var id='riverLongForm'+type;
	         var data={title:'数据导入',id:id,content:$('#uploadRL'),offset:type,href:"http://localhost:8080/gxhy/common/templates/RiverLongInfo.xls"};
	         tableUtil.openFrame(data);//调用自定义模板方法
		  	 var option={elem:'#selectRLFile',url:url+'/importRiverLong?index='+index,bindAction:'#importRLFile',tableId:'riverLong'};
		  	 tableUtil.uploadFile(option);//调用自定义模板方法
		  },
		  //表格的重载
		  reloadRL:function () { 
			  var data={id:'riverLong',value:$("#keyWord").val()};
			  tableUtil.reloadTable(data);//调用自定义模板方法
		  },
		  //删除行
		  deleteRL:function(){
			  var checkStatus = table.checkStatus('riverLong')
		      ,data = checkStatus.data;
			  if(data.length==0){
				  layer.msg("至少选择一项需要删除的河流数据", {icon:5});
				  return false;
			  }else{
				  var ids = '';
	              layui.each(data,function(k,v){
	            	  ids += this.gmCode+','; 
	              });
	             alert(ids);
	              var data={url:url+'deleteRiverLong',ids:ids,tableId:'riverLong',length:data.length,num:index};
	              tableUtil.deleteRow(data);//调用自定义模块方法
	          }
		  },
		  //导出excel
		  exportRL:function(){
	          $.get(url+"getAllRiverLong?index="+index+"",{"keyWord":$("#keyWord").val()},function(result){
		    		if(result.success){
		    			var title=['名称','职务','所属行政区编码','所属行政区名称','手机号码','行政级别','河长类型','备注','主要领导','最高职务所在单位名称','单位类别','生效时间','编码'];
	    			    table.exportFile(title,result.data, 'xls');
		    		}
		      });
		  }
	}
	exports('riverLong',riverLongInfo);
});