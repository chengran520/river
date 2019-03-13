var aRiverLong={
		adLevel:null,//当前查询表格参数
		tabVal:'河长',//表格名称
		clickRow:'',
		id:'aRiverLong',//页面元素ID
	    type:'',//增删改查 类型
	    addvcd:'',
		//加载表格
		loadTable:function(){
			var dataParams =  {
		    		id:'table_aRiverLong',//表格id
		    		url:WEB_ROOT+"basicInfo/riverLong/getAllRiverLong",//地址
		    		height:$("#layui_content").height() - nowClientWidth * 140,//表格高度
		    		fileName: aRiverLong.tabVal + '信息表',//导出表格名称
		    		sidePagination:0,
			 };
			bootstrapTable.columns = [{
	            title: '序号',
	            align: "center",
	            colspan: 1,
	            width: 1,
	            formatter: function (value, row, index) {
	                return index + 1;
	            }
	        },{
	            field: 'gmName',
	            title: '河长名称',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: 'gmDuties',
	            title: '河长职务',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: 'addvnm',
	            title: '所属行政区',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'gmMobile',
	            title: '手机号码',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'adLevel',
	            title: '河长级别',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	            formatter:aRiverLong.formatAdLevel
	        },{
	            field: 'hightDutiesGov',
	            title: '所辖河流（段）',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: 'field',
	            title: '操作',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	            formatter: function (value, row, index) {
	                var html = `
		               <a href="javascript:void(0)" class="table_btn table_btn_edit" onclick="aRiverLong.showModal(2)">修改</a>&nbsp;&nbsp;
		               <a href="javascript:void(0)" class="table_btn table_btn_del" onclick="aRiverLong.showModal(0)">删除</a>&nbsp;&nbsp;`
	                return html;
	            }
	        }];
			bootstrapTable.bootstrapTableUtil(aRiverLong,dataParams);
		},
		
		onClickRow: function(row,$element,field){
			aRiverLong.clickRow = row;
	    },
	   
	    //查询表格
		  queryTable:function(){
			 bootstrapTable.queryParams["keyWord"] = $("#table_aRiverLong_toolbar #query_keyWord").val();
			 bootstrapTable.queryParams["adLevel"] = aRiverLong.adLevel;
			 $("#table_aRiverLong").bootstrapTable('refresh');
		  },
		  getCounts:function(){
				var result=commonUtils.get(WEB_ROOT+"basicInfo/riverLong/getRvLongNum",null,null);		
				if(result.flag){
					debugger
					/*										$("#city").html(result.data[0].count);
					$("#county").html(result.data[1].count);
					$("#town").html(result.data[2].count);
					$("#village").html(result.data[3].count);
					$("#unit").html(result.data[4].count);
					$("#tour").html("0");
					$("#clean").html("0");
					$("#countyHzb").html("0");
					$("#townHzb").html("0");*/
					$("#city").html(result.data.city);
					$("#county").html(result.data.district);
					$("#town").html(result.data.town);
					$("#village").html(result.data.country);
				}
			},
			//河长级别
			formatAdLevel:function(value){
				  var str = "";
			      switch (value) {
			      case "1":
		        	  str = "市级";
		              break;
		          case "2":
		        	  str = "县级";
		              break;
		          case "3":
		        	  str = "乡级";
		              break;
		          case "4":
		        	  str = "村级";
		              break;
/*			          case "1":
			        	  str = "省级";
			              break;
			          case "2":
			        	  str = "副省级";
			              break;
			          case "3":
			        	  str = "地市级";
			              break;
			          case "4":
			        	  str = "副地市级";
			              break;
			          case "5":
			        	  str = "县级";
			              break;
			          case "6":
			        	  str = "副县级";
			              break;
			          case "7":
			        	  str = "科级";
			              break;
			          case "8":
			        	  str = "副科级";
			              break;
			          case "9":
			        	  str = "股级";
			              break;
			          case "10":
			        	  str = "副股级";
			              break;
			          case "99":
			        	  str = "其他";
			              break;*/    
			          default:
			        	  str ="- -";
			      }
			      return str;
			},
			
	    //显示模态框
	    showModal:function(type){
	    	aRiverLong.type = type;
	    	setTimeout(function(){
	    		if(type){
		    		 formUtil.showBtn(type,aRiverLong);
		    		 	if(type == 1){
		    		 		//选择行政区
			    	        $('#citys').citys({
			    	            province: '四川',
			    	            city: '',
			    	            area: '',
			    	            onChange: function (info) {
			    	           	 	formUtil.townFormat(info);
			    	            }
			    	        }, function (api) {
			    	            var info = api.getInfo();
			    	            formUtil.townFormat(info);
			    	        });
		    		 	}else{
		    		 		//选择行政区
		    		 		aRiverLong.recoverAddvnms();
		    		 	}
		    	         
		    	}else{
		    		var id = aRiverLong.clickRow.gmCode;//编码
		    		var url = WEB_ROOT+'basicInfo/riverLong/deleteRiverLong?ids=' + id;
		    		formUtil.deleteData(url,'table_' + aRiverLong.id);
		    	}
	    	},100);
	    },
	    
	    //type: 1新增 2编辑    id:表单ID
	    submitForm:function(){
	    	if(aRiverLong.addvcd){
	    		if(aRiverLong.addvcd.length == 6){
	    			$("input[name='addvcd']").val(aRiverLong.addvcd + "000000");
	    		}else{
	    			$("input[name='addvcd']").val(aRiverLong.addvcd + "000");
	    		}
	    	}else{
	    		$("input[name='addvcd']").val($("select[name='area']").val() + "000000"); 
	    	}
	    	
	    	if(aRiverLong.type == 1){//新增
	    		formUtil.submitFormData(aRiverLong,WEB_ROOT+"basicInfo/riverLong/addRiverLeader");
	        }else{//编辑
	        	formUtil.submitFormData(aRiverLong,WEB_ROOT+"basicInfo/riverLong/addRiverLeader");
	        }
	    },
	    
	    //查询行政区
	    recoverAddvnms: function(){
	        var result = commonUtils.get(WEB_ROOT + 'adcd/getAddvnms?addvcd=' + aRiverLong.clickRow.addvcd,null,false);
	        var addvnmsArr = result.data.split(",");
	        if(addvnmsArr[2].indexOf("市")){
	        	addvnmsArr[2] = "";
	        }
	        if(addvnmsArr[3].indexOf("市")){
	        	addvnmsArr[3] = "";
	        }
        	$('#citys').citys({
             	province: addvnmsArr[0],
                city: addvnmsArr[1],
                area: addvnmsArr[2],
                twon: addvnmsArr[3],
           });
	    },
}
$(function(){
	  //清空查询参数
	bootstrapTable.clearParams();
	
	aRiverLong.getCounts();
	//加载表格
	aRiverLong.loadTable();
	
	//监听tab切換
	$("#layui_tab").on('click','.layui-col-md2',function(e){
		var id = $(this).attr('id');
		aRiverLong.adLevel = id.substr(id.length-1,1);
		$(this).addClass('layui-this').siblings("li").removeClass('layui-this');
		  //清空查询参数
		bootstrapTable.clearParams();
		$("#table_aRiverLong_toolbar #query_keyWord").val('');
		aRiverLong.queryTable();
	});
	
	//表格查询
	$(".queryBtn_table").click(function(){
		aRiverLong.queryTable();
	});
	
	//表格数据导入
	$(".queryBtn_import").click(function(){
		 $("#modal_rLongUpload").modal("show");
		 formUtil.uploadFile("uploadRiverLong",WEB_ROOT+"basicInfo/riverLong/importRiverLong",2);
		$("#uploadRiverLong").on("fileuploaded", function(e, data) {
			if (data.response.success ==true) {
				formUtil.successTip("上传成功!");
				 $("#modal_rLongUpload").modal("hide"); 
			} else {
				formUtil.successTip("上传失败!");
			}
		});	
		
	});
	
	
	$('#citys').on('change','select',function(){
		aRiverLong.addvcd = $(this).val();
	});
	
	
	 // 模态框显示  可拖动
    $(document).on("show.bs.modal", ".modal", function () {
        $(this).draggable({
            handle: ".modal-header"
        });
        $(this).css("overflow", "hidden"); // 防止出现滚动条，出现的话，你会把滚动条一起拖着走的
    });
    

});

window.onload = function(){
	
}