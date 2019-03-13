$(function(){
	var result = document.getElementById("result"); 
	var input = document.getElementById("file_input"); 
	 
	if(typeof FileReader==='undefined'){ 
	    result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
	    input.setAttribute('disabled','disabled'); 
	}else{ 
	    input.addEventListener('change',readFile,false); 
	} 
	var count=1;

	function readFile(){ 
	    var file = this.files[0]; 
	    if(!/image\/\w+/.test(file.type)){ 
	        alert("文件必须为图片！"); 
	        return false; 
	    } 
	    var reader = new FileReader(); 
	    reader.readAsDataURL(file); 
	    reader.onload = function(e){ 
	    	if(count>3){
	    		layer.alert('最多只能上传3张图片!', {
	      			 icon: 6,
	      			 title: "提示"
      		    });	
	    		return false; 
	    	}
	    	src=this.result;
	    	var workflow=$("#workflowId").val();
	    	var busineId=$("#busineI").val();
	    	$.ajax({
    	        type: "POST",
    	        url:WEB_ROOT+ "/busine/accept/doUpload",
    	        data: {"busineId":busineId,"imgBase64Data":src,"workflowId":workflow},
    	        dataType: "json",
    	        success: function(data) { 	
      	        	$("#workflowId").val(data.data.workFlowId);
    		    	var html="<img src="+src+" alt=''  style='width:60px;height:60px;margin-right:10px;border:1px solid #eee;'    class='zoomify'/>";
    		        $("#imgI").before(html);
    		        count++;
    		        $('.zoomify').zoomify();
    	         }
	    	});   	
	     } 
	 } 
	 
})
 function F_Open_dialog() { 
        document.getElementById("file_input").click(); 
   }