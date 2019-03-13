//删除行事件
layui.define(['table','upload','laydate'],function(exports){
	 var $ = layui.jquery,
     upload = layui.upload,
     laydate=layui.laydate,
	 table=layui.table;
	 var tableUtil={
			 //删除数据行/l
			 /*deleteRow:function(option){				 
				 layer.confirm('确认删除'+option.length+'条数据吗？', {icon: 3, title:'提示'},  function(index){
			          $.ajax({
			        	  url:option.url,
			              type:'post',
			              dataType:'json',
			              data:{
			                  ids:option.ids,
			                  index:option.num
			              },
			              success: function(result){
			            	  layer.msg("刪除信息成功", { icon: 1});
			            	  layui.table.reload(""+option.tableId+""); //更新成功刷新当前数据表格 分页默认为当前页
			              },
			              error:function (res) {
			                  layer.alert('网络错误!');
			              }
			          });
			      }); 
			   },*/
			   //文件上传
			   uploadFile:function(option){
				   upload.render({
				       elem: option.elem
				       ,url:  option.url
				       ,auto: false
				       ,accept: 'file' 
				       ,exts: 'xls|xlsx' 
				       ,bindAction:option.bindAction
				       ,before: function(obj){ 
				           this.layerIndex = layer.msg('正在上传中...', {icon: 16,shade: [0.5, '#f5f5f5'],scrollbar: false,offset: 'auto', time:1000}) ;
				         }
				        ,done: function(res, index, upload){
				             if(res.data>0){ 
				            	layui.table.reload(""+option.tableId+""); //更新成功刷新当前数据表格 分页默认为当前页
				        	    layer.msg("导入信息成功", {icon: 1});
				        	    layer.close(this.layerIndex); 
				        	   setTimeout(function(){
				        		   $(".layui-upload").hide();		
				        		   $(".layui-layer-shade").css("z-index","0");
				        	   }, 2000); 	   
				           }
				         }
				         ,error: function(index, upload){
				        	 layer.close(this.layerIndex); 
				        	 layer.msg("网络错误!", {icon: 2});
				         }
				     });
			   },
			   //打开弹出框
			   openFrame:function(option){
				   layer.open ({
			    	   title:option.title,
			    	   type: 1,
			    	   offset: option.offset,
			    	   id: option.id,
			    	   skin: 'layui-layer-demo', //样式类名
			    	   closeBtn:1, //不显示关闭按钮
			    	   anim: 0,
			    	   area: ['420px', '220px'], //宽高
			    	   shadeClose: true, //开启遮罩关闭
			    	   content : option.content,
			    	   success : function (layero,index) { 
			    		   $(".layui-layer-demo").show();
			    		   var a = layero.find('.p1 a');
			    		   a.attr("href",option.href);   
		               }		               
			       });
			   },
			   /*//数据重载
			   reloadTable:function (option) {
				     table.reload(option.id,{
				    	 page: {
				    	      curr: 1
				    	   }
				         ,where:{keyWord:option.value}
				     });
				  },
			  //表格初始化
			  initTable:function(option){
					var tableOptions = {
					        url: option.url
					        ,method: "get" //方式
					        ,id:option.id
					        ,page: true //开启分页
						    ,limit:option.limit == null? 20:option.limit //默认十条数据一页
						    ,limits:option.limits == null? [20,40,60,80,100]:option.limits //数据分页条
				     	    ,loading:true
				     	    ,height :option.height
				     	     
					    };
					table.init(option.id, tableOptions);	
			  },
			 initStyle:function(id){
				 var p = $(window).height();
				 var h=$(".header").height();
				 $(".layui-body").height(p-h);
				 var h1=$(".layui-tab-title").height();
				 var h2=$("#"+id+"").height();
				 var h=p-h-h1-h2-60;
				 return h;
			  },
			  initHeight:function(id){
				  var p = $(window).height();
					 var h=$(".header").height();
					 $(".layui-body").height(p-h);
					 var h1=$("#"+id+"").height();
					 return p-h-h1-20;
			  },
			  initTm:function(startId,endId,type){
				 var nowTime = new Date().valueOf();
				 var start = laydate.render({ //投票开始
	                elem: '#'+startId,
	                type: type,
	                min:nowTime,
	                done:function(value,date){
	                    endMax = end.config.max;
	                    end.config.min = date;
	                    end.config.min.month = date.month -1;
	                }
	             });
		         var end = laydate.render({ //投票结束
		               elem: '#'+endId,
		               type: type,
		               min : nowTime,
		               done:function(value,date){
		                   if($.trim(value) == ''){
		                       var curDate = new Date();
		                       date = {'date': curDate.getDate(), 'month': curDate.getMonth()+1, 'year': curDate.getFullYear()};
		                   }
		                   start.config.max = date;
		                   start.config.max.month = date.month -1;
		               }
		            });
			  },
			  //按钮的显示和隐藏
			  showBtns:function(){
				  var data=$("#conter-div-info").attr("data-per");
					 $('.layui-input-inline button').parent().hide(); 	
					 if(data.indexOf(",")!=-1){
						 var array=data.split(",");
						 $.each(array,function(item,value){	
							 $('button[class="layui-btn btn-'+value+'"]').parent().show(); 			
						 });
					 }else{
						 $('button[class="layui-btn btn-'+data+'"]').parent().show(); 
					 } 
			  },
			  layerAlert:function(val,mark){
				  if(val>mark){
					  layer.msg("该分数超过上限！", { icon: 5});
				  }
			  }*/
	     } 
	exports('tableUtil',tableUtil);
}); 