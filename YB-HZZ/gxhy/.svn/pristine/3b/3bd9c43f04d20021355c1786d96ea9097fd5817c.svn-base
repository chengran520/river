var formatter_date_utils={
	 formatterStrTime:function(dateKey,val,type){
		var today = new Date();
		var date= new Date(today.getTime()-(val* 24 * 3600 * 1000));
		if(dateKey != null){	
			date = new Date();
			date.setTime(dateKey);  
		}
		var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    var houres = date.getHours();
	    var minutes = date.getMinutes();
	    var seconds =  date.getSeconds();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    if(houres >= 0 && houres <= 9){
	    	houres = "0"+houres;
	    }
	    if(minutes >= 0 && minutes <= 9){
	    	minutes ="0"+minutes;
	    }
	    if(seconds >= 0 && seconds <= 9){
	    	seconds ="0"+seconds;
	    }
	    var nDate = "";
	    if(type == 1){
    		nDate = date.getFullYear()-val;
    	}else if(type == 2){
    		nDate =date.getFullYear() + seperator1 + month
    	}else if(type == 3){
    		nDate =date.getFullYear() + seperator1 + month + seperator1 + strDate
    	}else if(type == 4){
    		nDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
		    + " " + houres
    	}else if(type ==5){
    		nDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
		    + " " + houres+seperator2 + minutes
    	}else if(type ==6){
    		nDate =houres+seperator2 + minutes
    	}else {
    		nDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    	    + " " + houres + seperator2 + minutes
    	    + seperator2 + seconds;
    	}
	    return nDate;
    },
    formatterStrYmonth:function(){
    	var date = new Date();
		var seperator1 = "年";
	    var seperator2 = "月";
	    var month = date.getMonth();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    var nDate = date.getFullYear() + seperator1 + month + seperator2
	    return nDate;
    },
    initDatePicker:function(stm,etm){
		 $("#"+stm+"").on("focus",function(evt){
	     	window.WdatePicker({skin:'default',startDate:new Date(),dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'#F{$dp.$D(\''+etm+'\')}'});
	     });
	     $("#"+etm+"").on("focus",function(evt){
	     	window.WdatePicker({skin:'default',startDate:new Date(),dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\''+stm+'\')}'});
	     });
	},
	initDatePicker2:function(stm,etm){
		 $("#"+stm+"").on("focus",function(evt){
		     	window.WdatePicker({skin:'default',startDate:new Date(),dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\''+etm+'\')}'});
		  });
		 $("#"+etm+"").on("focus",function(evt){
		     	window.WdatePicker({skin:'default',startDate:new Date(),dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\''+stm+'\')}'});
		  });
	},
	initDatePicker3:function(stm,etm){
		 $("#"+stm+"").on("focus",function(evt){
		     	window.WdatePicker({skin:'default',startDate:new Date(),dateFmt:'yyyy-MM-dd HH:mm',maxDate:'#F{$dp.$D(\''+etm+'\')}'});
		  });
		 $("#"+etm+"").on("focus",function(evt){
		     	window.WdatePicker({skin:'default',startDate:new Date(),dateFmt:'yyyy-MM-dd HH:mm',minDate:'#F{$dp.$D(\''+stm+'\')}'});
		  });
	},
	initDatePickerTm:function(tm){
		 $("#"+tm+"").on("focus",function(evt){
	     	window.WdatePicker({skin:'default',startDate:new Date(),dateFmt:'yyyy-MM-dd'});
	     });
	},
	getHour:function(param){
		var cT = ""
		var date = new Date();
		var hour = date.getHours();
		var m = date.getMonth()+1;
		var d = date.getDate();
		if(String(m).length == 1){
			m = "0" + m;
		}
		if(String(d).length == 1){
			d = "0" + d;
		}
		var arr = [];
		for(var i = 0; i < param; i++) {
			hour++
			if(hour > 23) {
				hour = hour - 24;
			}
			cT = m + "-" + d + " " + hour;
			arr.push(cT);
		}
		return arr;
	},
	getyouHours:function(param){
	    var date = new Date();
	    var datestr =""
	    var dateArray=[];
	    var num=8;
		for(var i=0;i<=param;i++){
			datestr=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+num;
			dateArray.push(datestr);
			num++;
	     }
		return dateArray;
	},
	formatDate:function(value, row, index){
		if(value){
			return formatter_date_utils.formatterStrTime(value,null,5);
		}else{
			return '--';
		}
	},
	
	formatLongDate:function(time,type){
		if(time == null || time == ''){
			return "暂无数据";
		}
		var date = new Date(time);
	    var year = date.getFullYear(),
	        month = date.getMonth() + 1,//月份是从0开始的
	        day = date.getDate(),
	        hour = date.getHours(),
	        min = date.getMinutes(),
	        sec = date.getSeconds();
	    if(month < 10){
	    	month = '0' + month;
	    }
	    if(day < 10){
	    	day = '0' +day;
	    }
	    if(hour < 10){
	    	hour = '0' +hour;
	    }
	    if(min < 10){
	    	min = '0' +min;
	    }
	    if(sec < 10){
	    	sec = '0' +sec;
	    }
	    var newTime;
	    if(type == 3){
	    	newTime = year + '-' +
		        month + '-' +
		        day ;
	    }else if(type == 4){
	    	newTime = year + '-' +
		        month + '-' +
		        day + ' ' +
		        hour;
	    }else if(type == 5){
	    	  newTime = year + '-' +
		        month + '-' +
		        day + ' ' +
		        hour + ':' +
		        min ;
	    }else if(type == 8){
	    	  newTime = year + '-' +
		        month + '-' +
		        day + ' ' +
		        hour + ':00';
	    }else if(type == 9){
	    	  newTime = year + '-' +
		        month + '-' +
		        day + ' ' +
		        hour + ':' +
		        min;
	    }else if(type == 10){
	    	newTime = hour + ':' + min + ':' + sec;
	    }
	    return newTime;
	},
	 getDay:function(day){ 
	       var today = new Date();  
	       var dates=[];
	       var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;          
	       today.setTime(targetday_milliseconds); //注意，这行是关键代码 
	       var tYear = today.getFullYear();  
	       var tMonth = today.getMonth();  
	       var tDate = today.getDate();  
	       tMonth = this.doHandleMonth(tMonth + 1);  
	       tDate = this.doHandleMonth(tDate);
	       for(var i=0;i<7;i++){
	    	   dates.push(tYear+"-"+tMonth+"-"+tDate);
	    	   tDate=tDate+1;
	       }
	       return dates;  
	}, 
	doHandleMonth:function(month){  
	       var m = month;  
	       if(month.toString().length == 1){  
	          m = "0" + month;  
	       }  
	       return m;  
	}
}