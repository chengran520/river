var waterResource = {
		clickRow:[],
		type:"1",//，默认查看 水资源台账
		loadTable: function (type) {
		    	var dataParams =  {
		    		id:'table_water',//表格id
		    		url: "",//地址,//地址
		    		height:$("#layui-content").height() - nowClientWidth * 64,//表格高度
		    		fileName:'',//导出表格名称
		    		showExport:1,//显示导出
		    		editable:1,//开启编辑模式
		    	};
		    	bootstrapTable.columns = [];
	    	switch(waterResource.type){
			    	case "1":
			    		bootstrapTable.columns =[[{
				            title: '序号',
				            align: "center",
				            width: 1,
				            colspan: 1,
		                    rowspan: 2,
		                    edit:false,
				            formatter: function (value, row, index) {
				            	var pageSize = $('#table_water').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
					            var pageNumber = $('#table_water').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
					            return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
				            }
				        },{
				            field: 'addvnm',
				            title: '县级行政区',
				            align: 'center',
				            colspan: 1,
		                    rowspan: 2,
		                    width: 40,
				            edit:{
                                type:'text',
                                required:true,
				            }
				        },{
				            field: 'addvcd',
				            title: '行政区代码',
				            align: 'center',
				            colspan: 1,
		                    rowspan: 2,
		                    width: 40,
		                    edit:{
		                        type:'date',//日期
		                        required:true,
		                    }
				        },{
				            field: '',
				            title: '涉及县级河长</br>管理河流',
				            align: 'center',
				            
				            colspan: 1,
		                    rowspan: 2,
		                    width: 40,
				        },{
		                    title: "取水量(万m³)",
		                    align:"center",
		                    colspan: 3,
		                    rowspan: 1,
		                    },{
		                        title: "供水量(万m³)",
		                        align:"center",
		                        colspan:4,
		                        rowspan: 1,
		                    },{
		                        title: "用水量(万m³)",
		                        align:"center",
		                        colspan:6,
		                        rowspan: 1,
		                    },{
					            field: '',
					            title: '备注',
					            align: 'center',
					            colspan: 1,
			                    rowspan: 2,
			                    width: 40,
		                }],
				        [{
				            field: '',
				            title: '地表水',
				            align: 'center',
				            
				            width: 40,
				        },{
				            field: '',
				            title: '地下水',
				            align: 'center',
				            
				            width: 40,
				        },{
				            field: '',
				            title: '合计',
				            align: 'center',
				            
				            width: 20,
				        },{
				            field: '',
				            title: '地表水源</br>供水量',
				            align: 'center',
				            
				            width: 3,   
				            },{
					            field: '',
					            title: '地下水源</br>供水量',
					            align: 'center',
					            
					            width: 40,   
					            },{
						            field: '',
						            title: '其他水源</br>供水量',
						            align: 'center',
						            
						            width: 40,
					            },{
						            field: '',
						            title: '合计',
						            align: 'center',
						            
						            width: 20,
					            },{
							            field: '',
							            title: '农业',
							            align: 'center',
							            
							            width: 20,
					            },{
								            field: '',
								            title: '工业',
								            align: 'center',
								            
								            width: 20,
					            },{
						            field: '',
						            title: '城镇公共',
						            align: 'center',
						            
						            width: 40,
					            },{
						            field: '',
						            title: '居民生活',
						            align: 'center',
						            
						            width: 40,
					            },{
						            field: '',
						            title: '生态环境',
						            align: 'center',
						            
						            width: 40,
					            },{
						            field: '',
						            title: '其中：地下水</br>用水量',
						            align: 'center',
						            
						            width: 40,
					            }]];
			    		break;
			    	case "2":
			    	bootstrapTable.columns =[[{
		            title: '序号',
		            align: "center",
		            width: 1,
		            colspan: 1,
                    rowspan: 2,
		            formatter: function (value, row, index) {
		            	var pageSize = $('#table_water').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
			            var pageNumber = $('#table_water').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
			            return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
		            }
		        },{
		            title: '行政区名称',
		            align: 'center',
		            
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
		            field: '',
		            title: '行政区代码',
		            align: 'center',
		            
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
		            field: '',
		            title: '河流(湖泊)名称',
		            align: 'center',
		            
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
                    title: "河流(湖泊)编码",
                    align:"center",
                    colspan: 1,
                    rowspan: 2,
                    width: 30,
                    },{
                        title: "岸线开发利用长度(km)",
                        align:"center",
                        colspan:7,
                        rowspan: 1,
                    },{
                        title: "岸线开发利用率(%)",
                        align:"center",
                        colspan:1,
                        rowspan: 2,
                        width: 30,
                    },{
                        title: "自然岸线长度(km)",
                        align:"center",
                        colspan:1,
                        rowspan: 2,
                        width: 30,
                    },{
                        title: "航堤情况",
                        align:"center",
                        colspan:3,
                        rowspan: 1,
                    },{
			            field: '',
			            title: '备注',
			            align: 'center',
			            colspan: 1,
	                    rowspan: 2,
	                    width: 40,
                }],
		        [{
		            field: '',
		            title: '海口码头',
		            align: 'center',
		            width: 30,
		        },{
		            field: '',
		            title: '景观',
		            align: 'center',
		            width: 30,
		        },{
		            field: '',
		            title: '排水/取水口',
		            align: 'center',
		            width: 30,
		        },{
		            field: '',
		            title: '跨河设宽',
		            align: 'center',
		            width: 30,   
		            },{
			            field: '',
			            title: '种植/养殖利用',
			            align: 'center',
			            width: 30,   
			            },{
				            field: '',
				            title: '其他',
				            align: 'center',
				            width: 30,
			            },{
				            field: '',
				            title: '合计',
				            align: 'center',
				            width: 20,
			            },{
					            field: '',
					            title: '航堤:等级',
					            align: 'center',
					            width: 20,
			            },{
						            field: '',
						            title: '航堤:长度',
						            align: 'center',
						            width: 20,
			            },{
				            field: '',
				            title: '......',
				            align: 'center',
				            width: 40,
				            
			            }]];
			    		break;
			    		case "3":
			    		    	bootstrapTable.columns =[[{
		            title: '序号',
		            align: "center",
		            width: 1,
		            colspan: 1,
                    rowspan: 2,
		            formatter: function (value, row, index) {
		            	var pageSize = $('#table_water').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
			            var pageNumber = $('#table_water').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
			            return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
		            }
		        },{
		            title: '行政区名称',
		            align: 'center',
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
		            field: '',
		            title: '行政区代码',
		            align: 'center',
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
		            field: '',
		            title: '河流(湖泊)名称',
		            align: 'center',
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
                        title: "主要污染物入河量(吨)",
                        align:"center",
                        colspan:4,
                        rowspan: 1,
                    },{
                        title: "排污口状况",
                        align:"center",
                        colspan:3,
                        rowspan: 1,
                    }],
		        [{
		            field: '',
		            title: 'COD',
		            align: 'center',
		            
		            width: 30,
		        },{
		            field: '',
		            title: '氮氧',
		            align: 'center',
		            width: 30,
		        },{
		            field: '',
		            title: '总磷',
		            align: 'center',
		            width: 30,
		        },{
		            field: '',
		            title: '总氮',
		            align: 'center',
		            width: 30,   
		            },{
			            field: '',
			            title: '排污口数量</br>(个)',
			            align: 'center',
			            width: 30,   
			            },{
				            field: '',
				            title: '废污水排放量</br>(亿m³)',
				            align: 'center',
				            width: 30,
			            },{
				            field: '',
				            title: '排污口监测数量</br>(个)',
				            align: 'center',
				            width: 30,
			            }]];
			    		break;
			   			case "4":
			   			bootstrapTable.columns =[[{
		            title: '序号',
		            align: "center",
		            width: 1,
		            colspan: 1,
                    rowspan: 2,
		            formatter: function (value, row, index) {
		            	var pageSize = $('#table_water').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
			            var pageNumber = $('#table_water').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
			            return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
		            }
		        },{
		            title: '行政区名称',
		            align: 'center',
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
		            field: '',
		            title: '行政区代码',
		            align: 'center',
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
		            field: '',
		            title: '河流(湖泊)名称',
		            align: 'center',
		            colspan: 1,
                    rowspan: 2,
                    width: 30,
		        },{
                        title: "生态需水状况",
                        align:"center",
                        colspan:5,
                        rowspan: 1,
                    },{
                        title: "水生态监测情况",
                        align:"center",
                        colspan:4,
                        rowspan: 1,
                    },
                    {
                        title: "备注",
                        align:"center",
                        colspan:1,
                        rowspan:2,
                        width:30
                    }],
		        [{
		            field: '',
		            title: '断面名称',
		            align: 'center',
		            width: 30,
		        },{
		            field: '',
		            title: '生态需水量</br>(m³/s)',
		            align: 'center',
		            width: 30,
		        },{
		            field: '',
		            title: '实际生态流量</br>(m³/s)',
		            align: 'center',
		            width: 30,
		        },{
		            field: '',
		            title: '生态水位</br>(m)',
		            align: 'center',
		            width: 30,   
		            },{
			            field: '',
			            title: '实际生态水位</br>(m)',
			            align: 'center',
			            width: 30,   
			            },{
				            field: '',
				            title: '监测站点数量</br>(个)',
				            align: 'center',
				            width: 30,
			            },{
				            field: '',
				            title: '主要监</br>测指标',
				            align: 'center',
				            width: 30,
			            },
			            {
				            field: '',
				            title: '监测</br>方式',
				            align: 'center',
				            width: 30,
			            },
			            {
				            field: '',
				            title: '监测</br>频次',
				            align: 'center',
				            width: 30,
			            }]];
			            break;

		    	}
		    	bootstrapTable.bootstrapTableUtil(waterResource,dataParams);
		    },
		    //点击表格行
		    onClickRow:function(row, $element, field){
		    	waterResource.clickRow = row;
		    	if(!row){
		    		 $($element).remove()
		    	}
		    },
		    //删除
		    delList:function(uuid){
		    	layer.confirm('您确定要删除数据吗？', {
				  btn: ['确认','取消'] //按钮
				}, function(){
					var result=commonUtils.post(url,{"uuid":uuid},false);
			        if(result.flag){
			        	formUtil.successTip("删除成功!");
			        	$("#table_water").bootstrapTable('refresh');
			        }else{
			        	formUtil.errorTip("删除失败!");
			        }
				})
		    },
		    
		   
}
$(function(){
	
	waterResource.loadTable();
	
	//表格查询
	$(".queryBtn_table").click(function(){
		bootstrapTable.queryParams["addvcd"] = $("#table_water_toolbar #pmenuId").val();
		bootstrapTable.queryParams["rvNm"] = $("#table_water_toolbar #query_rvNm").val();
    	$("#table_water").bootstrapTable('refresh');
	});
	
	//点击查看不同信息
	$("#layui_top").on("click","li",function(){
		$(this).addClass('active').siblings().removeClass('active');
		waterResource.type = $(this).attr('id');
		waterResource.loadTable();
	});
 	
	$("#pmenuIdName").on("change",function(){
		   if($("#pmenuIdName").val()==""){
			   $("#pmenuId").val("");
		   }
	});
	commonZtree.ztree("menuZtree",false,WEB_ROOT+"adcd/getUserAdcdZtree");
	
	//添加一行
	$('#btn_addTable').click(function(){
        var data = {};
        $('#table_water').bootstrapTable('append',data);    
    });
	
	//保存一行
	$('#btn_submitTable').click(function(){
		 var row = $('#table_water').bootstrapTable('getSelections')[0];
	      if(row){
	    	  console.log(row);  
		   }else{
		      layer.msg("请选中一行", { icon:7});
		   }   
   });
	//删除一行
	$('#btn_removeTable').click(function(){
		 var row = $('#table_water').bootstrapTable('getSelections')[0];
	     
		 debugger
		 if(row){
	    	  console.log(row.uuid);  
		   }else{
		      layer.msg("请选中一行", { icon:7});
		   }   
    });
	
	 
});

