var permission = {
	 clickRow:[],//当前点击行
	 id:"permission",
	 type:'',
	 loadTable: function () {
	    	var dataParams =  {
	    		id:'table_permission',//表格id
	    		url:WEB_ROOT+'system/menu/getAllMenu',//地址
	    		height:$(window).height() - clientSize * 1.5,//表格高度
	    		fileName:'综合查询信息表',//导出表格名称
	    	};
	    	bootstrapTable.columns =[{
	            title: '序号',
	            align: "center",
	            colspan: 1,
	            width: 1,
	            formatter: function (value, row, index) {
	            	 var pageSize = $('#table_permission').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
		             var pageNumber = $('#table_permission').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
		             return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
	            }
	        },{
	            field: 'permisId',
	            title: '权限Id',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: 'permisNm',
	            title: '权限名称',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'ppermisId',
	            title: '父级权限Id',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'menuUrl',
	            title: '权限地址',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'createTime',
	            title: '创建时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'type',
	            title: '权限类型',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 100,
	            formatter: function (value, row, index) {
	            	if(value==0){
	            		 return '菜单';
	            	}else{
	            		return '按钮';
	            	}
	            }	            
	          },{
	            field: 'repeat',
	            title: '操作',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 100,
	            formatter: function (value, row, index) {
	            	 var html = `
		               <a href="javascript:void(0)" class="table_btn table_btn_edit" onclick="permission.showModal(2)">修改</a>&nbsp;&nbsp;
		               <a href="javascript:void(0)" class="table_btn table_btn_del" onclick="permission.showModal(3)">删除</a>&nbsp;&nbsp;`
	                return html;
	            }	            
	          }
	        ];
	    	bootstrapTable.bootstrapTableUtil(permission,dataParams);
	    },
	    //点击表格行
	    onClickRow:function(row, $element, field){
	    	permission.clickRow = row;
	    },
	    //显示模态框
	    showModal:function(type){
	    	switch (type) {
			case 1:case 2://新增修改
				permission.type = type;
		    	 setTimeout(function(){  
		    		 formUtil.showBtn(type,permission);	  
			     },100);
				break;
			case 3://删除
				layer.confirm('确认删除此角色吗？',function(index){
	    			var id = permission.clickRow.permisId;//编码
	    			var url = WEB_ROOT+'system/menu/deleteMenu?ids=' + id;
	    			formUtil.deleteData(url,'table_permission');
    			}); 
				break;
			case 4://导入
				$("#modal_perUpload").modal('show');
			}   
	    },
	    //type: 1新增 2编辑    id:表单ID
	    submitForm:function(type){
	    	$("#ppermisId").val($("#pmenuId").val());
	    	formUtil.submitFormData(permission,WEB_ROOT+"system/menu/saveMenu?ptype="+type+"");
	    }
}
$(function(){
	bootstrapTable.clearParams();
	permission.loadTable();
	commonZtree.ztree("menuZtree",false,WEB_ROOT+"system/menu/getAllPermission",1);
	$("#pmenuIdName").on("change",function(){
		   if($("#pmenuIdName").val() ==""){
			   $("#pmenuId").val("");
		   }
	});
	
	$(".queryBtn_import").click(function(){
		 $("#modal_roleUpload").modal("show");
		 formUtil.uploadFile("perUpload",WEB_ROOT+"system/menu/importMenuFile",2);
		$("#perUpload").on("fileuploaded", function(e, data) {
			if (data.response.success ==true) {
				formUtil.successTip("上传成功!");
				 $("#modal_perUpload").modal("hide"); 
				 $("#table_permission").bootstrapTable('refresh');
			} else {
				formUtil.successTip("上传失败!");
			}
		});			
	});	
	
	//表格查询
	$(".queryBtn_select").click(function(){
		bootstrapTable.queryParams["keyWord"] = $("#table_select_toolbar #keyword").val();
    	$("#table_permission").bootstrapTable('refresh');
	});
});