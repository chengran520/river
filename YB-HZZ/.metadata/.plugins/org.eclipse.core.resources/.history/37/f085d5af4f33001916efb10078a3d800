var busineEcharts={
		echartsData:function(){
			var arrSum=[];
			var data1="";
			var data2="";
			var result=commonUtils.get(WEB_ROOT+"/busine/accept/getBusinesEcharts",null,null);
			if(result.flag){
				data1=result.data.models;
				data2=result.data.models2;
				$.each(data1,function(i,v){	
					arrSum.push(this.sum);
		    	});
			}
			// 初始化图表标签
		    var myChart = echarts.init(document.getElementById('pic1'));
		    var option = {
		    	    tooltip : {
		    	        trigger: 'item',
		    	        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    	    },
		    	    calculable : false,
		    	    series : [
		    	        {
		    	            name:'事件类型',
		    	            type:'pie',
		    	            selectedMode: 'single',
		    	            radius : [0, 70],
		    	            
		    	            // for funnel
		    	            x: '20%',
		    	            width: '40%',
		    	            funnelAlign: 'right',
		    	            max: 1548,
		    	            
		    	            itemStyle : {
		    	                normal : {
		    	                    label : {
		    	                        position : 'inner'
		    	                    },
		    	                    labelLine : {
		    	                        show : false
		    	                    }
		    	                }
		    	            },
		    	            data:data2
		    	        },
		    	        {
		    	            name:'事件类型',
		    	            type:'pie',
		    	            radius : [100, 140],
		    	            
		    	            // for funnel
		    	            x: '60%',
		    	            width: '35%',
		    	            funnelAlign: 'left',
		    	            max: 1048,
		    	            
		    	            data:data1
		    	        }
		    	    ]
		    	};
		    
		    	                    
    		myChart.setOption(option);
		}
}
$(function(){
	busineEcharts.echartsData();
});