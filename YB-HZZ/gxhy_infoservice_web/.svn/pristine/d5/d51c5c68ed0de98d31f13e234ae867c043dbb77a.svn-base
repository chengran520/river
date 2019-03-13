var parentParams = {};
var riverManage = {
		clickRow:[],
		type:'1',
		loadTable: function () {
		    	var dataParams =  {
		    		id:'table_list',//表格id
		    		url: WEB_ROOT + 'data/StraRiver/getStraRivers',//地址,//地址
		    		height:$("#layui-content").height() - nowClientWidth * 64,//表格高度
		    		fileName:'一河一策信息表',//导出表格名称
		    		showExport:1,
		    	};
		    	bootstrapTable.columns =[{
		            title: '序号',
		            align: "center",
		            colspan: 1,
		            width: 1,
		            formatter: function (value, row, index) {
		            	var pageSize = $('#table_list').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
			            var pageNumber = $('#table_list').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
			            return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
		            }
		        },{
		            field: 'rvCd',
		            title: '河流编码',
		            align: 'center',
		            sortable: true,
		            colspan: 1,
		            width: 80
		        },{
		            field: 'rvNm',
		            title: '河流名称',
		            align: 'center',
		            sortable: true,
		            colspan: 1,
		            width: 80,
		        },{
		            field: 'gmName',
		            title: '河长姓名',
		            align: 'center',
		            sortable: true,
		            colspan: 1,
		            width: 80,
		        },{
		            field: 'straFileTitle',
		            title: '文件名称',
		            align: 'center',
		            sortable: true,
		            colspan: 1,
		            width: 100,
		        },{
		            field: 'creatTm',
		            title: '发布时间',
		            align: 'center',
		            sortable: true,
		            colspan: 1,
		            width: 100,
		        },{
		            field: 'checkNum',
		            title: '下载次数',
		            align: 'center',
		            sortable: true,
		            colspan: 1,
		            width: 50,
		        },
		        {
		            field: 'repeat',
		            title: '操作',
		            align: 'center',
		            sortable: true,
		            colspan: 1,
		            width: 80,
		            formatter: function (value, row, index) {
		          		//获取文件后缀名
		          		
		          		 var postf = row.straFileContent.substring(row.straFileContent.lastIndexOf("."),row.straFileContent.length)
		          		 var address = row.straFileContent.replace(window.parent.imgPath,"/pic/");
		          		var url=window.location.href.split("/gxhy")[0]+address; 
		          		 if(postf == ".pdf" || postf == ".PDF"||postf == ".doc"||postf == ".docx"){
		                		 var str = `<a class='table_btn table_btn_detail' href='${url}' download='${url}' title='${row.straFileTitle}'>下载</a>
				        	   		   <a class='table_btn table_btn_del' href="javascript:void(0)" onclick="riverManage.delList('${row.uuid}')">删除</a>`;		
		                	 }
			          		
			           return str;
		            }
		        }];
		    	bootstrapTable.queryParams["type"] = riverManage.type;
		    	bootstrapTable.bootstrapTableUtil(riverManage,dataParams);
		    },
		    //点击表格行
		    onClickRow:function(row, $element, field){
		    	riverManage.clickRow = row;
		    },
		    
		    //删除
		    delList:function(uuid){
		    	layer.confirm('您确定要删除数据吗？', {
				  btn: ['确认','取消'] //按钮
				}, function(){
					var result=commonUtils.post(WEB_ROOT + "data/StraRiver/deleteStrRiver",{"uuid":uuid},false);
			        if(result.flag){
			        	formUtil.successTip("删除成功!");
			        	$("#table_list").bootstrapTable('refresh');
			        }else{
			        	formUtil.errorTip("删除失败!");
			        }
				})
		    },
		    
		    //预览
		    showList:function(){	
		    	parentParams = riverManage.clickRow;
	            layer.open({//iframe
	                type: 2, //此处以iframe举例
	                title: riverManage.clickRow.straFileTitle,
	                area: [$(window).width() + 'px', $(window).height() + 'px'],
	                shade: 0,
	                maxmin: false,
	                content: WEB_ROOT + 'aRiverIsA/riverManagement/preview.html',
	                zIndex: layer.zIndex,
	                success: function (layero) {//弹出层打开成功后执行

	                },
	            });
		    },
		    fileChange:function(){
		    	var f = document.getElementById("straFileContent").files;  
 			    var size = f[0].size;  
 			    var upFileName = $("#straFileContent").val();
 			    var index1=upFileName.lastIndexOf(".");
 			    var index2=upFileName.length;
 			    var src=upFileName.substring(index1,index2);
 		    	var type=(src.substr(src.lastIndexOf("."))).toLowerCase();
 			    if(type!=".jpg" && type!=".jpeg" && type!=".png" && type !=".doc" && type!= ".docx" && type != ".pdf"){
 			    	layer.msg('上传文件格式不正确！', {icon: 5});
 			    	return false;
 		    	}
 			    if((size/1024) > (1024 * 5)){
 			    	layer.msg('上传的文件大小不超过5.0M！', {icon: 5});
 			    	return false;
 			    }
		    },
		  //查询河流信息
		  	selectRiverInfoList:function(){	
		  		 $.ajax({
		             url: WEB_ROOT+"basicInfo/riverLake/getAllRiver",
		             dataType: "json",
		             success: function(data){
		            	 var resultData = [];
		            	 if(data.data){
		            		 resultData = data.data;
		            	 }else{
		            		 if(data.rows){
			            		 resultData = data.rows;
			            	 }
		            	 }
		            	 
		            	 var strHtml = "";
		  	    		 for (var i = 0; i < resultData.length; i++){
		  	    			 strHtml += '<option value="' + resultData[i].rvNm + '" data-id="'+ resultData[i].rvCd +'">'; 
		  	    		 }
		  	    		$("#riverInfoList").html(strHtml);
		             }
		         });
		  	},
}
$(function(){
	
	riverManage.loadTable();
	//表格查询
	$(".queryBtn_table").click(function(){
		bootstrapTable.queryParams["rvCd"] = $("#table_list_toolbar #query_rvNm").val();
		bootstrapTable.queryParams["stm"] = $("#table_list_toolbar #startTm").val();
		bootstrapTable.queryParams["etm"] = $("#table_list_toolbar #endTm").val();	
    	$("#table_list").bootstrapTable('refresh');
	});
	
	//点击查看不同类清单
	$("#layui_top").on("click","li",function(){
		$(this).addClass('active').siblings().removeClass('active');
		riverManage.type = $(this).attr('id');
		bootstrapTable.queryParams["type"] = riverManage.type;
		$("#table_list").bootstrapTable('refresh');
	});
	
	riverManage.selectRiverInfoList();
	
	//将河流输入隐藏的input
 	$("#modal-content-file #rvNm").on("change",function(){
 	    var $options = $("#riverInfoList").children();
 	    for(var i = 0; i < $options.length; i++){
 	        if($options.eq(i).val().trim() == $(this).val().trim()){
 	            $("#rvCd").val($options.eq(i).attr("data-id"));
 	            break;
 	        }else{
 	            $("#rvCd").val($(this).val());
 	        }
 	    }
 	});
 	
	var options = {   
        type: 'POST',  
        url: WEB_ROOT+"data/StraRiver/insertStRiver",  
        dataType: 'json',  
        success:function(){
        	$('#fileModel').modal('hide');
        	layer.msg('上传成功！', {icon: 1});
        	$("#table_list").bootstrapTable('refresh');
        },    
        error : function(xhr, status, err) {    
        	layer.msg('上传失败，请检查后再重新上传！', {icon: 5});
        }  
    };
 	
	$("#Form2").submit(function(){  
			var straFileTitle = $("#straFileTitle").val();//文件名
	 		var rvCd = $("#rvCd").val();//文件名
	 		var straFileContent = $("#straFileContent").val();//文件名
	 		$("#type").val(riverManage.type);
	 		if(!straFileTitle){
	 			layer.msg('请填写文件名称！', {icon: 5});
	 			return false;
	 		}
	 		if(!rvCd){
	 			layer.msg('请选择河流！', {icon: 5});
	 			return false;
	 		}
	 		if(!straFileContent){
	 			layer.msg('请选择需要上传的文件！', {icon: 5});
	 			return false;
	 		}
	        $(this).ajaxSubmit(options);   
	        return false;   //防止表单自动提交  
	    }); 
 	
 	
 	$("#btn_showModal").click(function(){
 		$("#straFileTitle").val("")
		$("#rvCd").val("");
		$("#rvNm").val("");
		$("#straFileContent").val("");
		$("#straFileContent").fileinput('clear');
 		$("#fileModel").modal('show');
 		$(".fileinput-remove-button span.hidden-xs").html("移除");
 		$(".btn-file span.hidden-xs").html("选择");
 	});
 	
});

