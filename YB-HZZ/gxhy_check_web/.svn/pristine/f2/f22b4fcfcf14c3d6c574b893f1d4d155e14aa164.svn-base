var countChart={
	getProblemCount:function(){
		 var option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross',
				            crossStyle: {
				                color: '#999'
				            }
				        }
				    },
				    grid: {
				    	top:'10%',
				        left: '6%',
				        right: '6%',
				        bottom: '15%',
				        containLabel: false
				    },
				    xAxis: [
				        {
				            type: 'category',
				            data: ['违章建筑','存在违法养殖','存在围垦湖泊','污水偷排','非法捕捞','漂浮物','河岸有垃圾','河坝渗漏垮塌','存在侵占水域','破坏岸线','存在非法采砂'],
				            axisLabel:{'interval':0,rotate:20}, 
				            axisPointer: {
				                type: 'shadow'
				            }
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value',
				            min: 0,
				            name:"个数（个）",
				            max: 25,
				            interval: 5,
				            axisLabel: {
				                formatter: '{value}'
				            },
				            splitLine: {
				                show: true,
				                lineStyle:{
				                    type:'dashed'
				                }
				            }
				        
				        },
				        {
				            type: 'value',
				            min: 0,
				            max: 25,
				            interval: 5,
				            axisLabel: {
				                formatter: '{value}%'
				            },
				            splitLine: {
				                show: true,
				                lineStyle:{
				                    type:'dashed'
				                }
				            }
				        }
				    ],
				    series: [
				        {
				            name:'问题总数',
				            type:'bar',
				            data:[8, 4, 7, 23, 25, 7, 13, 16, 3, 20, 6],
					        itemStyle:{
	                            normal:{
	                                color:'#F36A5B'
	                            }
	                        }
				        },
				        {
				            name:'已处理数',
				            type:'bar',
				            data:[6, 5, 9, 6, 8, 7, 7, 8, 8, 8, 6],
				            itemStyle:{
	                            normal:{
	                                color:'#80C269'
	                            }
	                        }
				        },
				        {
				            name:'处理率',
				            type:'line',
				            yAxisIndex: 1,
				            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
				            itemStyle:{
	                            normal:{
	                                color:'#F29726'
	                            }
	                        }
				            
				        }
				    ]				
		 		};
		 var problemChart= echarts.init(document.getElementById('problemCount'));
		 problemChart.setOption(option);		 
	},
	getPatrolCount:function(){
		var option = {
			    grid: {
			    	top:'10%',
			        left: '6%',
			        right: '5%',
			        bottom: '15%',
			        containLabel: false
			    },
			    xAxis: {
			        type: 'category',
			        data: ['三江镇', '江源镇', '羊马镇', '廖家镇', '元通镇', '观胜镇', '怀远镇','三郎镇']
			    },
			    
			    yAxis: {
			    	name:"次数（次）",
			        type: 'value',
			        splitLine: {
		                show: true,
		                lineStyle:{
		                    type:'dashed'
		                }
		            }
			    },
			    series: [{
			        data: [820, 932, 901, 934, 1290, 1330, 1320,590],
			        type: 'line'
			    }]
			};
		var patrolCount= echarts.init(document.getElementById('patrolCount'));
		patrolCount.setOption(option);	
	}
}

$(function(){
	var h=$(".layui-card").height();
	var h1=$(".layui-card-header").height();
	$(".layui-card-body").height(h-h1-30);
	$(".layui-card .layui-card-header span").click(function(e){
		$(this).addClass("spanActive");      
		$(this).siblings().removeClass("spanActive");
	});
 
	countChart.getProblemCount();
	countChart.getPatrolCount();
});
