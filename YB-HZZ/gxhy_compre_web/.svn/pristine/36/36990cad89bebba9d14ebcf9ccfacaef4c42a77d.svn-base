//
layui.config({
  base: 'compre/js/' //假设这是你存放拓展模块的根目录
});
layui.define(['jquery','compreGis'],function(exports){
	var $ = layui.$,
	compreGis = layui.compreGis;
	var p = $(window).height();
//	$("#layui-compre-div-firt").height(p);
	compreGis.initMap();
	compreGis.initLay();
	compreGis.addvcdArea()
	//加载地图行政区面
	compreGis.handData();
	//加载河流相关数据
	compreGis.initData('');
	//加载地图河流线
	compreGis.riverData();
	exports('',function(){});
});

