var easyui_datagrid_util = {
		dialog_width:800,
		dialog_height:400,
		//这些是datagird的一些基本配置 都有默认值 需要修改的自行修改
		data:null,
		rownumbers:true,
		singleSelect:false,
		method:'get',
		pagination:true,
		border:false,
		pageSize:15,
		pagePosition:'bottom',
		fit:true,
		fitColumns:true,
		striped:true,
		nowrap:false,
		columns:[],
		pageList:[10,15,20,50,100],
		myview:$.extend({},$.fn.datagrid.defaults.view,{
		    onAfterRender:function(target){
		        $.fn.datagrid.defaults.view.onAfterRender.call(this,target);
		        var opts = $(target).datagrid('options');
		        var vc = $(target).datagrid('getPanel').children('div.datagrid-view');
		        vc.children('div.datagrid-empty').remove();
		        if (!$(target).datagrid('getRows').length){
		            var d = $('<div class="tip_none"></div>').html(opts.emptyMsg || '没有数据').appendTo(vc);
		            d.css({
		                position:'absolute', 
		                left:0,
		                top:50,
		                width:'100%',
		                textAlign:'center'
		            });
		        }else{
		        	$('.tip_none').remove(); 
		        }
		    }
		}), 
		loadError:function(tableName){
			var opts = $('#'+tableName).datagrid('options');
	        var vc = $('#'+tableName).datagrid('getPanel').children('div.datagrid-view');
	        vc.children('div.datagrid-empty').remove();
	        if (!$('#'+tableName).datagrid('getRows').length){  
	            var d = $('<div class="tip_error"></div>').html(opts.errorMsg || '信息加载异常').appendTo(vc);
	            d.css({
	                position:'absolute',
	                left:0,
	                top:50,
	                width:'100%', 
	                textAlign:'center'
	            });
	        }
		},
		//传入datagrid所在table的ID，初始化方法的url，以及所调用JS的类名，方便修改loadSuccess方法完成自己特有的一些设置
		//loadSuccess()  如果不需要执行特殊处理，请写个空方法防止报错
		//Sample:easyui_datagrid_util.create_datagrid("cms_folder_dg",WEB_ROOT+'base/cms/cmsFolder/searchFolder',cmsFolder);
		//options={rownumbers:true,...}
		create_datagrid_options:function(tableName,url,className,options){
			if (options == null) {
				$('#'+tableName).datagrid({
					rownumbers:this.rownumbers,
					singleSelect:this.singleSelect,
					url:url,
					queryParams:this.data,
					method:this.method,
					toolbar:'#'+tableName+'_toolbar', //工具栏的ID应该是datagridID+'_toolbar'
					pagination:this.pagination,
					pageList:this.pageList,
					border:this.border,
					pageSize:this.pageSize,
					pagePosition:this.pagePosition,
					fit:this.fit,
					fitColumns:this.fitColumns, 
					striped:this.striped,
					nowrap:this.nowrap,
					loadFilter:this.dataLoadFilter,
					onLoadSuccess:function(data){
						if (typeof className.loadSuccess === "function") {
							className.loadSuccess(data);
						}
						$('.tip_error').remove();
					},
					onClickRow:function(rowIndex,rowData){
						if (typeof className.onClickRowHandle === "function") {
							className.onClickRowHandle(rowIndex,rowData);
						}
					},
					onLoadError:function(){ 
						easyui_datagrid_util.loadError(tableName); 
					},
					view: easyui_datagrid_util.myview, 
		            emptyMsg: '没有结果数据' 
				});
			}else{
				if(options.columns!=null){
					$('#'+tableName).datagrid({
						rownumbers:options.rownumbers == null ?this.rownumbers:options.rownumbers,
						singleSelect:options.singleSelect == null ?this.singleSelect:options.singleSelect,
						url:url,
						queryParams:options.data,
						method:options.method == null ?this.method:options.method,
						toolbar:options.toolbarId == null ?'#'+tableName+'_toolbar':options.toolbarId, //工具栏的ID应该是datagridID+'_toolbar'
						pagination:options.pagination == null ? this.pagination:options.pagination,
						pageList:this.pageList,
						border:options.border == null ? this.border:options.border,
						pageSize:options.pageSize  == null ? this.pageSize:options.pageSize,
						pagePosition:options.pagePosition == null ? this.pagePosition:options.pagePosition,
						fit:options.fit == null ? this.fit:options.fit,
						fitColumns:options.fitColumns == null ? this.fitColumns:options.fitColumns, 
						columns:options.columns,
						striped:options.striped == null ? this.striped:options.striped,
						nowrap:options.nowrap == null ? this.nowrap:options.nowrap,
						loadFilter:this.dataLoadFilter,
						onLoadSuccess:function(data){
							if (typeof className.loadSuccess === "function") {
								className.loadSuccess(data);
							}
							$('.tip_error').remove();
						},
						onClickRow:function(rowIndex,rowData){
							if (typeof className.onClickRowHandle === "function") {
								className.onClickRowHandle(rowIndex,rowData);
							}
						},
						onLoadError:function(){ 
							easyui_datagrid_util.loadError(tableName); 
						},
						view: easyui_datagrid_util.myview, 
			            emptyMsg: '没有结果数据' 
					});
					return ;
				}
				$('#'+tableName).datagrid({
					rownumbers:options.rownumbers == null ?this.rownumbers:options.rownumbers,
					singleSelect:options.singleSelect == null ?this.singleSelect:options.singleSelect,
					url:url,
					queryParams:options.data,
					method:options.method == null ?this.method:options.method,
					toolbar:options.toolbarId == null ?'#'+tableName+'_toolbar':options.toolbarId, //工具栏的ID应该是datagridID+'_toolbar'
					pagination:options.pagination == null ? this.pagination:options.pagination,
					pageList:this.pageList,
					border:options.border == null ? this.border:options.border,
					pageSize:options.pageSize  == null ? this.pageSize:options.pageSize,
					pagePosition:options.pagePosition == null ? this.pagePosition:options.pagePosition,
					fit:options.fit == null ? this.fit:options.fit,
					fitColumns:options.fitColumns == null ? this.fitColumns:options.fitColumns, 
					striped:options.striped == null ? this.striped:options.striped,
					nowrap:options.nowrap == null ? this.nowrap:options.nowrap,
					loadFilter:this.dataLoadFilter,
					onLoadSuccess:function(data){
						if (typeof className.loadSuccess === "function") {
							className.loadSuccess(data);
						}
						$('.tip_error').remove();
					},
					onClickRow:function(rowIndex,rowData){
						if (typeof className.onClickRowHandle === "function") {
							className.onClickRowHandle(rowIndex,rowData);
						}
					},
					onLoadError:function(){ 
						easyui_datagrid_util.loadError(tableName); 
					},
					view: easyui_datagrid_util.myview, 
		            emptyMsg: '没有结果数据' 
				});
			}
			
		},	
		create_datagrid:function(tableName,url,className){
			$('#'+tableName).datagrid({
				rownumbers:this.rownumbers,
				singleSelect:this.singleSelect,
				url:url,
				queryParams:this.data,
				method:this.method,
				toolbar:'#'+tableName+'_toolbar', //工具栏的ID应该是datagridID+'_toolbar'
				pagination:this.pagination,
				pageList:this.pageList,
				border:this.border,
				pageSize:this.pageSize,
				pagePosition:this.pagePosition,
				fit:this.fit,
				fitColumns:this.fitColumns, 
				striped:this.striped,
				nowrap:this.nowrap,
				loadFilter:this.dataLoadFilter,
				onLoadSuccess:function(data){
					if (typeof className.loadSuccess === "function") {
						className.loadSuccess(data);
					}
					$('.tip_error').remove();
					
				},
				 
				onLoadError:function(){ 
					easyui_datagrid_util.loadError(tableName); 
				},
				view: easyui_datagrid_util.myview, 
	            emptyMsg: '没有结果数据' 
			});
		},
		create_dataDyColumnsgrid:function(tableName,url,className,columns,loadSuccess){
			$('#'+tableName).datagrid({
				rownumbers:this.rownumbers,
				singleSelect:this.singleSelect,
				url:url,
				onClickRow:function(rowIndex,rowData){
					className.onClickRowHandle(rowIndex,rowData);
				},
				columns : columns,
				queryParams:this.data,
				method:this.method,
				toolbar:'#'+tableName+'_toolbar', //工具栏的ID应该是datagridID+'_toolbar'
				pagination:this.pagination,
				pageList:this.pageList,
				border:this.border,
				pageSize:this.pageSize,
				pagePosition:this.pagePosition,
				fit:this.fit,
				fitColumns:this.fitColumns, 
				striped:this.striped,
				nowrap:this.nowrap,
				loadFilter:this.dataLoadFilter,
				onLoadSuccess:function(data){
					if(typeof loadSuccess == "function") 
					loadSuccess(data);
					$('.tip_error').remove();
				},
				onLoadError:function(){ 
					easyui_datagrid_util.loadError(tableName); 
				},
				view: easyui_datagrid_util.myview, 
	            emptyMsg: '没有结果数据' 
			});
		},
		create_dataDyAndFrozenColumnsGrid:function(tableName,url,className,param,frozenColumns,columns,options){
			$('#'+tableName).datagrid({
				rownumbers:this.rownumbers,
				singleSelect:options.singleSelect == null ?this.singleSelect:options.singleSelect,
				url:url,
				onClickRow:function(rowIndex,rowData){
					className.onClickRowHandle(rowIndex,rowData);
				},
				frozenColumns:frozenColumns,
				columns : columns,
				queryParams:param,
				method:this.method,
				toolbar:'#'+tableName+'_toolbar', //工具栏的ID应该是datagridID+'_toolbar'
				pagination:options.pagination == null ? this.pagination:options.pagination,
				pageList:this.pageList,
				border:this.border,
				pageSize:options.pageSize  == null ? this.pageSize:options.pageSize,
				pagePosition:this.pagePosition,
				fit:this.fit,
				fitColumns:this.fitColumns, 
				striped:this.striped,
				nowrap:this.nowrap,
				loadFilter:this.dataLoadFilter,
				onLoadSuccess:function(data){
					if (typeof className.loadSuccess === "function") {
						className.loadSuccess(data);
					}
				},
				onLoadError:function(){ 
					easyui_datagrid_util.loadError(tableName); 
				},
				view: easyui_datagrid_util.myview, 
	            emptyMsg: '没有结果数据' 
			});
		},
		dataLoadFilter:function(data){
			data.rows = data.data;
			return data;
		},
		//多选删除，传入所删除行的ID列表，datagridId,删除所调用的URL(可以删除单行具体实现方法看自己后台的方法所定)
		deleteRows:function(ids,tableName,url,method){
			//注意此处，callback方法只能接受无参函数
			win.confirmx('您确认要删除吗？',function(){easyui_datagrid_util.deleteRowsTrue(ids,tableName,url,method||"POST")});
		}, 
		deleteRowsTrue:function(ids,tableName,url,method){
			$.ajax({
			    type: method||'POST',
			    url: url,
			    data: {ids:ids} ,
			    dataType: 'JSON',
			    success: function(data){
			    	ShowToast(data.message,'提示信息','success');
			    	$("#"+tableName).datagrid("reload");
				}
			});
		},
		
		//弹出添加页面只适合用dialog弹出，传入dialogId,datagirdId,弹出页面的URL以及调用该方法的类方便调用不同的页面加载调用的方法，以及确定后所执行的方法
		//insertAddDate() 如果没有该方法，请写个空方法防止报错 
		//addDate() 同上
		showAddDialog:function(dialogName,tableName,url,className){ 
			win.openDialogHtml(dialogName,url,easyui_datagrid_util.dialog_width+"px",easyui_datagrid_util.dialog_height+"px",className.insertAddDate,className.addDate);
		},
		
		
		showNewAddDialog:function(dialogName,tableName,url,className,width,height){ 
			win.openDialogHtml(dialogName,url,width+"px",height+"px",className.insertAddDate,className.addDate);
		},
		
		showNewUpdateDialog:function(dialogName,tableName,url,className,width,height){
			var row = $('#'+tableName).datagrid('getSelections');
			if(row.length == 0){
				ShowToast('请选择编辑项目','提示信息','info');
				return false;
			}
			if(row.length > 1){
				ShowToast('请选择一条记录再编辑','提示信息','info');
				return false;
			}
			win.openDialogHtml(dialogName,url,width+"px",height+"px",function(){className.insertDate(row[0])},className.updateDate);
		},
		//填出编辑页面也只适用于dialog填出，参数传入请参照showAddDialog 基本一致
		//insertDate(data) 如果没有该方法，请写个空方法防止报错
		//updateDate() 同上
		showUpdateDialog:function(dialogName,tableName,url,className){
			var row = $('#'+tableName).datagrid('getSelections');
			if(row.length == 0){
				ShowToast('请选择编辑项目','提示信息','info');
				return false;
			}
			if(row.length > 1){
				ShowToast('请选择一条记录再编辑','提示信息','info');
				return false;
			}
			win.openDialogHtml(dialogName,url,easyui_datagrid_util.dialog_width+"px",easyui_datagrid_util.dialog_height+"px",function(){className.insertDate(row[0])},className.updateDate);
		},
		showInfoDialog:function(dialogName,tableName,url,className,index){
			//默认使用详情页
			var oldExcution = true;
			win.openDialogView(dialogName,url,easyui_datagrid_util.dialog_width+"px",easyui_datagrid_util.dialog_height+"px",function(){className.getInfoData(index)},oldExcution);
		}
}


