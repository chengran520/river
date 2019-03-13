var gridTool = {
	formatterStatus:function(value,row,index){
		var strReturn="";
		if(value=='1')
			strReturn="<a class=\"glyphicons ok_2 text-success\"><i></i></a>"; 
		else if(value=="0")
			strReturn="<a class=\"glyphicons warning_sign text-warning\"><i></i></a>"; 
		else
			return value;
		return strReturn; 
	},
	renderTime:function(value,row,index){
		if(value==''||value==null)
			return '--';
		else {
			try{
				var date=value.parseDate();
				return '<a title="'+value+'">'+date.toFormatStr(8)+'</a>'; 
			}catch(error){ 
				return value;
			}
		}
	}
}