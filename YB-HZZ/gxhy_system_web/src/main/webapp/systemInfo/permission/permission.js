	var index=0;
var url=WEB_ROOT+"system/menu/";
layui.config({
	  base: WEB_ROOT+'/common/util/' 
});

//使用表格初始化
layui.use('tableUtil', function(){
	var MenuTable=layui.MenuTable,
	perSubmit=layui.perSubmit;
 
});

layui.define('tableUtil',function(exports){
	 var $ = layui.$,
	 tableUtil=layui.tableUtil;
	 $("#uploadMenu").hide();
	 var h=tableUtil.initHeight("menuForm");
	 $(".layui-table-box").height(h);
	//初始化表格
	 var option={url:url+"getAllMenu",id:"menu",height:h - 40};
	 tableUtil.initTable(option); 	  
     exports('MenuTable',function(){});
});

layui.define(['table','tableUtil'],function(exports){
	 var $ = layui.jquery,
	 form = layui.form,
	 table=layui.table,
	 tableUtil=layui.tableUtil; 
	//监听按钮点击事件
	 $('#menuForm .layui-btn').on('click', function(){
	    var othis = $(this), method = othis.data('method');
	    menuInfo[method] ? menuInfo[method].call(this, othis) : '';
	 }); 
	 var menuInfo={
		//打开上传的弹窗
		id:"menu",
		//打开导入的弹窗
		offsetMenu: function(othis){
	         var type = othis.data('type');
	         var id='menuForm'+type;
	         var data={title:'数据导入',id:id,content:$('#uploadMenu'),offset:type,href:"http://localhost:8080/gxhy/common/templates/UserInfo.xls"};
	         tableUtil.openFrame(data);//调用自定义模板方法
		  	 var option={elem:'#selectMenuFile',url:url+'importMenuFile',bindAction:'#importMenuFile',tableId:menuInfo.id};
		  	 tableUtil.uploadFile(option);//调用自定义模板方法
		  },
		  //表格的重载
		  reloadMenu:function () { 
			  var data={id:menuInfo.id,value:$("#keyWord").val()};
			  tableUtil.reloadTable(data);//调用自定义模板方法
		  },
		  //删除行
		  deleteMenu:function(){
			  var checkStatus = table.checkStatus(menuInfo.id)
		      ,data = checkStatus.data;
			  if(data.length==0){
				  layer.msg("至少选择一项需要删除的用户信息", { icon: 5 });
				  return false;
			  }else{
				  var ids = '';
	              layui.each(data,function(k,v){
	            	  ids += this.permisId+','; 
	              });	             
	              var data={url:url+'deleteMenu',ids:ids,tableId:menuInfo.id,length:data.length,num:index};
	              tableUtil.deleteRow(data);//调用自定义模块方法
	          }
		  },
		  //导出excel
		  exportMenu:function(){
	          $.get(formatRiver.formatName(index,url+'getAll'),{"keyWord":$("#keyWord").val()},function(result){
		    		if(result.success){
		    			var title=formatRiver.exportFormat(index);
	    			    table.exportFile(title,result.data, 'xls');
		    		}
		    	});
		  },
		  //添加菜单
		  addMenu:function(){
			  layer.open({
		            type:1,
		            title:"新增资源",
		            area: ['38%','60%'],
		            content:$("#popSearchRoleTest").html()
		        });
			  var zNodes=commonUtils.get(url+"getAllPermission",{"index":"1"},null);	
			  if(zNodes.flag){
				  console.log(zNodes.data);
				  initSelectTree("demo", false, {"Y": "ps", "N": "s"},zNodes.data.menus);
			  }
		  }
		  
		  
	}
	exports('menuInfo',menuInfo);
});
 
layui.define(['form','tableUtil'],function(exports){
	 var $ = layui.jquery,
	 tableUtil=layui.tableUtil,
	 form = layui.form;
	//监听提交
	 form.on('submit(perForm)', function(data){
		 var ppermisId=$("#demoHide").val();
		 data.field.ppermisId=ppermisId;
		  var result=commonUtils.post(url+"saveMenu",data.field,null);
		  if(result.data==1){
			  layer.msg("添加成功", {icon: 1});			 
		  }else{
			  layer.msg("网络错误", {icon: 2});			
		  }
		  layer.closeAll();
		  var data={id:menuInfo.id,value:$("#keyWord").val()};
		  tableUtil.reloadTable(data);
		  return false;
	});
	 exports('perSubmit',function(){});
});
