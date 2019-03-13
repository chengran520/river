var basis={
}

$(function(){
	$(".checkStandard,.checkContent").click(function(e){
		var id = $(e.target).attr('class'); 
		var a=$(this).parent().next();
		var str=a.children(".checkNm").children("font").text();
		var html="";
		switch(str){
			case "日常巡查":
			if(id=="checkStandard"){
				 html="未开展河湖巡查的，扣20分；没有巡查记录或记录不全的，每个扣1分；发现问题不及时上报或者重大问题未及时发现的，每件扣2分；";	
			}else{
				html="组织开展河湖巡查，对发现的河道不洁，护岸坍塌、涉河违章和污水直排等问题及时反映县河长办。";
			}
		   
		    break;
			case "事件处理率":
			if(id=="checkStandard"){
				html="事件处理率*15分；";		
			}else{
				html="加强河湖管护，对辖区内出现的事件和上级督办的事件要及时进行。";
			}
			
			break;
			case "水质变化":
			if(id=="checkStandard"){
				html="水库、山塘水质全部达标得15分；有一个不达标扣2分；有水质好转上升加2分；有不达标水质又恶化整个项得0分。";
			}else{
				html="对于区域内的水质情况进行评估。";
			}
		    
			break;
			case "公众投诉":
			if(id=="checkStandard"){
			    html="每起投诉事件扣2分，如果事件处理的能够让群众满意，此事件可以不扣分。";
			}else{
				html="辖区内河湖管护情况以及群众满意度程度。";
			}
		
			break;
			case "宣传教育工作":
			if(id=="checkStandard"){
				html="宣传工作未到位，检查中每发现一个问题，扣2分。";
			}else{
				html="设立河湖保护宣传栏、河道沿线设有河道保护标志、标语等多种宣传方式，营造良好氛围；开展学生防溺水安全教育，开展'河长制进校园'主题活动。";
			}

		    break;
			case "奖励分":
			if(id=="checkStandard"){
				 html="工作有创新、有亮点，经验和做法在省、市县得到肯定和推广的，分别加5分、3分、2分。";
			}else{
				html="工作有创新，成效显著。";
			}
		   
		    break;
			case "领导综合评价":
			if(id=="checkStandard"){
				 html="对管辖范围内的各乡镇河长的工作评价；协助上级河长和部门开展辖区内河湖热点、难点问题调研，并配合开展相关问题集中整治。";
			}else{
				html="工作有创新，成效显著。";
			}		   
			break;
		}
		a.children(".check-content").children().html(html);
		$(this).addClass("active");      
		$(this).siblings().removeClass("active");   
	});
	$(".checkNm span").click(function(){
		var text=$(this).parent().children("font").text();
		  layer.open({
	        type: 1
	        ,title: text
	        ,skin:"layui-layer-lan"
	        ,content: $("#basisModel")
	        ,btn: ['确定','取消']
		     ,area : ['500px','auto'] 
	        ,shade: 0 //不显示遮罩
	        ,yes: function(){
	           layer.closeAll();
	        }
	      });
	});
});