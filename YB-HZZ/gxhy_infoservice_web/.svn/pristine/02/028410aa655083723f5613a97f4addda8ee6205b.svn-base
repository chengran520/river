layui.config({
	  base: WEB_ROOT+'/common/util/' 
});
layui.use('tableUtil', function() {
	var tableGrade=layui.tableGrade,
	gradeReload=layui.gradeReload,
	tableUtil=layui.tableUtil,
	toolGrade=layui.toolGrade;
	//初始化时间
	tableUtil.initTm("startTm","endTm",'date');
});
//表格
layui.define(['jquery','table','tableUtil'],function(exports){
	 var $ = layui.$,
	 table=layui.table,
	 tableUtil= layui.tableUtil;
	 var h=tableUtil.initHeight("gradeForm");
	 table.render({
        elem: '#gradeTable'
        ,id:'gradeTable'
        ,cols: [[ //标题栏
                  {field: 'num', title: '序号', width: '6%', sort: true,align:'center'}
                  ,{field: 'code', title: '事件编码', width: '10%',align:'center'}
                  ,{field: 'source', title: '事件来源', width: '15%',align:'center'}
                  ,{field: 'type', title: '事件类型', width: '10%',align:'center'}
                  ,{field: 'username', title: '上报人员', width: '15%',align:'center'}
                  ,{field: 'creteTm', title: '上报时间', width: '15%',align:'center'}
                  ,{field: 'address', title: '事件地点', width: '15%',align:'center'}
              ,{field: 'repeat', title: '操作', width:'10%', sort: true,align:'center',toolbar: '#barDemo'}
        ]]
	 ,data:[
			{"num":1,"code":'SJ000001',"source":'民众举报',"type":"河道排污","username":"王艳华","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"},
			{"num":2,"code":'SJ000002',"source":'巡检发现',"type":"河长巡河","username":"温馨","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"},
			{"num":3,"code":'SJ000003',"source":'民众举报',"type":"非法采砂","username":"吴兴华","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"},
			{"num":4,"code":'SJ000004',"source":'民众举报',"type":"公众举报","username":"陈民安","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"},
			{"num":5,"code":'SJ000005',"source":'民众举报',"type":"河道排污","username":"温华森","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"},
			{"num":6,"code":'SJ000006',"source":'民众举报',"type":"河岸垃圾","username":"何林","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"},
			{"num":7,"code":'SJ000007',"source":'巡检发现',"type":"河长巡河","username":"温世明","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"},   			               
			{"num":8,"code":'SJ000008',"source":'民众举报',"type":"涉水违建","username":"许菊良","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"}, 
			{"num":9,"code":'SJ000009',"source":'民众举报',"type":"河底污泥","username":"唐彦","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"}, 
			{"num":10,"code":'SJ000010',"source":'民众举报',"type":"其它","username":"陈宇静","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"}, 
			{"num":11,"code":'SJ000011',"source":'民众举报',"type":"河道侵占","username":"陈宏斌","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"}, 
			{"num":12,"code":'SJ000012',"source":'巡检发现',"type":"河水颜色","username":"胡建平","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"}, 
			{"num":13,"code":'SJ000013',"source":'巡检发现',"type":"涉水违建","username":"陈方煌","creteTm":'2018-03-31',"address":"四川省宜宾市",'repeat':"<a href='#'>处理</a>/<a href='#'>转交</a>"}
          ]
	    ,page: true //开启分页
	    ,limit:10 //默认十条数据一页
	    ,limits:[10,20,30,40,50] //数据分页条
	    ,loading:true
	    ,height:h
    });
  exports('tableGrade',function(){});
});	

layui.define(['jquery','table'],function(exports){
	 var $ = layui.$,
	 table=layui.table;
	//监听按钮点击事件
	 $('#gradeForm .layui-btn').on('click', function(){
	    var othis = $(this), method = othis.data('method');
	    riverLakeInfo[method] ? riverLakeInfo[method].call(this, othis) : '';
	   
	 });
	 //静态不可用
	 var riverLakeInfo={
		 reloadGrade:function(){
			 var startTm=$("#startTm").val();
			 var endTm=$("#endTm").val();
		     var keyWord=$("#keyWord").val();
		     console.log(keyWord);
			 table.reload("gradeTable",{
			   	 page: {
			   	      curr: 1
			   	   }
		        ,where:{keyWord:keyWord,startTm:startTm,endTm:endTm}
		    });
		 }
	 }
	 exports('gradeReload',riverLakeInfo);
});

//监听行工具事件
layui.define('table',function(exports){
	  var table=layui.table;
	  table.on('tool(gradeTable)', function(obj){
		  console.log(obj);
	    if(obj.event === 'handleGrade'){
	    	layer.open({
	    		  type: 2,
	    		  skin:"layui-layer-lan",
	    		  title: '事件处理',
	    		  area: ['60%', '85%'],
	    		  content: WEB_ROOT+'/eventCenter/handleEvent.html'  
	    		});
	     } 
	  });

	exports('toolGrade',function(){});
});