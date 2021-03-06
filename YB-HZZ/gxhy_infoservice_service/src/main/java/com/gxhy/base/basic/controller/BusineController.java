package com.gxhy.base.basic.controller;
import com.alibaba.druid.Constants;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.basic.mapper.BusineMapper;
import com.gxhy.base.basic.model.BusineModel;
import com.gxhy.base.basic.model.DictModel;
import com.gxhy.base.basic.service.BusineService;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.base.model.Ztree;
import com.gxhy.shiro.SecurityUtil;
import com.gxhy.utils.DateUtil;
import com.gxhy.utils.Encodes;
import com.gxhy.utils.PageUtil;
import com.gxhy.utils.ReadApplicationUntil;
import com.gxhy.utils.StringUtil;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({ "busine/accept" })
public class BusineController extends BaseController {
	@Autowired
	private BusineService busineService;

	@RequestMapping(value = { "/getTimeAxis" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public Object getTimeAxis(HttpServletRequest request) {
		JSONObject map = new JSONObject();
		map.put("busineId", request.getParameter("busineId"));
		map.put("sqlid", BusineMapper.class.getName() + ".getTimeAxis");
		List<BusineModel> models = this.busineService.selectLists(map);
		return ResponseModel.Success(models);
	}

	@RequestMapping(value = {"/getEventList"}, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public Object getEventList(HttpServletRequest request, String startTm,
			String endTm, String keyword,String pageindex, String limit,String patrolId) throws Exception {
		JSONObject map = new JSONObject();
		map.put("startTm", startTm);
		map.put("endTm", endTm);
		map.put("keyword", keyword!=null?keyword.replaceAll("\t", ""):keyword);
		map.put("patrolId", patrolId);
		//分页
		if(pageindex != null && limit != null){
			map.put("pageindex",pageindex);
			map.put("limit",limit);
		}
		Subject currentUser = SecurityUtils.getSubject();
		UserModel user = (UserModel) currentUser.getSession().getAttribute("user");
		map.put("userId", user.getUserId());
		map.put("sqlid", BusineMapper.class.getName() + ".getEventList");
		Page<BusineModel> page = this.busineService.selectList(map);
		return PageUtil.success(page);
	}

	
	@RequestMapping(value = { "/getBusineImgs" }, method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public Object getBusineImgs(HttpServletRequest request, String busineId,String type) {
		JSONObject map = new JSONObject();
		map.put("busineId", busineId);
		map.put("type", type);
		map.put("sqlid", BusineMapper.class.getName() + ".getBusineImgs");
		List<String> list = this.busineService.selectLists(map);
		return ResponseModel.Success(list);
	}

	/***
	 * 新增/修改流程
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertWorkFlow", method = RequestMethod.POST)
	public Object insertWorkFlow(HttpServletRequest request) {
		JSONObject map = new JSONObject();
		JSONObject map2 = new JSONObject();
		int num = 0;
		Subject currentUser = SecurityUtils.getSubject();
		UserModel user = (UserModel) currentUser.getSession().getAttribute(
				"user");
		if (user != null) {
			String busineOrgin = request.getParameter("busineOrgin");
			if (busineOrgin.equals("gzjb")) {
				String orginId = request.getParameter("orginId");
				map.put("orginId", orginId);
				map.put(RequestModel.SQLID, BusineMapper.class.getName()
						+ ".updateExposure");
				num = busineService.update(map);
			} else {
				map.put("busineId", request.getParameter("busineId"));// 事件id
				map.put("handleTm", new Date());// 处理时间
				map.put("status", request.getParameter("status"));// 流程状态
				map.put("handleView", request.getParameter("handleView"));// 处理意见
				int type = Integer.parseInt(request.getParameter("type"));
				if (type == 1) {
					map.put("workFlowId",
							UUID.randomUUID().toString().replace("-", ""));
					map.put("handleUserId", user.getUserId());// 处理人是当前用户
					map.put("lastHandleUserId", user.getUserId());
					map.put(RequestModel.SQLID, BusineMapper.class.getName()
							+ ".insertWorkFlow");
					num = busineService.insert(map);

				}
				// 转交他人处理，可同时转交其他人处理
				else if (type == 2) {
					String handleUserId = request.getParameter("handleUserId");
					map.put("workFlowId", UUID.randomUUID().toString()
							.replace("-", ""));
					map.put("handleUserId", "liuzb");// 处理人是河长办人员
					map.put("lastHandleUserId", user.getUserId());
					map.put(RequestModel.SQLID,
							BusineMapper.class.getName()
									+ ".insertWorkFlow");
					num = busineService.insert(map);
				}else if (type == 3||type==4) {
					String handleUserId = request.getParameter("handleUserId");
					map.put("workFlowId", UUID.randomUUID().toString()
							.replace("-", ""));
					map.put("handleUserId", handleUserId);// 处理人是河长办人员
					map.put("lastHandleUserId", user.getUserId());
					map.put(RequestModel.SQLID,
							BusineMapper.class.getName()
									+ ".insertWorkFlow");
					num = busineService.insert(map);
				}
			}

			map2.put("busineId", request.getParameter("busineId"));
			map2.put("busineStatus", request.getParameter("busineStatus"));
			map2.put("updateTm", new Date());
			map2.put(RequestModel.SQLID, BusineMapper.class.getName()
					+ ".updateBusineStatus");
			int num2 = busineService.update(map2);
			if (num == 1 && num2 == 1) {
				return ResponseModel.Success("更新流程成功！");
			} else {
				return ResponseModel.Success("更新流程失败！");
			}
		}
		
		
		return ResponseModel.Failure("当前用户不存在！");

	}

	/***
	 * 无效事件
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/invalidBusine", method = RequestMethod.GET)
	public Object invalidBusine(HttpServletRequest request) {
		JSONObject map = new JSONObject();
		map.put("busineId", request.getParameter("busineId"));
		map.put("busineStatus", request.getParameter("busineStatus"));
		map.put("updateTm", new Date());
		map.put(RequestModel.SQLID, BusineMapper.class.getName()
				+ ".updateBusineStatus");
		int num = busineService.update(map);
		int num2 = 0;
		JSONObject map2 = new JSONObject();
		Subject currentUser = SecurityUtils.getSubject();
		UserModel user = (UserModel) currentUser.getSession().getAttribute(
				"user");
		map2.put("workFlowId", UUID.randomUUID().toString().replace("-", ""));
		map2.put("busineId", request.getParameter("busineId"));// 4表示事件无效
		map2.put("handleUserId", user.getUserId());
		map2.put("lastHandleUserId", user.getUserId());
		map2.put("handleTm", new Date());// 处理时间
		map2.put("handleView", request.getParameter("handleView"));// 处理意见
		map2.put("status", request.getParameter("status"));// 6表示流程无效
		String busineOrgin = request.getParameter("busineOrgin");
		if (busineOrgin.equals("公众举报")) {
			String orginId = request.getParameter("orginId");
			map2.put("orginId", orginId);
			map2.put(RequestModel.SQLID, BusineMapper.class.getName()
					+ ".updateExposure");
			num2 = busineService.update(map2);
		} else {
			map2.put(RequestModel.SQLID, BusineMapper.class.getName()
					+ ".insertWorkFlow");
			num2 = busineService.insert(map2);
		}

		if (num == 1 && num2 == 1) {
			return ResponseModel.Success("更新状态成功");
		} else {
			return ResponseModel.Success("更新状态失败");
		}
	}
		
     /**
	 * 下拉选择部门人员
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getUsers", method = RequestMethod.GET)
	public Object getTreeUsers(HttpServletRequest request){
			JSONObject map = new JSONObject();
			map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getTreeUsers");
			List<Ztree>  list=  busineService.selectLists(map);	
		    return ResponseModel.Success(list);
	}
	
	/**
	 * 事件统计报表  
	 */
	@RequestMapping(value = "/getBusineStatics", method = { org.springframework.web.bind.annotation.RequestMethod.GET })
	public Object 	getBusineStatics(HttpServletRequest request,BusineModel model,String type,String busineType,String startTm,String endTm,String riverId){
		JSONObject map = new JSONObject();
		map.put("type", type);
		map.put("busineType", busineType);
		if(StringUtils.isNotBlank(startTm)){
			map.put("startTm", startTm);
		}
		if(StringUtils.isNotBlank(endTm)){
			map.put("endTm", endTm);
		}
		if(StringUtils.isNotBlank(riverId)){
			map.put("riverId", riverId);
		}
		//分页
		if(model.getLimit() != null && model.getPageindex() != null){
			map.put("num",model.getPageindex());
			map.put("size",model.getLimit());
		}
		map.put("gmCode", SecurityUtil.getSessionUser().getGmCode());
		map.put("sqlid", BusineMapper.class.getName() + ".getBusineStatics");
		Page<BusineModel> page =this.busineService.selectList(map);
		return PageUtil.success(page);
	}
	
	/**
	 * 获取字典名称
	 * @param request
	 * @param json
	 * @return
	 */
	@RequestMapping(value = "/getBusineTypes", method = RequestMethod.GET)
	public Object getBusineTypes(HttpServletRequest request){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("dictTp", request.getParameter("dictTp"));
		map.put(RequestModel.SQLID,BusineMapper.class.getName() + ".getBusineTypes");		
		List<DictModel> dicModels=busineService.selectLists(map);
		return ResponseModel.Success(dicModels);
	}
	
	
	/***
	 * 上传图片
	 * @param request
	 * @return
	 * @throws IOException 
	 * @throws FileNotFoundException 
	 */
	@RequestMapping(value = "/doUpload", method = RequestMethod.POST)
	public Object doUpload(HttpServletRequest request,@RequestParam String imgBase64Data,@RequestParam String workflowId){
		Map<String,Object> map2=new HashMap<String, Object>();
		try {
	        String imagePath  = ReadApplicationUntil.getImageUri();
	        System.out.println(imagePath+"图片地址");
	        String imgFilePath =System.getProperty("file.separator")+DateUtil.convertDateToString(new Date(), 5)+System.getProperty("file.separator");
	        File uploadPathFile = new File(imagePath+imgFilePath);
	        //创建父类文件
	        if(!uploadPathFile.exists() && !uploadPathFile.isDirectory()){
	            uploadPathFile.mkdirs();
	        }
	        File imgeFile = new File(imagePath+imgFilePath,new Date().getTime()+".jpg");
	        if(!imgeFile.exists()){
	            imgeFile.createNewFile();
	        }
	        //对base64进行解码
	        String imgBase64=imgBase64Data.split(",")[1];
	        byte[] result = Encodes.decodeBase64(imgBase64);
	        //使用Apache提供的工具类将图片写到指定路径下
			FileUtils.writeByteArrayToFile(imgeFile,result);
		    String  imageId = UUID.randomUUID().toString().replace("-", "");
		    String workFlowId=request.getParameter("workflowId");
		    JSONObject map = new JSONObject();
		    if(StringUtils.isNotBlank(workFlowId)){
		    	map.put("workFlowId",workFlowId);
		    }else{
		    	workFlowId=UUID.randomUUID().toString().replace("-", "");
		    	map.put("workFlowId",workFlowId);
		    }
			
			map.put("busineId", request.getParameter("busineId"));
			map.put("imgUrl", imagePath+imgFilePath+imgeFile.getName());
			
			map.put("imageId",imageId);
			map.put("type","11");			
			map2.put("workFlowId",workFlowId);
			map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".insertBusineImage");	
			int num =busineService.insert(map);
			
		 } catch (IOException e) {
			e.printStackTrace();
		}
		return ResponseModel.Success(map2);
	}
	
	/**
	 * 获取事件完成数
	 * @return
	 */
	@RequestMapping(value = "/getEventCountWithStatus", method = RequestMethod.GET)
	public Object getEventCountWithStatus(String type){
		JSONObject params = new JSONObject();
		if(StringUtil.isBlank(type) || "1".equals(type)){
			params.put("stm", DateUtil.getHoursAgo(-7, 0, 0, 0));
		}else{
			params.put("stm", DateUtil.getHoursAgo(-30, 0, 0, 0));
		}
		params.put("gmCode", SecurityUtil.getSessionUser().getGmCode());
		params.put("sqlid", BusineMapper.class.getName() + ".getEventCountWithStatus");
		List<Map<String, Object>> list = busineService.selectLists(params);
		return ResponseModel.Success(list);
	}
}
