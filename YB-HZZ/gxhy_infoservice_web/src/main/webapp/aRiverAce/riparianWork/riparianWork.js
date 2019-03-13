layui.config({
    base: WEB_ROOT+'/common/util/'
});
layui.use('tableUtil', function() {
    var budgetLineTable=layui.budgetLineTable,
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
    console.log("表格"+h);
    table.render({
        elem: '#gradeTable'
        ,id:'gradeTable'
        ,cols: [[ //标题栏
            {field: 'num', title: '序号', width: '5%', sort: true,align:'center'}
            ,{field: 'riverNm', title: '河段名称', width: '10%',align:'center'}
            ,{field: 'addvnm', title: '行政区名称', width: '18%',align:'center'}
            ,{field: 'riverUnit', title: '治水工程负责单位', width: '15%',align:'center'}
            ,{field: 'creteTm', title: '工程启动时间', width: '18%',align:'center'}
            ,{field: 'ReportPersonNm', title: '工程负责人', width: '10%',align:'center'}
            ,{field: 'count', title: '工程投资资金', width: '10%',align:'center'}
            ,{field: 'repeat', title: '操作', width:'10%', sort: true,align:'center',toolbar: '#barDemo'}
        ]]
        ,data:[
            {"num":1,"ReportPersonNm":'王艳玲',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":2,"ReportPersonNm":'温馨',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":3,"ReportPersonNm":'吴兴华',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":4,"ReportPersonNm":'陈明安',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":5,"ReportPersonNm":'温华森',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":6,"ReportPersonNm":'何林',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":7,"ReportPersonNm":'温世明',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":8,"ReportPersonNm":'许菊良',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":9,"ReportPersonNm":'唐彦',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":10,"ReportPersonNm":'陈宇静',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":11,"ReportPersonNm":'陈鸿滨',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":12,"ReportPersonNm":'胡建平',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'},
            {"num":13,"ReportPersonNm":'陈方煌',"addvnm":'筠连县双河镇',"riverNm":"长宁河","count":5,"creteTm":'2018-03-31','riverUnit':'筠连县双河镇'}
        ]
        ,page: true //开启分页
        ,limit:20 //默认十条数据一页
        ,limits:[20,40,60,80,100] //数据分页条
        ,loading:true
        ,height:h
    });
    exports('budgetLineTable',function(){});
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
    exports('toolGrade',function(){});
});