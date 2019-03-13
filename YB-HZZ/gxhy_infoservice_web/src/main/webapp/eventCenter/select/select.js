var select = {
	clickRow:[],//当前点击行
	 loadTable: function () {
	    	var dataParams =  {
	    		id:'table_select',//表格id
	    		url:WEB_ROOT+ '/busine/accept/getBusineStatics',//地址
	    		height:$(window).height() - clientSize * 1.2,//表格高度
	    		fileName:'综合查询信息表',//导出表格名称
	    	};
	    	bootstrapTable.columns =[{
	            title: '序号',
	            align: "center",
	            colspan: 1,
	            width: 1,
	            formatter: function (value, row, index) {
	            	 var pageSize = $('#table_select').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
		             var pageNumber = $('#table_select').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
		             return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
	            }
	        },{
	            field: 'busineId',
	            title: '事件编号',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },{
	            field: 'busineOrigin',
	            title: '事件来源',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	            formatter: function (value, row, index) {
	               if(value=="hzxh"){
	            	   return "河长巡河";
	               }else{
	            	   return "举报投诉";  
	               }
	            }
	        },{
	            field: 'busineType',
	            title: '事件类型',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'busineUnm',
	            title: '上报人',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },{
	            field: 'busineAddress',
	            title: '发生地址',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 100,
	        },{
	            field: 'busineDesc',
	            title: '事件描述',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60  
	        },
	        {
	            field: 'createTm',
	            title: '上报时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 60,
	            formatter: function (value, row, index) { 	
	            	 var html = `
		                <a href="javascript:void(0)" onclick="select.getTimeAxis()" class="table_btn table_btn_detail">详情</a>`;
		                return html;
	            }   
	        }
	        ];
	    	bootstrapTable.bootstrapTableUtil(select,dataParams);
	    },
	  //点击表格行
	    onClickRow:function(row, $element, field){
	    	select.clickRow = row;
	    	setTimeout(function(){
		    	select.getTimeAxis(select.clickRow);
			},100);
	    },
	    
		getTimeAxis:function(rowData){
			$("#selDetailModel").modal('show');
				var result= commonUtils.get(WEB_ROOT+"/busine/accept/getTimeAxis",{busineId:rowData.busineId},null);
				if(result.flag){
					  if(result.data.length>0){
						    if(!rowData.busineUnm){
						    	rowData.busineUnm="匿名用户";
						    }
						  	var html="<div class='flowChart'><div class='flowChart-left'><div class='dashed'></div></div>";
						  	html+="<div class='flowChart-right'><div class='oneNode'><div class='check check-danger'>";
					    	var status=result.data[0].status;
							html+="上报人";
							html+="</div><div class='tag-boder'><div class='tag'></div></div>";
							html+="<div class='NodeDetail'><div class='NodeDetail-content'>";
							html+="<p>"+rowData.busineUnm+"</p>";
							html+="</div>";
							html+="<div class='NodeDetail-footer'><span>"+rowData.createTm+"</span></div></div></div></div></div>";	
							if(rowData.busineOrigin=="河长巡河"){
								
								for(var i=0;i<result.data.length;i++){
									html+="<div class='flowChart'><div class='flowChart-left'><div class='dashed'></div></div>";
									html+="<div class='flowChart-right'><div class='oneNode'><div class='check check-danger'>";
									var status=result.data[i].status;
									if(status=="1"){
										html+="未处理";
									}else if(status=="2"){
										html+="退回";
									}else if(status=="3"){
										html+="转交";
									}else{
										html+="处理";
									}
									html+="</div><div class='tag-boder'><div class='tag'></div></div>";
									html+="<div class='NodeDetail'><div class='NodeDetail-content'>";
									html+="<p>"+result.data[i].busineUnm+"</p>";
									if(result.data[i].handleView=="null"||result.data[i].handleView==""){
								    	html+="<p>暂无数据</p></div>";
								    }else{
								    	html+="<p>"+result.data[i].handleView+"</p></div>";
								    }
									console.log(result.data[i].handleView);
									html+="<div class='NodeDetail-footer'><span>"+result.data[0].handleTm+"</span></div></div></div></div></div>";				
								}
							}else{
								for(var i=0;i<result.data.length;i++){
									html+="<div class='flowChart'><div class='flowChart-left'><div class='dashed'></div></div>";
									html+="<div class='flowChart-right'><div class='oneNode'><div class='check check-danger'>";
									var status=result.data[i].status;
									if(status=="1"){
										html+="未办结";
									}else if(status=="2"){
										html+="退回";
									}else if(status=="3"){
										html+="转办";
									}else{
										html+="办结";
									}
									html+="</div><div class='tag-boder'><div class='tag'></div></div>";
									html+="<div class='NodeDetail'><div class='NodeDetail-content'>";
									html+="<p>"+result.data[i].busineUnm+"</p><p>"+reverseContent(result.data[i].handleView,'')+"</p></div>";
									html+="<div class='NodeDetail-footer'><span>"+result.data[i].handleTm+"</span></div></div></div></div></div>";				
								}
							}
							$("#timeAxis").html(html);
					}else{
						$("#timeAxis").html("<div style='heigth:500px;line-heigth:500px;text-align:center;'>暂无!</div>");
					}
				}		
		},
	    getBusineTypes:function(){   
			var result=commonUtils.get(WEB_ROOT+"/busine/accept/getBusineTypes",{"dictTp":"BZTP"},false);
			if(result.flag){
				var html="<option disabled='disabled' selected='selected' value=''>请选择</option> <option value=''>全部</option>";
				$.each(result.data,function(i,v){
					 html+="<option value="+this.dictVal+">"+this.dictNm+"</option>";
				});
				$("#busineType").html(html);
			}
		},
		getRiverList:function(){
			var result=commonUtils.get(WEB_ROOT+"/basicInfo/riverLake/getAllRiverIdAndName","",false);
			if(result.data.length>0){
				var html="<option disabled='disabled' selected='selected' value=''>请选择</option> <option value=''>全部</option>";
				for(var i=0; i<result.data.length; i++){
					var r = result.data[i];
					html+="<option value="+r.rvCd+">"+r.rvNm+"</option>";
				}
				$("#riverName").html(html);
			}
		},
		reverseContent:function(str,replaceStr){
			if(str == undefined || str == null || str == 'null'){
				return replaceStr;
			}else{
				return str;
			}
		}
}
$(function(){
	formatter_date_utils.initDatePicker2("startTm","endTm");
	select.getBusineTypes();
	select.getRiverList();
	  //清空查询参数
	bootstrapTable.clearParams();
	select.loadTable();
	 $(".queryBtn_select").click(function(){
	    	bootstrapTable.queryParams["stm"] = $("#table_select_toolbar #startTm").val();
	    	bootstrapTable.queryParams["endTm"] = $("#table_select_toolbar #endTm").val();
	    	bootstrapTable.queryParams["busineType"] = $("#table_select_toolbar #busineType").val();
	    	bootstrapTable.queryParams["type"] = $("#table_select_toolbar #type").val();
	    	bootstrapTable.queryParams["riverId"] = $('#table_select_toolbar #riverName').val();
	    	$("#table_select").bootstrapTable('refresh');
	    });
});