var commonUtils ={
	flag:false,
	data:null,
	sendFlag:false,
	get:function(url, data , async,tp){
		var _this = this;
		$.ajax({
			type : 'GET',
			url : url,	
			data:data,
			dataType : "json",
			async : async,
			error : function(request) {
				layer.msg("网络连接失败，请检查网络状态。", { icon:7});
				_this.flag = false;
			},
			success : function(result) {
				if (result.success) {
					_this.data = result.data;
					_this.flag = true;
				} else {
					_this.flag = false;
				}
			}
		});
       return commonUtils;
	},
	post:function(url,data,async,str){
		var _this = this;
		$.ajax({
			type : 'POST',
			url : url,	
			data: data,
			dataType : "json",
			async : async,
			/*contentType:'application/json',*/
			error : function(request) {
				layer.msg("网络连接失败，请检查网络状态。", { icon:2});
				_this.flag = false;
			},
			success : function(result) {
				if (result.success) {
					_this.data = result.data;
					_this.flag = true;
				} else {
					_this.flag = false;
				}
			}
		});
       return commonUtils;
	},
	UUID:function(prefix){
	  prefix = prefix || "";
      return (prefix + Math.random() + Math.random()).replace(/0\./g, "");
	},
	isEmpty: function(str){
		if(str == '' || str == null || str == 'null' || str == undefined){
			return true;
		}else{
			return false;
		}
	}
}