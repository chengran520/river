///////////////////////////////////////////////////////////////////////////
// Copyright © 2015 ZHXT All Rights Reserved.
// create by tiankechuan 2016-4-6 15:03:10
///////////////////////////////////////////////////////////////////////////

//validatebox 校验规则扩展
(function($) {
	$.extend($.fn.validatebox.defaults.rules, {
        idcard: {// 验证身份证
            validator: function (value) {
                return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
            },
            message: '身份证号码格式不正确'
        },
        minLength: {
            validator: function (value, param) {
                return value.length >= param[0];
            },
            message: '请输入至少（2）个字符.'
        },
        length: { validator: function (value, param) {
            var len = $.trim(value).length;
            return len >= param[0] && len <= param[1];
        },
            message: "输入内容长度必须介于{0}和{1}之间."
        },
        phone: {// 验证电话号码
            validator: function (value) {
                return /^((\d2,3)|(\d{3}\-))?(0\d2,3|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
            },
            message: '格式不正确,请使用下面格式:020-88888888'
        },
        mobile: {// 验证手机号码
            validator: function (value) {
                return /^(13|15|18)\d{9}$/i.test(value);
            },
            message: '手机号码格式不正确'
        },
        intOrFloat: {// 验证整数或小数
            validator: function (value) {
                return /^\d+(\.\d+)?$/i.test(value);
            },
            message: '请输入数字，并确保格式正确'
        },
        currency: {// 验证货币
            validator: function (value) {
                return /^\d+(\.\d+)?$/i.test(value);
            },
            message: '货币格式不正确'
        },
        qq: {// 验证QQ,从10000开始
            validator: function (value) {
                return /^[1-9]\d{4,9}$/i.test(value);
            },
            message: 'QQ号码格式不正确'
        },
        integer: {// 验证整数 可正负数
            validator: function (value) {
                //return /^[+]?[1-9]+\d*$/i.test(value);

                return /^([+]?[0-9])|([-]?[0-9])+\d*$/i.test(value);
            },
            message: '请输入整数'
        },
        age: {// 验证年龄
            validator: function (value) {
                return /^(?:[1-9][0-9]?|1[01][0-9]|120)$/i.test(value);
            },
            message: '年龄必须是0到120之间的整数'
        },

        chinese: {// 验证中文
            validator: function (value) {
                return /^[\Α-\￥]+$/i.test(value);
            },
            message: '请输入中文'
        },
        english: {// 验证英语
            validator: function (value) {
                return /^[A-Za-z]+$/i.test(value);
            },
            message: '请输入英文'
        },
        unnormal: {// 验证是否包含空格和非法字符
            validator: function (value) {
                return /.+/i.test(value);
            },
            message: '输入值不能为空和包含其他非法字符'
        },
        username: {// 验证用户名
            validator: function (value) {
                return /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/i.test(value);
            },
            message: '用户名不合法（字母开头，允许6-16字节，允许字母数字下划线）'
        },
        faxno: {// 验证传真
            validator: function (value) {
                //            return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/i.test(value);
                return /^((\d2,3)|(\d{3}\-))?(0\d2,3|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
            },
            message: '传真号码不正确'
        },
        zip: {// 验证邮政编码
            validator: function (value) {
                return /^[1-9]\d{5}$/i.test(value);
            },
            message: '邮政编码格式不正确'
        },
        ip: {// 验证IP地址
            validator: function (value) {
                return /d+.d+.d+.d+/i.test(value);
            },
            message: 'IP地址格式不正确'
        },
        name: {// 验证姓名，可以是中文或英文
            validator: function (value) {
                return /^[\Α-\￥]+$/i.test(value) | /^\w+[\w\s]+\w+$/i.test(value);
            },
            message: '请输入姓名'
        },
        date: {// 验证姓名，可以是中文或英文
            validator: function (value) {
                //格式yyyy-MM-dd或yyyy-M-d
                return /^(?:(?!0000)[0-9]{4}([-]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]?)0?2\2(?:29))$/i.test(value);
            },
            message: '清输入合适的日期格式'
        },
        same: {
            validator: function (value, param) {
                if ($("#" + param[0]).val() != "" && value != "") {
                    return $("#" + param[0]).val() == value;
                } else {
                    return true;
                }
            },
            message: '两次输入的密码不一致！'
        },
        z:{
        	validator: function (value, param) {
        		return /^\d{1,7}(\.\d{1,3})?$/i.test(value);
            },
            message: '水位精度为NUMBER(7,3)，请输入正确格式的水位！'
        },
        q:{
        	validator: function (value, param) {
        		return /^\d{1,9}(\.\d{1,3})?$/i.test(value);
            },
            message: '流量精度为NUMBER(9,3)，请输入正确格式的流量！'
        },
        w:{
        	validator: function (value, param) {
        		return /^\d{1,9}(\.\d{1,3})?$/i.test(value);
            },
            message: '蓄量精度为NUMBER(9,3)，请输入正确格式的蓄量！'
        },
        //param[9,3]
        precision:{
        	validator: function (value, param) {
        		var str = '^\\d{1,'+param[0]+'}(\\.\\d{1,'+param[1]+'})?$';
        		var reg = new RegExp(str);  
        		var isvalid = reg.test(value);
        		return isvalid;
            },
            message: '请输入正确精度的数字！'
        },
        dispatchRule:{
        	validator: function (value, param) {
        		if(value!=null&&value!=''){
        			value += '&&';
        			var isvalid =   /^(((0|1)@\d{8}(@qmax=\d{1,9}(\.\d{1,3})?)?(@qmin=\d{1,9}(\.\d{1,3})?)?(@zmax=\d{1,7}(\.\d{1,3})?)?(@zmin=\d{1,7}(\.\d{1,3})?)?)(&{2}|\|))+$/i.test(value);
        			if(isvalid){
        				var array = value.split(/&{2}|\|/);
            			for(var i=0;i<array.length-1;i++){
            				var array1 = array[i].split(/@/);
            				for(var j=0;j<array1.length;j++){
            					if(j==0){
            						if(array1[j].length!=1){
            							return false;
                    				}
            					}else if(j==1){
            						if(array1[j].length!=8){
            							return false;
                    				}
            					}else if(array1[j].startWith('qmax=')||array1[j].startWith('qmin=')){
        							var str1 = array1[j].substring(5);
        							if(str1.indexOf('.')>0){
        								var array2 = str1.split(/\./);
            							if(array2[0].length>9){
            								return false;
            							}
            							if(array2[1].length>3){
            								return false;
            							}
        							}else{
        								if(str1.length>9){
            								return false;
            							}
        							}
            					}else if(array1[j].startWith('zmax=')||array1[j].startWith('zmin=')){
        							var str1 = array1[j].substring(5);
        							if(str1.indexOf('.')>0){
        								var array2 = str1.split(/\./);
            							if(array2[0].length>7){
            								return false;
            							}
            							if(array2[1].length>3){
            								return false;
            							}
        							}else{
        								if(str1.length>7){
            								return false;
            							}
        							}
            					}
            				}
            			}
            			return true;
        			}else{
        				return false;
        			}
        		}else{
        			return true;
        		}
            },
            message: '请输入合法的调度规则等式 <br>参考例子：1@60810400@qmax=2000@qmin=1000@zmax=200@zmin=100<br>&&0@60810400@qmax=2000@qmin=1000@zmax=200@zmin=100<br>规则：&&代表与关系 |代表或关系  第一位数字：1代表预报数据  0代表实时数据 <br>第二位：长度8位  流量精度：NUMBER(9,3) 水位精度：NUMBER(7,3)！'
//        	message: '请输入合法的调度规则等式'
        }
    });
})(jQuery);