var aRiverChart={
		getCheckChart:function(){
			var option = {
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				    	orient: 'vertical',
				    	data: ["优秀", "合格", "不合格"],
				    	icon: "circle", 
				    	left:'80%', 
				    	top:'10%',
				    	itemWidth: 20,  // 设置宽度
				    	itemHeight: 30, // 设置高度
				    	itemGap:15, // 设置间距
				    	 textStyle:{
				    		    color: '#666',   
	                            fontSize: 15//字体大小
	                        },
				    	},

				    series : [
				        {
				            name: '访问来源',
				            type: 'pie',
				            radius : '80%',
				            center: ['35%', '50%'],
				            data:[
				                {value:20, name:'优秀'},
				                {value:70, name:'合格'},
				                {value:10, name:'不合格'}
				            ],
						    itemStyle: {
					        	 emphasis: {
					        	     shadowBlur: 10,
					        	     shadowOffsetX: 0,
					        	     shadowColor: 'rgba(0, 0, 0, 0.5)'
					        	  },
							     normal:{
						    	     color:function(params) {
						    	     //自定义颜色
						    	     var colorList = [           
				                             '#F0788F','#DE76CA','#9972E7',
						    	         ];
						    	         return colorList[params.dataIndex]
						    	      }
						    	 }
					       }
				        }
				    ]
				};
			var checkChart = echarts.init(document.getElementById('checkChart'));
			checkChart.setOption(option);
		},
		getTaskChart:function(){
			var dates=formatter_date_utils.getDay(-7);
			console.log(dates);
			 var data=new Array();	
			 var value=70;
			 for(var i=0;i<dates.length;i++){
					var date=new Object();
					date.name=dates[i];
					date.value=value;
		        	
		        	console.log(date);
		        	data.push(date);
		        	value=value+4;
			 }
			var xData = [],
			    yData = [];
			var min = 50; 
			data.map(function(a, b) {
			    xData.push(a.name);
			    if (a.value === 0) {
			        yData.push(a.value + min);
			    } else {
			        yData.push(a.value);
			    }
			});
			option = {
			    color: ['#3398DB'],
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'line',
			            lineStyle: {
			                opacity: 0
			            }
			        },
			        formatter: function(prams) {
			            if (prams[0].data === min) {
			                return "任务完成率：0%"
			            } else {
			                return "任务完成率：" + prams[0].data + "%"
			            }
			        }
			    },
			    legend: {
			        data: ['目标任务量', '已完成任务量'],
			        show: true
			    },
			    grid: {
			        left: '0%',
			        right: '0%',
			        bottom: '0%',
			        top: '15%',
			        height: '85%',
			        containLabel: true,
			        z: 22
			    },
			    xAxis: [{
			        type: 'category',
			        gridIndex: 0,
			        data: xData,
			        axisTick: {
			            alignWithLabel: true
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#0c3b71'
			            }
			        },
			        axisLabel: {
			            show: true,
			             color: '#666',
			             fontSize:12
			        }
			    }],
			    yAxis: [{
			    	    name:"已完成任务量",
			            type: 'value',
			            gridIndex: 0,
			            splitLine: {
			                show: true,
			                lineStyle:{
			                    type:'dashed'
			                }

			            },
			            axisTick: {
			                show: false
			            },
			            min: min,
			            max: 100,
			            axisLine: {
			                lineStyle: {
			                    color: '#666'
			                }
			            },
			            axisLabel: {
			                color: '#666',
			                formatter: '{value} %'
			            }
			        },
			        {
		            name: '目标任务量',
		            type: 'value',
		            position: 'right',
		            axisLabel: {
		                textStyle: {
		                    color: '#666'
		                }
		            },
		            axisLine: {
		                show: false
		            },
		            axisTick: {
		                show: false
		            },
		            splitLine: {
		                show: false,
		            }
		        }
			    ],
			    series: [{
			            name: '已完成任务量',
			            type: 'bar',
			            barWidth: '30%',
			            xAxisIndex: 0,
			            yAxisIndex: 0,
			            itemStyle: {
			                normal: {
			                    barBorderRadius: 30,
			                    color: new echarts.graphic.LinearGradient(
			                        0, 0, 0, 1, [{
			                                offset: 0,
			                                color: '#03CAD6'
			                            },
			                            {
			                                offset:0.9,
			                                color: '#42EDC6'
			                            }
			                        ]
			                    )
			                }
			            },
			            data: yData,
			            zlevel: 11

			        },
			         {
			            name: '目标任务量',
			            yAxisIndex: 1,
			            type: 'line',
			            showAllSymbol: true,
			            symbol: 'emptyCircle',
			            symbolSize:10,
			            data: [50, 60, 65, 80, 100, 70, 100],
			            itemStyle: {
			                normal: {
			                    color: '#fdb94e'
			                },
			            },
			        }
			      
			    ]
			};
			var taskChart = echarts.init(document.getElementById('taskChart'));
			taskChart.setOption(option);
			
		},
		getRiverLongChart:function(){
			var option = {
				    color: ['#666'],
				    grid: {
				    	top:'10%',
				        left: '10%',
				        right: '0%',
				        bottom: '8%',
				        containLabel: false
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : ['釜溪河', '龙结河', '中溪河','龙会河','其他河流'],
				            axisTick: {
				                alignWithLabel: true
				            }
				          
				        }
				    ],
				    yAxis : [
				        {
				        	 name:'个数（人）',
				            type : 'value',
				            splitLine: {
				                show: true,
				                lineStyle:{
				                    type:'dashed'
				                }
				            },
				            axisLine: {
				                lineStyle: {
				                    color: '#666'
				                }
				            },
				            axisLabel: {
				                color: '#666',
				                formatter: '{value}'
				            }
				        },
				        
				    ],
				    series : [
				        {
				            name:'河长统计',
				            type:'bar',
				            barWidth: '60%',
				            data:[105,102,84,102,159],
				            itemStyle: {
				                normal: {
				                    color: function(params) {
				                        var colorList = ['#6A8ABE','#44BFCA','#00A0E9','#80C269','#EB6877'];
				                        return colorList[params.dataIndex]
				                    },
				                    label: {
				                        show: true,
				                        position: 'top',
				                        color: '#666',
				                        formatter: '{c}'
				                    }
				                }
				            },
				        }
				    ]
				};
			var riverLongChart = echarts.init(document.getElementById('riverLongChart'));
			riverLongChart.setOption(option);
		}
}
$(function(){
	var height=$(".layui-body").height();
	var h1=$("#midden-div .layui-card-header").height();
	var h=height*0.35.height-h1;
	 $("#checkChart,#taskChart,#riverLongChart").height(h);
	aRiverChart.getCheckChart();
	aRiverChart.getTaskChart();
	aRiverChart.getRiverLongChart();
});