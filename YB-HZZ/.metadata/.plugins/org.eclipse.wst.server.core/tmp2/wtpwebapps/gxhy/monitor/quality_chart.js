var QualityChart={
	inintChart:function(data,tp,format){
		console.log(data);
		var chart = echarts.init(document.getElementById('initQualityChart'));
		var xData = [];
		var yData = [];
		var nm = "";
		if(data.length > 0){
			for(var i =0 ;i<data.length;i++){
				if(tp == 'wt'){
					yData.push(data[i].wt);
					nm = "温度(WT)";
				}else if(tp == 'turb'){
					yData.push(data[i].turb);
					nm = "浊度(TURB)";
				}else if(tp == 'cond'){
					yData.push(data[i].cond);
					nm = "电导率(COND)";
				}else if(tp == 'ph'){
					yData.push(data[i].ph);
					nm = "氢离子(PH)";
				}else if(tp == 'dox'){
					yData.push(data[i].dox);
					nm = "溶解氧(DOX)";
				}
				xData.push(data[i].spt);
			}
		}
		var option = {
			  tooltip : {
			        trigger: 'axis',
			    },
			    grid: {
			        left:'3%',
			        right: '3%',
			        bottom: '7%',
			        top:'10%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : xData,
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            offset:10,
			            axisLine:{
			            	lineStyle:{
				                width:15,
				                color: {
								    type: 'linear',
								    x: 0,
								    y: 0,
								    x2: 0,
								    y2: 1,
								    colorStops: [{
								        offset: 0, color: '#ffc30c' // 0% 处的颜色
								    }, {
								        offset: 1, color: '#12c7f9' // 100% 处的颜色
								    }],
								    globalCoord: true // 缺 为 false
			                		}
					            }
					        }
			        }
			    ],
			    series : [
			        {
			            name:nm,
			            type:'line',
			            areaStyle: {normal: { color:'#badee2'}},
			            itemStyle: {
			                normal: {
			                    color: 'rgb(101, 190, 234)'
			                }
			            },
			            lineStyle:{
			            	normal:{
			            		color:'#63B8FF'
			            	}
			            },
			            data:yData
			        }
			    ]
		}
		chart.setOption(option);
	}
}

