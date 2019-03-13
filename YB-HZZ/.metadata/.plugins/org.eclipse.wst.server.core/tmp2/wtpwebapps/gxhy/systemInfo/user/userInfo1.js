var user = {
	 clickRow:[],//当前点击行
	 id:"user",
	 loadTable: function () {
	    	var dataParams =  {
	    		id:'table_user',//表格id
	    		url:WEB_ROOT+ 'system/user/getAllUser',//地址
	    		height:$(window).height() - clientSize * 1.5,//表格高度
	    		fileName:'综合查询信息表',//导出表格名称
	    	};
	    	bootstrapTable.columns =[{
	            title: '序号',
	            align: "center",
	            colspan: 1,
	            width: 1,
	            formatter: function (value, row, index) {
	            	 var pageSize = $('#table_user').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
		             var pageNumber = $('#table_user').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
		             return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
	            }
	        },{
	            field: 'userName',
	            title: '用户名',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'userWechat',
	            title: '微信号',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'userSex',
	            title: '性别',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'userPhone',
	            title: '用户手机',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 100,
	        },{
	            field: 'createTm',
	            title: '创建时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60  
	        },
	        {
	            field: 'addvnm',
	            title: '所属行政区',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60
	        },
	        {
	            field: 'repeat',
	            title: '操作',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60,
	            formatter: function (value, row, index) {
	            	 var html = `
		               <a href="javascript:void(0)" class="table_btn table_btn_edit" onclick="user.showModal(3)">设置角色</a>&nbsp;&nbsp;
		               <a href="javascript:void(0)" class="table_btn table_btn_del" onclick="user.showModal(4)">设置密码</a>&nbsp;&nbsp;
		               <a href="javascript:void(0)" class="table_btn table_btn_del" onclick="user.showModal(2)">修改</a>&nbsp;&nbsp;`
	                return html;
	            }
	            
	        }
	        ];
	    	bootstrapTable.bootstrapTableUtil(user,dataParams);
	    },
	  //点击表格行
	    onClickRow:function(row, $element, field){
	    	user.clickRow = row;
	    },
	    //显示模态框
	    showModal:function(type){
	    	  user.type = type;
	    	  $("#modal_user #userPwDIV").show();
	    	  switch (type) {
		    	  case 1:
		    		  setTimeout(function(){
		    			  formUtil.showBtn(type,user);
		    	    	},100);
		    		  commonZtree.ztree("menuZtree",false,WEB_ROOT+"adcd/getUserAdcdZtree");
		    	   break;
		    	  case 2:
		    		  setTimeout(function(){    			 
	    			     formUtil.showBtn(type,user);
		    			 $("#pmenuIdName").val($("#addvnm").val());
	    	    	},100);
		    		  commonZtree.ztree("menuZtree",false,WEB_ROOT+"adcd/getUserAdcdZtree");
		    		  $("#modal_user #userPwDIV").hide();
		    	   break;
			      case 3:
						$("#modal_setRole").modal("show");
						  var zNodes=commonUtils.get(WEB_ROOT+"system/role/getAllRoles",{"keyWord":user.clickRow.userId},null);	
						  if(zNodes.flag){							
							  initSelectTree("userDemo", true, {"Y": "ps", "N": "s"},zNodes.data.roles,1); 
							    //复选框的回显
							   selectNode(zNodes.data.pers,"userDemoTree",userDemo);			 
						  	}			 
						break;
					case 4:
						$("#modal_setPassword").modal("show");
						break;
					case 5:
						$("#modal_addUser").modal("show");
						break;
			   }
	    },
	    submitForm:function(type){
	    	switch (type) {
				case 1://设置角色
					debugger
				   var ids=$("#userDemo input").val();//获取所有的角色
		    	   var data={"ids":ids,"keyWord":user.clickRow.userId};
		    	   var result=commonUtils.post(WEB_ROOT+"system/role/saveUserRoles",data,null);
		    	   if(result.flag==true){
		    		   formUtil.successTip("授权成功！");		 
		 		   }else{
		 			   formUtil.errorTip("网络错误！");		
		 		   }
					break;
				case 2://设置密码
					 var userPasswd = $('#pwd').val();
			    	 var data={"uuid":user.clickRow.uuid,"userPasswd":userPasswd};
			    	 var result=commonUtils.get(WEB_ROOT+"/system/user/updateUser", data, null);
			    	 if(result.flag==true){
			 			 formUtil.successTip("修改成功！");
			 			 $("#modal_setPassword").modal("hide");
			 		 }else{
			 			 formUtil.errorTip("网络错误！");	
			 		 }
				   break;
				case 3://保存用户
					$("#userAddvcd").val($("#pmenuId").val());
					$("#addvnm").val($("#pmenuIdName").val());
					formUtil.submitFormData(user,WEB_ROOT+"system/user/insertUser");
				   break;
				case 4://保存用户
					formUtil.submitFormData(user,WEB_ROOT+"system/user/insertUser"); 
				   break;
			}   
	    }
}
$(function(){
	  //清空查询参数
	bootstrapTable.clearParams();
	user.loadTable();
	formatter_date_utils.initDatePicker2("startTm","endTm");
	//表格查询
	$(".queryBtn_select").click(function(){
		bootstrapTable.queryParams["keyWord"] = $("#table_select_toolbar #keyword").val();
		bootstrapTable.queryParams["startTm"] = $("#table_select_toolbar #startTm").val();
		bootstrapTable.queryParams["endTm"] = $("#table_select_toolbar #endTm").val();
    	$("#table_user").bootstrapTable('refresh');
	});
	//表格数据导入
	$(".queryBtn_import").click(function(){
		 $("#modal_userUpload").modal("show");
		 formUtil.uploadFile("uploadUser",WEB_ROOT+"/system/user/importUserInfo",2);
		$("#uploadUser").on("fileuploaded", function(e, data) {
			if (data.response.success ==true) {
				formUtil.successTip("上传成功!");			
				 $("#modal_userUpload").modal("hide"); 
				 $("#table_user").bootstrapTable('refresh');
			} else {
				formUtil.successTip("上传失败!");
			}
		});			
	});
	
	$("#pmenuIdName").on("change",function(){
		   if($("#pmenuIdName").val()==""){
			   $("#pmenuId").val("");
		   }
	});
});

//搜索节点并高亮显示
function searchRoleBtn() {
	var key = $("#keyRole").val();
    if (key != null) {
    	  findsearchTree(key,"userDemoTree");
    }else{
        layer.msg("请输入搜索条件", {icon: 2});	
    }
    return;
}