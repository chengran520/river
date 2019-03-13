var riverChartMap = {
		initRiverChart:function(data,stnm){
		     console.log(data);
			 var myChart = echarts.init(document.getElementById('initRiverInfoChart'));
		     var zlist = [];
		     var qlist = [];
		     var datax = [];
		     if(data != null && data.length > 0){
		    	 for(var i = 0 ;i < data.length ;i++){
		    		 zlist.push(data[i].z);
		    		 qlist.push(data[i].q);
		    		 datax.push(data[i].tm);
		    	 }
		     }
		     
		     var colors = ['#da70d6','#6495ED'];
		     var option = {
		    		 /*title : {
				         text : (stnm == undefined ? "" :stnm.trim()) +' 近24小时水位变化图',
				         x : 20,
				         textStyle: {
				             color: '#008B45',
				             fontSize: 14
				         }
				     },*/
				     backgroundColor:'#fff',
				     color: colors,
				     grid: {
			                left: '3%',
			                right: '4%',
			                bottom: '13%',
			                containLabel: true
			             },
				     tooltip : {
				         trigger : 'axis',
				         formatter: function(params) {
				             var texts = "";
				             for (var i = 0; i < params.length; i++) {
				            	 if (i == 0) {
				            		 texts += params[i].name + "<br>";
				            	 }
				            	 if(params[i].seriesName == "水位"){
				            		 texts += params[i].marker + params[i].seriesName + ": " + params[i].value + "m" + "<br>";				            		 
				            	 }else if(params[i].seriesName == "流量"){
				            		 texts += params[i].marker + params[i].seriesName + ": " + params[i].value + "m³/s" + "<br>";	
				            	 }
				             }
				             return texts;
				         }
				     },
				     legend  : {
				         x : 'center',
				         top : '11%',
				         textStyle : {
				             color : '#90979c',
				         },
				         data : ['水位','流量']
				     },
				     calculable : true,
				     xAxis : [{
				         type : "category",
				         splitLine : {
				             show : false
				         },
				         axisTick : {
				             show : false
				         },
				         splitArea : {
				             show : false
				         },
				         data : datax,
				     }],
				     yAxis : [{
				    	 type: 'value',
    		             name: '水位(m)',
    		             position: 'left',
    		             min:0,
    		             splitNumber:3,
    		             axisLine: {
    		                 lineStyle: {
    		                     color: colors[0]
    		                 }
    		             },
				         splitLine : {
				             show : false
				         },
				         axisLine : {
				             lineStyle: {
				                 color: '#0099FF'
				             }
				         },
				         axisTick : {
				             show : false
				         },
				         axisLabel : {
				             interval : 0,
				         },
				         splitArea : {
				             show : false
				         }
				     },{
				    	 type: 'value',
    		             name: '流量 (m³/s)',
    		             position: 'right',
    		             min:0,
    		             axisLine: {
    		                 lineStyle: {
    		                     color: colors[1]
    		                 }
    		             },
				         splitLine : {
				             show : false
				         },
				         axisLine : {
				             lineStyle: {
				                 color: '#CD5B45'
				             }
				         },
				         axisTick : {
				             show : false
				         },
				         axisLabel : {
				             interval : 0,
				         },
				         splitArea : {
				             show : false
				         }
				     }],
				     dataZoom : [{
				         show : true,
				         height : 20,
				         xAxisIndex : [
				             0
				         ],
				         bottom: 5,
				         start : 20,
				         end : 80,
				         handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
				         handleSize: '110%',
				         fillerColor: 'rgba(160,160,160,1)',
				         handleStyle: {
				             color: "#d3dee5",
				         },
				         borderColor: "#90979c"
				     }, {
				         type : "inside",
				         show : true,
				         height : 15,
				         start : 1,
				         end : 35
				     }],
				     series : [{
				            name : "水位",
				            type : "line",
				            itemStyle : {
				                normal : {
				                    color : "#0099FF"    
				                }
				            },
				            data : zlist
				        },{
				            name : "流量",
				            type : "line",
				            yAxisIndex: 1,
				            itemStyle : {
				                normal : {
				                    color : "#CD5B45",
				                    barBorderRadius : 0,
				                    label : {
				                        show : true,
				                        position : "top",
				                        formatter: function(p) {
				                            return p.value > 0 ? (p.value) : '';
				                        }
				                    }
				                }
				            },
				            data : qlist
				        
				        }]
				     
		    		 /*
	    		 title : {
                    text: (stnm == undefined ? "" :stnm) +' 近24小时水位变化',
                    x:20,
                    textStyle:{
                    	fontSize: 14,
                        color: '#008B45'
                    }
                 },
    		     color: colors,
    		     tooltip: {
    		         trigger: 'axis'
    		     },
    		     grid: {
	                left: '3%',
	                right: '4%',
	                bottom: '3%',
	                containLabel: true
	             },
    		     toolbox: {
    		         feature: {
    		             restore: {show: true},
    		             saveAsImage: {show: true}
    		         }
    		     },
    		     legend: {
    		    	 data:['水位','流量'],
    		     },
    		     calculable : true,
    		     xAxis: [
    		         {
    		             type: 'category',
    		             data: datax
    		         }
    		     ],
    		     yAxis: [
    		         {
    		             type: 'value',
    		             name: '水位(m)',
    		             position: 'left',
    		             min:0,
    		             axisLine: {
    		                 lineStyle: {
    		                     color: colors[0]
    		                 }
    		             }
    		         },
    		         {
    		             type: 'value',
    		             name: '流量 (m³/s)',
    		             position: 'right',
    		             min:0,
    		             axisLine: {
    		                 lineStyle: {
    		                     color: colors[1]
    		                 }
    		             }
    		         }
    		     ],
    		     series: [
    		         {
    		             name:'水位',
    		             type:'line',
    		             data:zlist
    		         },
    		         {
    		             name:'流量',
    		             type:'line',
    		             yAxisIndex: 1,
    		             data:qlist
    		         }
    		     ]
		     */}
		     myChart.setOption(option);
			}
	}

