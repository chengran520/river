var formUtil = {
		 //错误提示
	    errorTip: function (str) {
	        layer.alert(str, {
	            icon: 5,
	            title: "提示"
	        });
	        return;
	    },
	    //成功提示
	    successTip: function (str) {
	        layer.alert(str, {
	            icon: 6,
	            title: "提示"
	        });
	        return;
	    },
	    //选择行政区 乡镇
	    townFormat: function(info) {
	        var $town = $('#citys select[name="town"]');
	        $town.hide().empty();
	        if (info['code'] % 1e4 && info['code'] < 7e5) {	//是否为“区”且不是港澳台地区
	            $.ajax({
	                url: 'common/util/data_location/town/' + info['code'] + '.json',
	                dataType: 'json',
	                success: function (town) {
	                    $town.show();
	                    for (i in town) {
	                        $town.append('<option value="' + i + '">' + town[i] + '</option>');
	                    }
	                }
	            });
	        }
	    },
		//表单模态框   0删除 1新增 2编辑 3详情
	    showBtn:function(type,objName,formId){
	    	if(!formId){
	    		formId = objName.id;
	    	}
	    	$("#form_" + formId)[0].reset();
	    	$(".error").html('');
	    	$('#form_' + formId).find('input').removeClass('input-validation-error');
	    	$("#form_" + formId).find('input,textarea,select').removeAttr('disabled');
	    	if(type == 1){
	    		$(".modal .btn-primary.update").hide();
	    		$(".modal .btn-primary.add").show();
	    		$("#title_type").text('新增');
	    	}else if(type == 2){
	    		$(".modal .btn-primary.add").hide();
	        	$(".modal .btn-primary.update").show();
	        	formUtil.fillData('form_' + formId,objName.clickRow);
	        	$("#title_type").text('编辑');
	    	}else if(type == 3){
	    		$(".modal .btn-primary.update").hide();
	    		$(".modal .btn-primary.add").hide();
	    		$("#title_type").text('详情');
	    		formUtil.fillData('form_' + formId,objName.clickRow);
	    		$("#form_" + formId).find('input,textarea,select').attr('disabled',true);
	    	}
	    	 $("#modal_" + objName.id).modal('show');
	    },
	    
	    // 填充数据  id:表单id  data:填充数据
	    fillData:function(id,data){
	    	 $('#' + id).populateForm(data);
	    },
	    
	    //删除数据  删除编码
	    deleteData:function(url,tableId){
	    	layer.confirm('您确定要删除数据吗？', {
				  btn: ['确认','取消'] //按钮
				}, function(){
					 var result=commonUtils.post(url,null,false);
				        if(result.flag){
				        	$("#" + tableId).bootstrapTable('refresh');
				        	formUtil.successTip("删除成功!");
				        }else{
				        	formUtil.errorTip("删除失败!");
				        }
			});
	       
	    },
	    
	    //提交表单
	    submitFormData:function(objName,url){
	    	var valid = $("#form_" + objName.id).valid();
        	if(valid){
        		$("#form_" + objName.id).find('input,textarea,select').removeAttr('disabled');
        		var formData = $('#form_' + objName.id).serializeArray();
        		console.log(formData);
        		var resultData = commonUtils.post(url,formData,false);
    	        if(resultData.flag){
    	       	 	$("#table_" + objName.id).bootstrapTable('refresh');
    	            $("#modal_" + objName.id).modal("hide");
    	            formUtil.successTip("保存成功!");
    	        }else{
    	        	formUtil.errorTip("保存失败!");
    	        }
        	}
	   },

	 //文件上传验证大小以及格式,type为1表示上传的多种类型，如果为2表示上传excel导入
	filefujianChange:function(target,type) {
	 	var fileSize = target.files[0].size;
	 	var size = fileSize / 1024;
	 	if (size > 2000) {
	 		formUtil.errorTip("附件不能大于2M");
	 		target.value = "";
	 		return false;
	 	}
	 	var name = target.value;
	 	var fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
	 	if(type==1){
	 		if (fileName != "dox" && fileName != "docx" && fileName != "pdf"&& fileName != "xls" && fileName != "xlsx") {
	 			formUtil.errorTip("请选择图片格式文件上传(dox,docx,pdf,xls,xlsx等)！");
	 			target.value = "";
	 			return false;
	 		}
	 	}else{
	 		if (fileName != "xls" && fileName != "xlsx") {
	 			formUtil.errorTip("请选择图片格式文件上传(xls,xlsx等)！");
	 			target.value = "";
	 			return false;
	 		}
	 	} 	
	 },
	//上传文件
	 uploadFile:function(uploadId,uploadUrl,allowedFileExtensions){	
			$("#"+uploadId+"").fileinput({
				language : 'zh',
				autoReplace : true,
				uploadUrl : uploadUrl,
				uploadAsync : true,//默认异步上传
				maxFileCount : 1,
				allowedFileExtensions : allowedFileExtensions=1? [ "doc", "docx", "pdf", "xls", "xlsx" ] : [ "xls", "xlsx" ],  
				browseClass : "btn btn-primary", //按钮样式 
				enctype : 'multipart/form-data',
				previewFileIcon : "<i class='glyphicon glyphicon-king'></i>",
			});
	 }
}
$.fn.populateForm = function (data) {
    return this.each(function () {
        var formElem, name;
        if (data == null) {
            this.reset();
            return;
        }
        for (var i = 0; i < this.length; i++) {
            formElem = this.elements[i];
            //checkbox的name可能是name[]数组形式
            name = (formElem.type == "checkbox") ? formElem.name.replace(/(.+)\[\]$/, "$1") : formElem.name;
            if (data[name] == undefined) continue;
            switch (formElem.type) {
                case "checkbox":
                    if (data[name] == "") {
                        formElem.checked = false;
                    } else {
                        //数组查找元素
                        if (data[name].indexOf(formElem.value) > -1) {
                            formElem.checked = true;
                        } else {
                            formElem.checked = false;
                        }
                    }
                    break;
                case "radio":
                    if (data[name] == "") {
                        formElem.checked = false;
                    } else if (formElem.value == data[name]) {
                        formElem.checked = true;
                    }
                    break;
                case "button":
                    break;
                default:
                    formElem.value = data[name];
            }
        }
    });
};