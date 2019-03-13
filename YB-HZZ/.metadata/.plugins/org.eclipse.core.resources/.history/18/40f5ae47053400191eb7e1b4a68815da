<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/busine/css/busine.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/public.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/busine/css/flowChart.css" rel="stylesheet">
<link  href="http://cache.amap.com/lbs/static/main1119.css" rel="stylesheet"/>
<link  href="<%=request.getContextPath()%>/css/bootstrapStyle.css"  rel="stylesheet">
<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.0&plugin=AMap.Geolocation,AMap.Geocoder&key=832085f1e357efae7eb7e34449ac1a36"></script>
<script src="http://webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
<script src="<%=request.getContextPath()%>/busine/busine.js"></script>
<script src="<%=request.getContextPath()%>/busine/ztreeBusine.js"></script>
<%-- <script src="<%=request.getContextPath()%>/busine/file.js"></script> --%>
<script  src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>
<script src="<%=request.getContextPath()%>/common/js/contentPath/db.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var userId="<%=session.getAttribute("userId")%>";
 	var state="<%=request.getParameter("state")%>";
 	var userjob="<%=session.getAttribute("userjob")%>";
 	var path = "<%=request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()%>";
 	var paramTp = "<%=request.getParameter("tp")%>";
 	var busineId="<%=request.getParameter("busineId")%>";
</script>
<div class="headerDiv" id="headerDiv" style="height:40px;">
	<div class="header-content">
		<h2 class="paramTp1">
			<i class="fa icon-th-large"></i>
			<c><a style="text-decoration: none;color:#000;" href="<%=request.getContextPath()%>/busine/busine.jsp">业务受理</a></c>
		</h2>
		
		<h2 class="paramTp2">
			<i class="fa icon-th-large"></i>
			  <c>
				<a style="text-decoration: none;" href="javascript:history.back(-1)">工作台</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>
					业务受理
			 </c>
		</h2>
	</div> 
</div>
<div style="height: 92%;overflow: hidden;">
	  <div class="count_left" >
	    <div class="circleDiv" id="untreatedBusine">
		 	<div class="cicle">
		 		<img class="cicel_img_p" src="<%=request.getContextPath() %>/common/images/bussine/dbevent.png"/>
		 		<div class="superscript"><span id="noCount">0</span></div>
		 	</div>
		 	<div class="marginDIV">待处理事件</div>
		</div> 
		<div class="circleDiv" id="handledBusine">
		 	<div class="cicle">
		 		<img class="cicel_img_p" src="<%=request.getContextPath() %>/common/images/bussine/ybevent.png"/>
		 		<div class="superscript"><span id="handleCount">0</span></div>
		 	</div>
		 	<div class="marginDIV">已处理事件</div> 
		</div>
     </div>
	 <div class="tab_right">
         	<div class="form-inline" style="margin-top:5px;">
					<div class="col-xs-2.2" style="display: inline;">
						<div class="input-group">
						  <span class="input-group-addon" >事件编号:</span>
						  <input type="text" class="form-control" id="busineId"  placeholder="请输入事件编号">
						</div>
					</div>
					<div class="col-xs-2.2" style="display: inline; ">
						<div class="input-group">
							<div class="input-group-addon">上报人:</div>
							<input id="busineUNm" type="text" class="form-control"  placeholder="请输入上报人">
						</div>
					</div>
					<div class="col-xs-2.2" style="display: inline;">
						<div class="input-group">
							<div class="input-group-addon">事件来源:</div>
							 <select class="form-control"  id="busineTypeO" style="margin-right:10px;">
						         <option selected='selected'  value=''>------请选择  ------</option>
						         <option value='hzxh'>河长巡河</option>
						         <option value='gzjb'>公众举报</option>
						         <option value='zfjg'>执法监管</option>
						     </select>
						</div>
					</div>
					<button id="queryBusine" class="btn btn-primary" style="background-color: #3699fe;border: 0px;margin-left:10px;" type="button">
					<span class="glyphicon glyphicon-search "></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshBusine"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button> 				
			</div>
			<div class="test1">	
			  <table id="patrol_busine"  style="text-overflow:ellipsis;">
					<thead>
						<tr>
				             <th field="busineId" width="25" align="center">事件编号</th>
				             <th field="busineOrigin" width="20" align="center" >来源</th>
				             <th field="busineType"  width="20" align="center">事件类型</th>
				             <th field="busineUnm"  width="20" align="center" formatter="busineEvent.formatUser">上报人员</th>
				             <th field="busineUid"  width="20" hidden="true">上报人员id</th>
				             <th field="createTm"  width="30" align="center" formatter="busineEvent.formatDate">上报时间</th>
				             <th field="busineAddress"  width="40" align="center">事件地点</th>
				             <th field="busineStatusNm"  width="10" align="center" formatter="busineEvent.formatBusineColor">事件状态</th>
				             <th field="busineStatus"  width="10" hidden="true">状态</th>
				             <th field="originId"  width="10" hidden="true">状态</th>
				             <th field="dept"  width="10" hidden="true">状态</th>
				             <th field="job"  width="10" hidden="true">状态</th>
				             <th field="lastHandleUserId"  width="10" hidden="true">上次处理人id</th>
				             <th field="status"  width="20" hidden="true" hidden="true">流程状态</th>
				             <th field="repeat" width="15" align="center"  formatter="busineEvent.formatBusineRepeat">操作</th>
						</tr>
					</thead>
				</table> 
			</div>
	</div>
	<div class="deltal_rigth">
		<div style="float: left;width: 50%;height: 100%;border-right: 1px solid #DDD;">
			<div class="deltal_div_info">事件详情</div>
			<div id="container_div">
			  <div id="leftContent" onclick="busineEvent.next()">
			  		<img id="left_img"  style='cursor:pointer;'>
			  </div>
			    <div id="rightContent">
			      	 <div class="deltal_content">
			         	<span>事件编码：</span>
			         	<span id="busineId2"></span>
			         </div>
			         <div class="deltal_content">
			         	<span>事件来源：</span>
			         	<span id="busineOri2"></span>
			         </div>
			     	 <div class="deltal_content">
			         	<span>事件类型：</span>
			         	<span id="busineTy2"></span>
			         </div>
			     	 <div class="deltal_content">
			         	<span>上报人员：</span>
			         	<span id="busineUN2"></span>
			         </div>
			     	 <div class="deltal_content">
			          	<span>上报时间：</span>
			         	<span id="createT2"></span>
			         </div>
			     	 <div class="deltal_content">
			          	<span>上报地点：</span>
			         	<span id="busineAddress2"></span>
			         </div>
			     	 <div class="deltal_content">
			          	<span>事件描述：</span>
			       	    <span id="busineDesc2"></span> 
			         </div>
			    </div>
			  </div>
		</div>	
		<div style="float: left;width: 50%;height: 100%;">
			<div class="work_div_info">事件流程</div>
			<div id="timeAxis"></div>
		</div>
	</div>
</div>
<div class="modal fade" id="busineModel"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"  style="overflow-y: hidden;">
	<div class="modal-dialog">
		<div class="modal-content" style="width:750px;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">审核</h4>
			</div>
			<div class="modal-body">
			  <div class="container-fluid">
			    <div class="row">
			      <div class="col-md-6">
			        <input type="hidden" value="" id="busineUid">
			         <input type="hidden" value="" id="busineOrgin">
			         <input type="hidden" value="" id="orginId">
			         <input type="hidden" value="" id="status">
			         <input type="hidden" value="" id="busineStatus">
			         <input type="hidden" value="" id="handleUserIdOne">
			     	 <table class="modal_tab" style="font-size: 14px;color: #000;">
			     	 	<tr>
			     	 		<td>事件编码：</td>
			     	 		<td><p id="busineIdS" style="width:100px;"></p></td>
			     	 	</tr>
			     	 	<tr>
			     	 		<td>事件来源：</td>
			     	 		<td><p id="busineOri"></p></td>
			     	 	</tr>
			     	 	<tr>
			     	 		<td>事件类型：</td>
			     	 		<td ><p id="busineTypeS"></p></td>
			     	 	</tr>
			     	 	<tr>
			     	 		<td>&nbsp;&nbsp;&nbsp;&nbsp;报告人：</td>
			     	 		<td><p id="busineUN"></p></td>
			     	 	</tr>
			     	 	<tr>
			     	 		<td>上报时间：</td>
			     	 		<td><p id="createT"></p></td>
			     	 	</tr>
			     	 	<tr>
			     	 		<td>事件地点：</td>
			     	 		<td><p id="busineAddress"></p></td>
			     	 	</tr>
			     	 	<tr>
			     	 		<td>事件描述：</td>
			     	 		<td><p id="busineDesc"></p></td>
			     	 	</tr>
			     	 	<tr>
			     	 		<td>上报图片：</td>
			     	 		<td><p id="url"></p></td>
			     	 	</tr>
			     	 	<%-- <tr id="reportImg">
			     	 		<td><p style="width:100px;padding-top:10px;">意见图片：</p></td>
			     	 		<td style="padding-top:10px;">
			     	 		     <input type="hidden" value="" id="workflowId">
			     	 		      <input type="hidden" value="" id="busineI">
			     	 		     <img id="imgI"  src="<%=request.getContextPath()%>/common/images/bussine/a11.png" style="width:60px;heigth:60px;"  onclick="F_Open_dialog();">
			     	 		     <input type="file" id="file_input"   style="display:none"/>
	     	 		             <p style="color: #666;">最多上传3张图片</p>					
			     	 		</td>
			     	    </tr> --%>
			     	 	<tr id="view">
			     	 		<td>处理意见：</td>
			     	 		<td><textarea rows="3" cols="30" id="handleView"></textarea></td>
			     	 	</tr>
			     	 	
			     	 </table>
			      </div>
			      <div class="col-md-6" style="width:330px;heigth:100px;margin-left:55%;border: 2px solid #eee; " id="container">
			      </div>
			    </div>
			      
			  </div>
			</div>
		
			<div class="modal-footer" id="foot">
				<button  class="btn btn-default btns" id="checkBusine" type="button">
				    &nbsp;处&nbsp;理
				</button>
				<button class="btn btn-default btns" id="deliverBusine" type="button">
					&nbsp;转&nbsp;交
				</button>
				<button  class="btn btn-default btns" id="invalidBusine" type="button">
				    &nbsp;无&nbsp;效
				</button>
				<!-- <button class="btn btn-default btns" id="returnBusine"  type="button">
					&nbsp;退&nbsp;回
				</button> -->
			</div>
		</div>
	</div>
</div>

<!-- 转交选择人页面 -->
<div class="modal fade" id="busineUserModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:700px;height:auto;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">转交人员</h4>
			</div>
			<div class="modal-body" style="height:450px;">
				<div>
				    <span  class='titlespan'>石城县成员单位</span>
				    <span  class='titlespan' style="padding-left:340px;">处理人员</span>
				</div>    
				<div class="col-xs-5" style="margin-top:10px;border: 1px solid #000;padding-right:0px;height:400px;">
			        <ul id="busineZtree"  class="ztree" style="margin-top:0;overflow: auto;height:400px">
			        </ul>
			    </div>
			    <div  class="col-xs-1"  style="margin-top:200px;margin-right:15px;"> 
			       <img src="<%=request.getContextPath()%>/common/images/bussine/addicon.jpg" style="width:45px;height:45px;">
			    </div>
			    <div class="col-xs-5" style="margin-top:10px;border: 1px solid #000;padding-right:0px;height:400px;">
			       <input  id="resultUser" type="hidden" value="">
			       <ul class="ztree" style="margin-top:0;overflow: auto;height:400px;color:red;font-weight:bold;" id="busineUserName"> 
			       </ul>
			    </div>
			</div>
			<div class="modal-footer" id="foot">
				<button class="btn btn-default btns" id="retuBusine" type="button" style="color: #333;background-color: #fff;border-color: #adadad;"  data-dismiss="modal">
					&nbsp;关&nbsp;闭
				</button>
				<button  class="btn btn-default btns" id="conBusine" type="button">
				    &nbsp;确&nbsp;定
				</button>
			</div>
		</div>
	</div>
  <div>
</div>
</div>


<script type="text/javascript">
if(parseInt(paramTp)){
	$(".paramTp1").hide();
	$(".paramTp2").show();
}
</script>