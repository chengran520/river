var bootstrapTable = {
		columns:[],
		queryParams:{},
		bootstrapTableUtil: function (objName,dataParams) {
	        $("#" + dataParams.id).bootstrapTable('destroy');
	        $("#" + dataParams.id).bootstrapTable({
	            url: dataParams.url,
	            method: 'GET', //是否显示行间隔色
	            height: dataParams.height,
	            striped: true,//是否显示行间隔色
	            sortable: true,//是否启用排序
	            sortOrder: "asc", //排序方式
	            sortName:'', 
	            cache: false,//是否使用缓存
	            showRefresh: false,//显示刷新按钮
	            showToggle: false, //切换显示样式
	            cardView: false, //默认显示详细视图
	            search: false,//是否显示搜索
	            editable:dataParams.editable ? true: false,//开启编辑模式
	            pagination: dataParams.pagination ? false: true,//是否显示分页
	            showPaginationSwitch:dataParams.pagination ? false: true, //显示分页切换按钮  
	            clickToSelect: true, //是否启用点击选中行
	            minimumCountColumns: 2,//最少要显示的列数
	            showColumns: false,//显示隐藏列
	            undefinedText: '-&nbsp-',//cell没有值时显示
	            sidePagination: dataParams.pagination ? "client" : "server",//分页方式：client客户端分页，server服务端分页
	            pageSize: 20,//每页的记录行数
	            pageNumber: 1,  //初始化加载第1页，默认第1页
	            pageList: "[20,50,100,300]",//可供选择的每页的行数
	            paginationFirstText: "首页",
	            paginationPreText: "上一页",
	            paginationNextText: "下一页",
	            paginationLastText: "末页",
	            iconSize: 'pager', //分页器class
	            toolbar: "#" + dataParams.id + "_toolbar",  //工具按钮用哪个容器
	            showExport: dataParams.showExport ? false: true,
	            exportDataType: 'all',
	            exportTypes: ['excel'],  //导出文件类型
	            exportOptions: {
	                ignoreColumn: [0, 5],  //忽略某一列的索引
	                fileName: dataParams.fileName,  //文件名称设置
	                worksheetName: dataParams.fileName,  //表格工作区名称
	                tableName: dataParams.fileName,
	                excelstyles: ['background-color', 'color', 'font-size', 'font-weight'],
	            },
	            columns: bootstrapTable.columns,
	            queryParams: function (params) {
	            	bootstrapTable.queryParams["limit"] = params.limit;//页面大小
	            	bootstrapTable.queryParams["sortName"] = this.sortName;
	            	bootstrapTable.queryParams["sortOrder"] = this.sortOrder;
	            	bootstrapTable.queryParams["pageindex"] =this.pageNumber;//当前页码
	            	return bootstrapTable.queryParams;
	            },
	            responseHandler: function (data) {
	            	if(dataParams.pagination){
	            		return data.rows;
	            	}
	            	return {
	                    "total": data.total,//总页数
	                    "rows": data.rows   //数据
	                 };
	            },
	            onLoadSuccess: function (res) { //加载成功时
	                if (typeof objName.onLoadSuccess === "function") {
	            		objName.onLoadSuccess(res);
					}
	            },
	            onLoadError: function (statusCode) {
	                return "加载失败了"
	            },
	            formatLoadingMessage: function () { //正在加载
	                return "拼命加载中...";
	            },
	            formatNoMatches: function () {  //没有匹配的结果
	                return '无符合条件的记录';
	            },
	            onClickRow: function (row, $element, field) {
	            	  $('.info').removeClass('info');//移除class
	            	  $($element).addClass('info');//添加class
	            	if (typeof objName.onClickRow === "function") {
	            		objName.onClickRow(row, $element, field);
					}
	            },
	            onClickCell: function (field, value, row, $element) {
	            	if (typeof objName.onClickCell === "function") {
	            		objName.onClickCell(row, $element, field);
					}
	            }
	        });
	    },
	    
	    //清空查询参数
	    clearParams:function(){
	    	 for(var key in bootstrapTable.queryParams){
	    		 delete bootstrapTable.queryParams[key];
	         }
	    },
}
