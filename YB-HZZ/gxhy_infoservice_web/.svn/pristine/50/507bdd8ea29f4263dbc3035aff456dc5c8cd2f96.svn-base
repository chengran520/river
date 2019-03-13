var busineEvent={
    count:null,
    urlArr:[],
    map:null,
    index:'',
    userArr:[],
	clickRow:[],//当前点击行
	stm:'',
	etm:'',
	    loadTable: function (url) {
	    	var dataParams =  {
	    		id:'table_patrol',//表格id
	    		url: url,//地址,//地址
	    		height:$("#layui-content").height() * 0.5 - nowClientWidth * 0.3,//表格高度
	    		fileName:'事件列表',//导出表格名称
	    	};
	    	bootstrapTable.columns =[{
	            title: '序号',
	            align: "center",
	            colspan: 1,
	            width: 1,
	            formatter: function (value, row, index) {
	            	var pageSize = $('#table_patrol').bootstrapTable('getOptions').pageSize;//通过表的#id 可以得到每页多少条
		            var pageNumber = $('#table_patrol').bootstrapTable('getOptions').pageNumber;//通过表的#id 可以得到当前第几页
		            return pageSize * (pageNumber - 1) + index + 1;//返回每条的序号： 每页条数 * （当前页 - 1 ）+ 序号
	            }
	        },{
	            field: 'busineId',
	            title: '事件编码',
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
	            width: 80
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
	            width: 100,
	            formatter:busineEvent.formatUser
	        },{
	            field: 'createTm',
	            title: '上报时间',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	        },
	        {
	            field: 'busineAddress',
	            title: '上报地址',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80
	        },
	        {
	            field: 'busineStatusNm',
	            title: '事件状态',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	            formatter:busineEvent.formatBusineColor
	        },
	        {
	            field: 'repeat',
	            title: '操作',
	            align: 'center',
	            sortable: true,
	            colspan: 1,
	            width: 80,
	            formatter: function (value, row, index) {
	            	if(row.busineStatus=="1"){
	            		console.log(row.count);
	            		//||(row.busineStatus=="2"&&row.status=="3"&&row.count>2)
	            		return "<span class='btn_span table_btn table_btn_edit' onclick='busineEvent.showModal(2)'   style='cursor:pointer;'>处理</span></td>";			
	        		}else if((row.busineStatus=="3"&&row.status=="2"&&row.lastHandleUserId!=userId)||(row.busineStatus=="2"&&row.status=="3"&&row.handleUserIdOne==row.lastHandleUserId)||(row.busineStatus=="2"&&row.status=="2"&&row.lastHandleUserId!=row.handleUserIdOne)||(row.busineStatus=="2"&&row.status=="3"&&row.handleUserIdOne!=userId)){
	        			    return "<span class='btn_span table_btn table_btn_edit' onclick='busineEvent.showModal(2)'   style='cursor:pointer;'>处理</span></td>";				
        			 }else{
        				return "<span class='btn_span table_btn table_btn_detail' onclick='busineEvent.showModal(1)'  style='cursor:pointer;'>详情</span></td>";
        			 }
	            }}
	           
	        ];
	    	bootstrapTable.bootstrapTableUtil(busineEvent,dataParams);
	    },
	    //点击表格行
	    onClickRow:function(row, $element, field){
	    	busineEvent.clickRow = row;
	    	busineEvent.getBusine(row);
	   		busineEvent.getTimeAxis(row);
	    },
	    
	formatUser:function(value, row, index){
		if(row.busineUnm!=""){
			return value;
		}else{
			return "匿名用户";
		}
	},
	formatBusineColor:function(value, row, index){
		if(value=="未处理"){
			return "<a style='color:red;'>"+value+"</a>";
		}else if(value=="已处理"){
			return "<a style='color:green;'>"+value+"</a>";
		}else if(value=="处理中"){
			return "<a style='color:#FF7F00;'>"+value+"</a>";
		}else if(value=="无效"){
			return "<a style='color:#FF00FF;'>"+value+"</a>";
		}else{
			return "<a style='color:#A52A2A;'>"+value+"</a>";
		}
	},
	formatDate:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,null,null);
	},
	formatHandel:function(value, row, index){
		if(value==null||value==""){
			return "暂无";
		}else{
			return  value;
		}
	},
	onLoadSuccess:function(rowData){
		if(rowData.rows){
			if(rowData.rows.length){
				busineEvent.getBusine(rowData.rows[0]);
				busineEvent.getTimeAxis(rowData.rows[0]);
			}
		}else{
			if(rowData){
				busineEvent.getBusine(rowData[0]);
				busineEvent.getTimeAxis(rowData[0]);
			}
		}
	},
    //1 :详情   2：处理
    showModal(type){
		setTimeout(function(){
			if(type == 1){//查看详情
	    		busineEvent.busineDetail(busineEvent.clickRow);
	    	}else{//处理
	    		busineEvent.busineDetail(busineEvent.clickRow);
	    	}
		},100);
		
    },    
	 getBusine:function(data){
		 if(data){
			 var html = "";
			    html += "<p class='description_p'>事件编号1："+reverseContent(data.busineId)+"</p>";
			    html += "<p class='description_p'>事件类型："+reverseContent(data.busineType)+"</p>";
			    html += "<p class='description_p'>上报人："+reverseContent(data.busineUnm)+"</p>";
			    html += "<p class='description_p'>上报时间："+reverseContent(data.createTm)+"</p>";
			    html += "<p class='description_p'>处理人："+reverseContent(data.lastHandleUserNm)+"</p>";
			    html += "<p class='description_p'>处理时间："+reverseContent(data.handleTm)+"</p>";
			    html += "<p class='description_p'>发生地点："+reverseContent(data.busineAddress)+"</p>";
			    html += "<p class='description_p'>事件描述："+reverseContent(data.busineDesc)+"</p>";
			    $('.detail_div').html(html);		
			    this.getImages(data.busineId);
		 }
		   
	  }, 
	//获取上报图片
	  getImages:function(busineId,id){
		  busineEvent.count=0;
		  busineEvent.urlArr=[];
		  var result=commonUtils.get(WEB_ROOT+"/busine/accept/getBusineImgs",{"busineId":busineId},null);
			if(result.flag){
				console.log(result.data);
				var url=window.location.href.split("/gxhy")[0];
				if(result.data.length>0){
					result.data.forEach((item) =>{
						if(item.split("images")[1]!=null){
							var paramUrl=item.split("images")[1].replace( "\\\\ ","/");
				    		var ulr1=url+"/img/"+paramUrl;
				        	busineEvent.urlArr.push(ulr1);	    
						}
						    	
			        });
					busineEvent.count = busineEvent.urlArr.length;
					busineEvent.index = 0;
					$("#left_img").attr("src",busineEvent.urlArr[0]);
				}else{
					var moUrl = WEB_ROOT + "/common/images/bussine/101.png";
			    	$("#left_img").attr("src",moUrl);
				}
			}else{
				var moUrl = WEB_ROOT + "/common/images/bussine/101.png";
		    	$("#left_img").attr("src",moUrl);
			}
	  },
	  next:function(){
		  if(busineEvent.index != undefined){
			  busineEvent.index++;
			  	if(busineEvent.index == busineEvent.count){
			  		busineEvent.index = 0;
			  	}
			  	$("#left_img").attr("src",busineEvent.urlArr[busineEvent.index]);
		  }else{
			  return;
		  }
	   },
	   getTimeAxis:function(rowData){
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
								html+="<p>"+result.data[i].busineUnm+"</p><p>"+result.data[i].handleView+"</p></div>";
								html+="<div class='NodeDetail-footer'><span>"+result.data[i].handleTm+"</span></div></div></div></div></div>";				
							}
						}
						$("#timeAxis").html(html);
				}else{
					$("#timeAxis").html("<div style='heigth:500px;line-heigth:500px;text-align:center;'>暂无!</div>");
				}
			}		
	  },
	 busineDetail:function(data){
		$("#handleView").val("");
		var address="";
		var desc="";
		var dateTime="";
		$("#busineModel").modal('show');
		var busineOrigin=data.busineOrigin;
		var orginId=data.originId;
		//如果事件为未处理或处理中		
		if(data.busineStatus=="1"){
			 $(".btns").show();
			 $("#myModalLabel").html("审核");
			 $("#reportImg").show();
		}else{
			if((data.busineStatus=="3"&&data.status=="2"&&data.lastHandleUserId!=userId)||(data.busineStatus=="2"&&data.status=="3"&&data.handleUserIdOne==data.lastHandleUserId)||(data.busineStatus=="2"&&data.status=="2"&&data.lastHandleUserId!=data.handleUserIdOne)||(data.busineStatus=="2"&&data.status=="3"&&data.handleUserIdOne!=userId)){
				 $(".btns").show();
				 $("#myModalLabel").html("审核");
				 $("#reportImg").show();
			}else{
				 $(".btns").hide();
				 $("#reportImg").hide();
				 $("#myModalLabel").html("详情");
				 $("#handleView").val(data.handleView);
			}	        			
		}
		$("#busineI").val(data.busineId);
		$("#busineUid").val(data.busineUid);
		$("#busineOrgin").val(busineOrigin);
		$("#status").val(data.status);
		$("#orginId").val(orginId);
		$("#busineStatus").val(data.busineStatus);
		$("#handleUserIdOne").val(data.handleUserIdOne);
		address= data.busineAddress;
		desc= data.busineDesc;
		$("#busineIdS").html(data.busineId);		
		$("#busineOri").html(data.busineOrigin);
		$("#busineTypeS").html(data.busineType);
		if(data.busineUnm==""){
			$("#busineUN").html("匿名用户");
		}else{
			$("#busineUN").html(data.busineUnm);
		}		
		$("#busineUid").html();
		$("#busineDesc").html(data.busineDesc);
		$("#createT").html(data.createTm);
		$("#busineAddress").html(data.busineAddress);					
		$("#busineDesc").html(data.busineDesc);
		var str=data.lastHandleUserNm;
		if(str==null||str==""){
			$("#lastHandleUserNm").html("暂无");
		}else{
			$("#lastHandleUserNm").html(data.lastHandleUserNm);
		}
		var htm="";	
		//上报图片
	   var result=commonUtils.get(WEB_ROOT+"/busine/accept/getBusineImgs",{"busineId":data.busineId,"type":'00'},null);
	   if(result.data.length>0){
		   for(var i=0;i<result.data.length;i++){				
				var url=window.location.href.split("/gxhy")[0];
				var paramUrl=result.data[i].split("images")[1].replace( "\\\\ ","/");
	    		var ulr1=url+"/img/"+paramUrl;
				htm+="<img src="+ulr1+" style='width:60px;height:60px;margin-right:20px;'  class='zoomify'>";			
			}
			$("#url").html(htm);
	   }else{
		   $("#url").html("暂无图片");
	   }
		$('.zoomify').zoomify();

	},
	//当前人可以直接处理
	checkBusine:function(lastHandleUserId,handleUserId){
		var busineOrgin=$("#busineOrgin").val();
		var handleView=$("#handleView").val();
		console.log(handleView);
		var busineId=$("#busineIdS").text();//事件id
		var workflowId=$("#workflowId").val();//如果用户选择图片的话
		var busineOrgin=$("#busineOrgin").val();
		var orginId=$("#orginId").val();
		layer.confirm('是否交由河长制领导确认？', {
		 btn: ['是', '否'] 
		}, function () {//交由上级领导
			var status="3";
			var busineStatus="2";
			var type="2";
			busineEvent.handleBus(status,busineStatus,lastHandleUserId,handleUserId,type,handleView,workflowId,busineOrgin,orginId,busineId);
		}, function () {//自己办结
			var status="4";
			var busineStatus="3";
			var type="1";
			busineEvent.handleBus(status,busineStatus,lastHandleUserId,handleUserId,type,handleView,workflowId,busineOrgin,orginId,busineId);
		});
	},
	handleBus:function(status,busineStatus,lastHandleUserId,handleUserId,type,handleView,workflowId,busineOrgin,orginId,busineId){
		var result= commonUtils.post(WEB_ROOT+"/busine/accept/insertWorkFlow",{handleView:handleView,busineId:busineId,status:status,busineStatus:busineStatus,handleUserId:handleUserId,type:type,workflowId:workflowId,busineOrgin:busineOrgin,orginId:orginId},null);
		if(result.flag){
			if(type==1){
				layer.msg('已办结!');
			}else if(type==2){
				layer.msg('已交由河长制领导确认!');
			}else if(type==3){
				layer.msg('已转交!');
			}else{
				layer.msg('已退回');
			}
			
			$("#busineModel").modal('hide');
			$("#table_patrol").bootstrapTable('refresh');
		}else{
	        senderMsg("请填写完整信息，确认后保存！", false);	
	    }
	},
	
	//无效事件
	invalidBusine:function(busineId,status,busineStatus,busineOrgin,orginId){
		var handleView=$("#handleView").val();	
		var result= commonUtils.get(WEB_ROOT+"/busine/accept/invalidBusine",{busineId:busineId,status:status,busineStatus:busineStatus,handleView:handleView,busineOrgin:busineOrgin,orginId:orginId},null);
		if(result.flag){
			layer.msg('此事件立案无效事件!');
			$("#busineModel").modal('hide');
			$("#table_patrol").bootstrapTable('refresh');
		}
	}
}
$(function(){
	var height = $(window).height();	
	var c=height-$("#chart").height()-$("#headerDiv").height();
	$(".main").height(c);
	$("#createTm_div").hide();
	var test1Hit = $(".test1").height();
	$("#patrol_busine").height(test1Hit * 0.99);
	formatter_date_utils.initDatePicker2("startTm","endTm");
	
	var url = $('#menuLeft-ul').children('li:eq(0)').find('a').attr('data-url');
	var index = url.indexOf('?');
	var params = url.substring(index+1);
	var arr = params.split('&');
	function getParam(name){
		for(var i=0; i< arr.length; i++){
			var param = arr[i].split('=');
			if(param[0] == name){
				return param[1];
			}
		}
	}
	var patrolId = getParam('patrolId');
	
	var url = WEB_ROOT+ "/busine/accept/getEventList";
	if(patrolId){
		url = url + "?patrolId=" + patrolId;
	}
	
	  //清空查询参数
	bootstrapTable.clearParams();
	
	//加载表格
	busineEvent.loadTable(url);
	
	//办结
	$("#checkBusine").click(function(){
		var handleView=$("#handleView").val();
		if(handleView==null||handleView==""){
			formUtil.errorTip("请填写处理意见！");
			return;
		}else{
			var s=$("#status").val();//目前处于什么状态
			var busineSta=$("#busineStatus").val();
			var handleUserIdOne=$("#handleUserIdOne").val();
			var lastHandleUserId=$("#busineUid").val(); //上次处理人
			var type=1;//表示这是直接处理		
			busineEvent.checkBusine(lastHandleUserId,null,type);
		}		
	});
	//转交操作
	$("#conBusine").click(function(){
		var handleUserId=$("#resultUser").val();
		if(handleUserId == null || handleUserId == ''){
			layer.msg('成员单位为必选项!', {icon: 5});
			return;
		}
		$("#busineUserModel").modal("hide");
		var status="3";//流程处理中状态
		var busineStatus="2";//事件状态
		var type=3;//表示转交
		/*busineEvent.checkBusine(status,busineStatus,null,handleUserId,type);*/
		var busineOrgin=$("#busineOrgin").val();
		var handleView=$("#handleView").val();
		var busineId=$("#busineIdS").text();//事件id
		var workflowId=$("#workflowId").val();//如果用户选择图片的话
		var busineOrgin=$("#busineOrgin").val();
		var orginId=$("#orginId").val();
		var lastHandleUserId =null;
		busineEvent.handleBus(status,busineStatus,lastHandleUserId,handleUserId,type,handleView,workflowId,busineOrgin,orginId,busineId);
	});
	//无效事件
	$("#invalidBusine").click(function(){
		var busineStatus="4";//无效状态
		var status='5';//流程无效
		var busineId=$("#busineIdS").text();//事件id
		var busineOrgin=$("#busineOrgin").val(); 
		var orginId=$("#orginId").val(); 
		busineEvent.invalidBusine(busineId,status,busineStatus,busineOrgin,orginId);
	});
	//退回事件
	$("#returnBusine").click(function(){
		layer.confirm('是否要退回到上一级？', {
			 btn: ['是', '否'] 
			}, function () {//交由上级领导
				var status="2";//退回状态
				var busineStatus="2";//事件状态
				var type=4;//表示退回了
			/*	busineEvent.checkBusine(status,busineStatus,null,null,type);*/
				var busineOrgin=$("#busineOrgin").val();
				var handleView=$("#handleView").val();
				var busineId=$("#busineIdS").text();//事件id
				var workflowId=$("#workflowId").val();//如果用户选择图片的话
				var busineOrgin=$("#busineOrgin").val();
				var orginId=$("#orginId").val();
				var lastHandleUserId =null;
				var handleUserId=$("#handleUserIdOne").val();
				busineEvent.handleBus(status,busineStatus,lastHandleUserId,handleUserId,type,handleView,workflowId,busineOrgin,orginId,busineId);
			}, function () {//自己办结
				var index = parent.layer.getFrameIndex(window.name);
				parent.layer.close(index);
			});
		
		
		
		
	});
	
	  //  选择日期
    $("#createDate").mouseover(function(){
    	laydate.render({
        	elem: '#createDate',
        	theme: '#4d86cf',
        	type: 'datetime',
        	range: true,
        	done: function(value, date){
        		busineEvent.stm = value.substring(0,19);
        		busineEvent.etm = value.substring(22);
        		console.log("开始",busineEvent.stm);
        		console.log("结束",busineEvent.etm);
        	}
        });
    });
    
    $(".queryBtn_table").click(function(){
    	bootstrapTable.queryParams["keyword"] = $("#table_patrol_toolbar #busineId").val();
    	bootstrapTable.queryParams["startTm"] = $("#table_patrol_toolbar #startTm").val();
    	bootstrapTable.queryParams["endTm"] = $("#table_patrol_toolbar #endTm").val();
    	$("#table_patrol").bootstrapTable('refresh');
    });
});
//地理编码返回结果展示
function geocoder_CallBack(data,desc,dateTime) {
    var resultStr = "";
    //地理编码结果数组
    var geocode = data.geocodes;
    for (var i = 0; i < geocode.length; i++) {
        busineEvent.marker = new AMap.Marker({
            map: busineEvent.map,
            position: [ geocode[i].location.getLng(), geocode[i].location.getLat()]
        });
        var info = [];
        info.push("<div  style='width:200px;heigth:50px;'><div><b>"+geocode[i].formattedAddress+"</b></div> ");
        info.push("<div style=\"padding:0px 0px 0px 4px;\">"+desc+"</div>");
        info.push("<div style='float:right;'>"+dateTime+"</div></div>");
        var infoWindow = new AMap.InfoWindow({
            content:info.join("<br/>"),
            offset: {x: 0, y: -30}
        });
         infoWindow.open(busineEvent.map, busineEvent.marker.getPosition());
    }
    busineEvent.map.setFitView();
}
function reverseContent(str,replaceStr){
	if(str == null || str == undefined || str == 'null' || str == ''){
		if(replaceStr){
			return replaceStr;
		}else{
			return '暂无数据';
		}
	}else{
		return str;
	}
};