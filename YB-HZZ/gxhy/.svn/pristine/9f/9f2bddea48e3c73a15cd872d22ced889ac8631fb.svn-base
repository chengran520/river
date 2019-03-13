var formatter_str_util={
	strEllip:function(str,n){  
		var ilen = str.length;  
		if(ilen*2 <= n) return str;  
			n -= 3;  
			var i = 0;  
			while(i < ilen && n > 0)  {  
				if(escape(str.charAt(i)).length>4) n--;  
				n--;  
				i++;  
			}  
		if( n > 0) return str;  
		return str.substring(0,i)+"...";  
	},
	errorTip:function(str){
		layer.alert(str, {
			 icon: 5,
			 title: "提示"
	     });
		return;
	},
	successTip:function(str){
		layer.alert(str, {
			 icon: 6,
			 title: "提示"
	     });
		return;
	}
}

