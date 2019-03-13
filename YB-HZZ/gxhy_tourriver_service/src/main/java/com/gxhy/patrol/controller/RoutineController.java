package com.gxhy.patrol.controller;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.patrol.mapper.RoutineMapper;
import com.gxhy.patrol.model.PatrolCatalogModel;
import com.gxhy.patrol.service.RoutineService;
import com.gxhy.shiro.SecurityUtil;
import com.gxhy.utils.AdcdUtil;
import com.gxhy.utils.DateUtil;
import com.gxhy.utils.PageUtil;
import com.gxhy.utils.StringUtil;

/**
 * 日常巡查
 * @author yb
 * @2017年7月28日下午6:42:38   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("routine/work")
@SuppressWarnings({"rawtypes","unchecked"})
public class RoutineController extends BaseController{
	
	@Autowired
	RoutineService routineSerivce;

	/**
	 * 获取当前用户巡查信息
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getMyRoutineWorks", method = RequestMethod.GET)
	public Object getPatrolCatalog(HttpServletRequest request,PatrolCatalogModel model) throws Exception{
		JSONObject map = new JSONObject();
		//UserModel user = SecurityUtil.getSessionUser();
		   // map.put("userId",user.getUserId());
		   String patrolStartTm = request.getParameter("startTm");
		   String keyword = request.getParameter("keyword");
		   if(StringUtils.isNoneBlank(keyword)){
			   map.put("keyword", keyword);
		   }
		   if(StringUtils.isNotBlank(patrolStartTm)){
			   map.put("patrolStartTm", patrolStartTm);
		   }
		   String endTm=request.getParameter("endTm");
		   if(StringUtils.isNotBlank(endTm)){
			   map.put("patrolEndTm",endTm);
		   }
		   map.put("addvcd",AdcdUtil.getPrefixAdcd(SecurityUtil.getSessionUser().getUserAddvcd(), false));
			//分页
			if(model.getLimit() != null && model.getPageindex() != null){
				map.put("num",model.getPageindex());
				map.put("size",model.getLimit());
			}
		   map.put(RequestModel.SQLID, RoutineMapper.class.getName() + ".getMyRoutineWorks");
		   Page<PatrolCatalogModel> page = routineSerivce.selectList(map);
		   List<PatrolCatalogModel> list = page.getResult();
		   for(PatrolCatalogModel mo:list){
			   String a=mo.getPatrolMileage();
			   if(a!=null){
				   double d = Double.parseDouble(a);
				   if(d!=0){
					   DecimalFormat df = new DecimalFormat("#.00");
					   String str = df.format(d);
					   mo.setPatrolMileage(str);
				   } 
			   }
		   }
		   return PageUtil.success(page);
	}
	
	@RequestMapping(value = "/getPatrolUrl", method = RequestMethod.GET)
	public Object getPatrolUrl(HttpServletRequest reques){
		 String routineId  = reques.getParameter("routineId");
		 JSONObject map = new JSONObject();
		 map.put("routineId",routineId);
		 map.put(RequestModel.SQLID, RoutineMapper.class.getName() + ".getRoutineUrl");
		 PatrolCatalogModel model = (PatrolCatalogModel) routineSerivce.selectOne(map);
		 if(model != null){
			 File trajectFile = new File(model.getPatrolPath());
			 if(!trajectFile.exists())
				 return ResponseModel.Failure("未找到对应轨迹！");
			 
			 String encoding = "UTF-8";  
			 Long filelength = trajectFile.length();  
			 byte[] filecontent = new byte[filelength.intValue()];  
			 try {  
				 FileInputStream in = new FileInputStream(trajectFile);  
				 in.read(filecontent);  
				 in.close();  
			 } catch (FileNotFoundException e) {  
				 e.printStackTrace();  
			 } catch (IOException e) {  
				 e.printStackTrace();  
			 }  
			 try {  
				 String path = new String(filecontent, encoding);  
				 Map<String, Object> returnMap = new HashMap<String, Object>();
				 returnMap.put("path", path);
				 System.out.println(path+"路径");
				 return ResponseModel.Success(returnMap);
			 } catch (UnsupportedEncodingException e) {  
				 System.err.println("The OS does not support " + encoding);  
				 e.printStackTrace();  
				 return null;  
			 }  
		 }
		 
		 return ResponseModel.Failure("未找到对应轨迹！");
	}
	
	@RequestMapping("/getEventCountByRiverId")
	public Object getEventCountByRiverId(){
		 JSONObject map = new JSONObject();
		 map.put("gmCode", SecurityUtil.getSessionUser().getGmCode());
		 map.put(RequestModel.SQLID, RoutineMapper.class.getName() + ".getEventCountByRiverId");
		 List<Map<String, Object>> list = routineSerivce.selectLists(map);
		 return ResponseModel.Success(list);
	}
}

