var indexChart={
		option:null,
		taskChart:function(){
			var taskdata=[];
			if(userId=="liuzb"||userId=="dongdh"||userId=="chensh"||userId=="yinzq"||userId=="wuhq"||userId=="zhush"){//宜宾市
				taskdata=[
			        {name:'叙州区完成情况',baifenbi: 20, value: 20, count: 100},
			        {name:'南溪区完成情况',baifenbi: 30, value: 30, count: 100},
			        {name:'江安县完成情况',baifenbi: 75, value: 75, count: 100},
			        {name:'高县完成情况',baifenbi: 15, value: 15, count: 100}
			     ];
			 }else if(userId=="dingyh"||userId=="lvzf"||userId=="fansb"){//叙州区
				taskdata=[
			        {name:'柏溪镇完成情况',baifenbi: 20, value: 20, count: 100},
			        {name:'观音镇完成情况',baifenbi: 30, value: 30, count: 100},
			        {name:'横江镇完成情况',baifenbi: 75, value: 75, count: 100}
			     ];
			 }else if(userId=="heyh"||userId=="lvse"||userId=="guom"||userId=="wanglp"||userId=="xiaof"||userId=="zhouj"||userId=="huangsg"){// 南溪区   
				taskdata=[
			        {name:'刘家镇完成情况',baifenbi: 20, value: 20, count: 100},
			        {name:'江南镇完成情况',baifenbi: 30, value: 30, count: 100},
			        {name:'大观镇完成情况',baifenbi: 75, value: 75, count: 100}
			     ];
			 }else if(userId=="heyuanhe"||userId=="xuxh"||userId=="yangqm"){//江安镇
				taskdata=[
				        {name:'怡乐镇完成情况',baifenbi: 20, value: 20, count: 100},
				        {name:'五矿镇完成情况',baifenbi: 30, value: 30, count: 100},
				        {name:'铁清镇完成情况',baifenbi: 75, value: 75, count: 100}
				     ];
			 }else if(userId == "liy"||userId == "sunlp"||userId == "wangd"){//高县
				 taskdata=[
				        {name:'文江镇完成情况',baifenbi: 20, value: 20, count: 100},
				        {name:'胜天镇完成情况',baifenbi: 15, value: 15, count: 100},
				        {name:'四烈乡完成情况',baifenbi: 64, value: 64, count: 100}
				     ];
				}else if(userId=="xiaopl"){
					 taskdata=[
						        {name:'镇西镇完成情况',baifenbi: 20, value: 20, count: 100},
						        {name:'龙会镇完成情况',baifenbi: 15, value: 15, count: 100},
						        {name:'山王镇完成情况',baifenbi: 64, value: 64, count: 100},
						        {name:'观英滩镇完成情况',baifenbi: 32, value: 32, count: 100}
						     ];
				}
			var grayBar = [];
			var top10CityList=[];
			var top10CityData=[];
			var top10taskdata=[];
			var cityList=[];
			var valdata=[];
			var baifenbi=[];
			function setMockData() {
			    $.each(taskdata, function(index, value) {
			    	top10CityList.push(value.name);
			    	top10CityData.push(value.value);
			    	grayBar.push(value.count);
			    	baifenbi.push(value.baifenbi);
			    });
			}
			setMockData();
			indexChart.option = {
				title: {
			        text: '任务统计',
			        left: 'left',
			        textStyle: {
			            color: "#E0D811",
			            fontSize: '16',
			            padding:10
			        }
			    },
			    tooltip: {
			        show: false,

			    },
			    grid: {
			        borderWidth: 0,
			        top: 18,
			        left:9,
			        right:150,
			        bottom:15,
			        textStyle: {
			            color: "#fff"
			        }
			    },
			    yAxis: [{
			        type: 'category',
			        axisTick: {
			            show: false
			        },
			        axisLine: {
			            show: false,
			            lineStyle: {
			                color: '#363e83',
			            }
			        },
			        axisLabel: {
			            show: false,
			            inside: false,
			        },
			        data: top10CityList,
			    }, {
			    	name:'占比',
			    	position : 'right',
			        offset:10,
			        type: 'category',
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            show: true,
			            inside: false,
			            textStyle: {
			                color: '#FDF11D',
			                fontWeight: 'normal',
			                fontSize: '16',
			                fontFamily: 'SourceHanSansCN-Regular'
			            },
			            formatter: function(val) {
			            	 return `${val}%`;
			            }
			        },
			        splitArea: {
			            show: false
			        },
			        splitLine: {
			            show: false
			        },
			        data : baifenbi
			    },
			     {
			    	name:'完成数',
			        type: 'category',
			        position : 'right',
			        offset:50,
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            show: true,
			            inside: false,
			            textStyle: {
			                color: '#DA1F3E',
			                fontWeight: 'normal',
			                fontSize: '16',
			                fontFamily: 'SourceHanSansCN-Regular'
			            },
			            formatter: function(val) {
			            	 return `${val}`;
			            },
			        },
			        splitArea: {
			            show: false
			        },
			        splitLine: {
			            show: false
			        },
			        data : top10CityData
			    },
			    {
			    	name:'总任务',
			        type: 'category',
			        position : 'right',
			        offset:80,
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            show: true,
			            inside: false,
			            textStyle: {
			                color: '#00DDE4',
			                fontWeight: 'normal',
			                fontSize: '16',
			                fontFamily: 'SourceHanSansCN-Regular'
			            },
			            formatter: function(val) {
			            	 return `${val}`;
			            },
			        },
			        splitArea: {
			            show: false
			        },
			        splitLine: {
			            show: false
			        },
			        data : grayBar
			    },
			    ],
			    xAxis: {
			        type: 'value',
			        axisTick: {
			            show: false
			        },
			        axisLine: {
			            show: false,
			            lineStyle: {
			                color: '#2f3640',
			            }
			        },
			        splitLine: {
			            show: false,
			            lineStyle: {
			                color: '#2f3640',
			            }
			        },
			        axisLabel: {
			            show: false,

			        },
			    },
			    series: [
			               //背景色--------------------我是分割线君------------------------------//
		        {
		            show: true,
		            type: 'bar',
		            barGap: '-82%',
		           /* barWidth: '35%', *///统计条宽度 
		            barWidth: '45%',
		            itemStyle: {
		                normal: {
		                	barBorderRadius: 30,
		                    color: '#010a1c',
		                    borderColor: '#1b3e54',
		                    shadowColor: '#1b3e54',
		                    shadowBlur: 5,
		                    borderWidth: 2,     
		                    shadowOffsetX:0.5,
		                    shadowOffsetY:0.5

		                },
		            },
		            z: 1,
		            data: grayBar
		        },{
			            name: '',
			            type: 'bar',
			            barWidth: '15%',
			            itemStyle: {
			                normal: {
			                    show: true,
			                    barBorderRadius:30,
			                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			                        offset: 0.2,
			                        color:'#49B3BD' 
			                    }, {
			                        offset: 1,
			                        color: '#AFDAE9'
			                    }]),
			                    borderWidth: 0,
			                },
			                emphasis: {
			                    shadowBlur: 15,
			                    shadowColor: '#49B3BD'
			                }
			            },
			            zlevel: 1,
			            barWidth: '15px',
			            data: top10CityData,
			            animationDuration: 1500,
			            label: {
			                normal: {
			                    color: '#24AEF4',
			                    show: true,
			                    position: [0, '25px'],
			                    textStyle: {
			                        fontSize: 14,
			                        fontWeight: '400',
			                        fontFamily: 'SourceHanSansCN-Regular'
			                    },
			                    formatter: function(a, b) {
			                        return a.name;
			                    }
			                }
			            },
			        },

			    ],
			     animationEasing: 'cubicOut',
			}
			indexChart.initChart('taskChart');
		},
		riverChart:function(){
			var dataNames=[];
			if(userId=="liuzb"||userId=="dongdh"||userId=="chensh"||userId=="yinzq"||userId=="wuhq"||userId=="zhush"){//宜宾市
				dataNames=["宜宾市","南溪区", "叙州区", "江安县","高县"];
			}else if(userId=="dingyh"||userId=="lvzf"||userId=="fansb"){//叙州区
				dataNames=["柏溪镇","观音镇", "横江镇", "白花镇"];
			}else if(userId=="heyh"||userId=="lvse"||userId=="guom"||userId=="wanglp"||userId=="xiaof"||userId=="zhouj"||userId=="huangsg"){// 南溪区   
				dataNames=["刘家镇","江南镇", "大观镇", "黄沙镇"];
			 }else if(userId=="heyuanhe"||userId=="xuxh"||userId=="yangqm"){//江安镇
				dataNames=["怡乐镇","五矿镇", "铁清镇", "阳春镇"];
			}else if(userId == "liy"||userId == "sunlp"||userId == "wangd"){//高县
				dataNames=["高县","文江镇","胜天镇","四烈乡"];
			}
			indexChart.option= {
				title: {
			        text: '河流统计',
			        left: 'left',
			        textStyle: {
			            color: "#E0D811",
			            fontSize: '16',
			            padding:10
			        },
			        subtext: '区域河流统计图(条)',
			        subtextStyle: {
    	                fontFamily: 'SourceHanSansCN-Regular',
    					color: "#00DDE4",
    	                fontSize: 12,
    	                fontStyle: 'normal',
    	                fontWeight: 'normal'
    	            }
			    },
			    grid: {	
			        top: 60,
			        left:30,
			        right:35,
			        bottom:40,
			        textStyle: {
			            color: "#fff"
			        }
			    },
			    xAxis: {
			        data: dataNames,
			        axisLine: {
			            lineStyle: {
			                color: '#115372'
			            }
			        },
			        axisLabel: {
			            color: '#83ECF3',
			            fontSize: 14
			        }
			    },
			    yAxis: {
			        nameTextStyle: {
			            color: '#fff',
			            fontSize: 10
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#115372'
			            }
			        },
			        axisLabel: {
			            color: '#E8E8E8',
			            fontSize: 10
			        },
			        splitLine: {
			            show: true,
			            lineStyle:{
			                 color: '#115372',
			                 width: 1,
			                type: 'dotted'
			            }
			        },
			        interval:10,
			        max:40
			    },
			    series: [{
			        type: 'bar',
			        barWidth: 30,
			        itemStyle:{
			            normal:{
			                color:'#DA1F3E'
			            }
			        },
			        data: [14, 7, 15, 24,5]
			    }]
			};
			indexChart.initChart('riverChart');
		},
		qualityChart:function(){
			indexChart.option = {
					title: {
				        text: '水质信息',
				        left: 'left', 
				        textStyle: {
				            color: "#E0D811",
				            fontSize: '16'
				        },
				        subtext: '近一24h的WT变化图(℃)',
				        subtextStyle: {
	    	                fontFamily: 'SourceHanSansCN-Regular',
	    					color: "#00DDE4",
	    	                fontSize: 12,
	    	                fontStyle: 'normal',
	    	                fontWeight: 'normal',
	    	            }					   
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:["翠屏区水质站", "南溪区水质站", "宜宾县水质站"]
				    },
				    grid: {	
				        top: 60,
				        left:25,
				        right:35,
				        bottom:25,
				        textStyle: {
				            color: "#fff"
				        }
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        axisLine: {
				            lineStyle: {
				                color: '#D4DCFE',
				                width:1
				            }
				        },
				        data: ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']
				    },
				    yAxis: {
				        type: 'value',
				        axisLine: {
				            lineStyle: {
				                color: '#D4DCFE',
				                width:1
				            }
				        },
				        axisLabel: {
				            color: '#75FFA9',
				            fontSize: 10
				        },
				        splitLine: {
				            show: false
				        },
				        interval:4,
				        max:20 
				    },
				    series: [
				        {
				            name:'WT',
				            type:'line',
				            symbol: "none",
				            itemStyle: {
				                normal: {
				                    color: "#E3AB00",
				                    lineStyle: {
				                        color: "#E3AB00",
				                        width:0.6
				                    }
				                }
				            },
				           areaStyle: { //区域填充样式
				                normal: {
				                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                            offset: 0,
				                            color: 'rgba(253, 241, 29, 0.3)'
				                        },
				                        {
				                            offset: 1,
				                            color: 'rgba(0,0,0, 0)'
				                        }
				                    ], false)
				                   
				                }
				            },
				            data:[15, 15,14, 16,14, 15, 13,15,15,14,14,13,14]
				        },
				        {
				            name:'TURB',
				            type:'line',
				            symbol: "none",
				            itemStyle: {
				                normal: {
				                    color: "#9400B9",
				                    lineStyle: {
				                        color: "#9400B9",
				                        width:0.6
				                    }
				                }
				            },
				            areaStyle: { //区域填充样式
				                normal: {
				                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                            offset: 0,
				                            color: 'rgba(148, 0, 185, 0.3)'
				                        },
				                        {
				                            offset: 1,
				                            color: 'rgba(0,0,0, 0)'
				                        }
				                    ], false)
				                   
				                }
				            },
				            data:[12, 12, 12,12, 13, 12, 11,12,12,12,12,11,12]
				        },
				        {
				            name:'COND',
				            type:'line',
				            symbol: "none",
				            itemStyle: {
				                normal: {
				                    color: "#F05924",
				                    lineStyle: {
				                        color: "#F05924",
				                        width:0.6
				                    }
				                }
				            },
				            areaStyle: { //区域填充样式
				                normal: {
				                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                            offset: 0,
				                            color: 'rgba(240, 89, 36, 0.3)'
				                        },
				                        {
				                            offset: 1,
				                            color: 'rgba(0,0,0, 0)'
				                        }
				                    ], false)
				                   
				                }
				            },
				            data:[9, 9, 8,8, 9, 9,9,9,8,8,7,8,8]
				        },
				        {
				            name:'PH',
				            type:'line',
				            symbol: "none",
				            itemStyle: {
				                normal: {
				                    color: "#D61F3E",
				                    lineStyle: {
				                        color: "#D61F3E",
				                        width:0.6
				                    }
				                }
				            },
				            areaStyle: { //区域填充样式
				                normal: {
				                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                            offset: 0,
				                            color: 'rgba(214,31,62,0.3)'
				                        },
				                        {
				                            offset: 1,
				                            color: 'rgba(0,0,0, 0)'
				                        }
				                    ], false)
				                   
				                }
				            },
				            data:[5, 5, 5,5, 5, 5,5,5,5,5,5,5,6]
				        },
				        {
				            name:'DOX',
				            type:'line',
				            symbol: "none",
				            itemStyle: {
				                normal: {
				                    color: "#0254CF",
				                    lineStyle: {
				                        color: "#0254CF",
				                        width:0.6
				                    }
				                }
				            },
				            areaStyle: { //区域填充样式
				                normal: {
				                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                            offset: 0,
				                            color: 'rgba(2,84,207,0.3)'
				                        },
				                        {
				                            offset: 1,
				                            color: 'rgba(0,0,0, 0)'
				                        }
				                    ], false)
				                   
				                }
				            },
				            data:[18, 19, 17,18, 18, 18, 18,18,17,18,16,17,18]
				        }
				    ]
				};
			indexChart.initChart('QualityChart');
		},
		busineChart:function(){
			indexChart.option = {
					color:['#F05924','#FDF11D'],
				    title: [
					   {
					    text: '事件汇总',
					    left: 'left',
					    textStyle: {
					        color: "#E0D811",
					        fontSize: '16'
					    } 
					   },	            
				       {
				        text: '本月事件统计图(件)',
				        left: '1%',
				        top: '6%',
				        textStyle: {
				            color: '#00DDE4',
				            fontSize: '14'
				        },
					    padding:20
				     }, {
				        text: '本月事件占比统计图',
				        left: '72%',
				        top: '6%',
				        textAlign: 'center',
				        textStyle: {
				            color: '#00DDE4',
				            fontSize: '14'
				        },
				       padding:20
				    }],
				    tooltip: {
				        trigger: 'item',
				        formatter: "{b} : {d}% <br/> {c}"
				    },
				    legend: {
				        x: 280,
				        itemWidth: 10,
				        itemHeight: 10,
				        itemGap: 10,
				        data: ['未处理', '已处理'],
				    	bottom: 5,
				    	textStyle: {
		                    fontSize: 14,
		                    fontFamily:'MicrosoftYaHeiLight',
				            color: function (value) {
				                   return value == '未处理'?'#F05924':'#FFFF00';
				            }
		                }
				    },
				    grid: {
				        left: '1%',
				        right: '45%',
				        top:'40%',
				        bottom: 10,
				        containLabel: true
				    },
				    xAxis: {
				        type: 'category',
				        axisLine: {
				            lineStyle: {
				                color: '#115372'
				            }
				        },
				        axisLabel: {
			        	   color: function (value) {
			                   return value == '未处理'?'#F05924':'#FFFF00';
			               },
			               textStyle: {
			                    fontSize: 16,
			                    fontFamily:'FZLTHK--GBK1-0',
					            textAlign:'center'
			                }
				        },
				        data :  ['未处理','已处理'],
				        interval:0
				    },
				    yAxis: {
				    	axisLine: {
				            lineStyle: {
				                color: '#115372'
				            }
				        },
				        splitLine: {
				            show: true,
				            lineStyle:{
				                 color: '#115372',
				                 width: 1,
				                 type: 'dotted'
				            }
				        },
				        "axisTick": {
				            "show": false
				        },
				        axisLabel: {
				            color: '#E8E8E8',
				            fontSize: 10
				            
				        },
				        type: 'value',
				        interval:15,
				        max:60
				    },
				    series: [
						  {
				            name:'',
				            type:'bar',
				            barWidth : 30,//柱图宽度
				            barGap:'10%', 
				            barCateGoryGap:2,
				            data:[13,54],
				            itemStyle: {
				                normal: {
				                    color: function(params) {
				                        // build a color map as your need.
				                        var colorList = [
				                            '#F05924',
				                            '#FFFF00'
				                        ];
				                        return colorList[params.dataIndex]
				                    },
				                    label: {
				                        show: false,
				                        position: 'top',
				                        formatter: '{c}%'
				                    }
				                }
				            }
				        },
				        {
						    name:'未处理',
						    type:'bar',
						    data:13
						},
						{
						    name:'已处理',
						    type:'bar',
						    data:54
						},
				        {
				            type: 'pie',
				            center:['75%','55%'], 
		                    radius:['25%', '53%'],
		                    itemStyle : {
		                        normal : {
		                            label : { 
		                                show : false 
		                            },
		                            labelLine : {     
		                                show : false  
		                            }
		                        }
		                    },
		                    label: { //标签的位置
		                        normal: {
		                            show: true,
		                            position: 'inside', //标签的位置
		                            formatter: "{d}%",
		                            textStyle: {
		                            	 color: '#fff',
		                            	 fontSize: 10
		                             }	 
		                        }
		                    },
				            data: [
				               {
				                value:54,
				                name: '已处理',
				                tooltip: {
				                    show: true
				                }
				              },
				              {
				                value: 13,
				                name: '未处理',
				                tooltip: {
				                    show: true
				                }
				            }
				            ]
				        }
				    ]
				}
			indexChart.initChart('busineChart');
		},
		
		initChart:function(id,option){
			var riverChart= echarts.init(document.getElementById(""+id+""));
			riverChart.setOption(indexChart.option);
			
			riverChart.on('click', function (params) {
				var index1 = 0;
				var index2 = 0;
				var task_url = "";
				var addvcd="";
				console.log(params);
				if(id == "taskChart"){
					index1 = 6;
					index2 = 1;
					$('#navber-menu-ul').find('li').eq(index1).trigger('click');
					var task_url = $('#menuLeft-ul').children('li:eq('+index2+')').find('a').attr('data-url');
					console.log(task_url);
					task_url += "?adcd=" + params.name.substring(0,3);
					$('#menuLeft-ul').children('li:eq('+index2+')').find('a').attr('data-url',task_url);
					$('#menuLeft-ul').find('li').eq(index2).trigger('click');
				}else if(id == "riverChart"){
					index1 = 1;
					index2 = 0;
					var addvcd=params.name;
				    console.log(name);
				   /* if(name=="宜宾市"){
				    	addvcd="511500000000";
				    }else if(name=="南溪区"){
				    	addvcd="511503000000";
				    }else if(name=="叙州区"){
				    	addvcd="511521000000";
				    }else{
				    	addvcd="511523000000";
				    }*/
					$('#navber-menu-ul').find('li').eq(index1).trigger('click');
					$('#menuLeft-ul').find('li').eq(index2).trigger('click');
				    var url= $('#menuLeft-ul').find('li').eq(0).find("a").attr("data-url");
				    $('#menuLeft-ul').find('li').eq(0).attr("data-param",""+addvcd+"");					
				}else if(id == "busineChart"){
					index1 = 3;
					if(params.name == '已处理'){
						index2 = 2;
					}else if(params.name == '未处理'){
						index2 = 0;
					}
					$('#navber-menu-ul').find('li').eq(index1).trigger('click');
					$('#menuLeft-ul').find('li').eq(index2).trigger('click');
				}
			});
		}
}
$(function(){
/*	var h=$(window).height();
	var sh=$("#header-nav").height();
	var sh1=$("#layui-row-firstdiv").height();
	var hchart=(h-sh-sh1)*0.3;
	var h1=hchart*0.87;
	$("#busineChart").height(h1);
	$("#taskChart,#riverChart").height(h1);
	var h2=$(".rhomboid").height();
	var h3=(hchart-h2)*0.87;
	var sm = $(".layui-div-two").height();
	$("#QualityChart").height(sm-51);*/
	indexChart.taskChart();
	indexChart.riverChart();
	//indexChart.qualityChart();
	indexChart.busineChart();
	$('.tab-busine').on('click','.span',function(){
        $(this).addClass("current").siblings().removeClass("current");
    });
	$('#QualityChart').on('click',function(){
		$('#navber-menu-ul').find('li').eq(1).trigger('click');
		$('#menuLeft-ul').find('li').eq(6).trigger('click');
	});
	$('#xunhe_div').on('click',function(){
		$('#navber-menu-ul').find('li').eq(2).trigger('click');
		$('#menuLeft-ul').find('li').eq(0).trigger('click');
	});
	$("#riverMore").click(function(){
		$('#navber-menu-ul').find('li').eq(1).trigger('click');
		$('#menuLeft-ul').find('li').eq(0).trigger('click');
	});
	$("#btn-movie").click(function(){
		$('#navber-menu-ul').find('li').eq(1).trigger('click');
		$('#menuLeft-ul').find('li').eq(6).trigger('click');		
	});
});