package com.gxhy.base.monitor.controller;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.AdcdModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.base.monitor.model.RvAdcdModel;
import com.gxhy.base.monitor.model.StBprpBModel;
import com.gxhy.base.monitor.model.StRiverB;
import com.gxhy.base.monitor.model.StRvUser;
import com.gxhy.base.monitor.service.DataMonitorSerivce;
import com.gxhy.shiro.SecurityUtil;
import com.gxhy.utils.AdcdUtil;

/**
 *综合展现数据管理
 * @author yb
 * @2017年8月15日下午1:51:17   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("data/monitor")
@SuppressWarnings("all")
public class DataMonitorController extends BaseController{
	
	@Autowired
	DataMonitorSerivce monitorSerivce;
	
	/**
	 * 获取河道基础信息
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/riverDataInfo", method = RequestMethod.GET)
	public Object getRiverDataInfo(HttpServletRequest request,StRiverB model) throws Exception{
		UserModel user = (UserModel) SecurityUtil.getSessionAttr("user");
		if(user != null){			
			List<StRiverB> list =  monitorSerivce.getRiverDataInfo(model.getRvNm(),user);			
			return ResponseModel.Success(list);
		}else{
			return ResponseModel.Success("用户不存在！");
		}
	}
	
	/**
	 * 根据当前用户的行政区获取当下面所有的河道对应的测站信息
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getStbprpInfo", method = RequestMethod.GET)
	public Object getStbprpInfo(HttpServletRequest request) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		String type=request.getParameter("type");
		List<StBprpBModel> list = monitorSerivce.getStBprpBInfo(type);
		return ResponseModel.Success(list);
	}
	
	/**
	 * 根据当前用户的行政区获取当下面所有的河道对应的测站信息
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getAllAdcdRv")
	public Object getAllAdcdRv(HttpServletRequest request) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		UserModel user = SecurityUtil.getSessionUser();
		if(user != null){
			List<RvAdcdModel>  list = new ArrayList<RvAdcdModel>();
			String adcd = AdcdUtil.getChildAdQryLike2(user.getUserAddvcd());
			list = monitorSerivce.getAllAdcdRv(adcd,user.getUserAddvcd(),"1");
			map.put("rvlist", list);
			list = monitorSerivce.getAllAdcdRv(adcd,user.getUserAddvcd(),"2");
			map.put("baselist", list);
			list = monitorSerivce.getAllAdcdRv(adcd,user.getUserAddvcd(),"3");
			map.put("rvUserlist", list);
			list = monitorSerivce.getAllAdcdRv(adcd,user.getUserAddvcd(),"4");
			map.put("countlist", list);
		}
		return ResponseModel.Success(map);
	}
	
	/**
	 * 获取对应河流下所有的河长信息
	 * @param reques
	 * @return
	 */
	@RequestMapping(value = "/getAdcdRiverByRvUser", method = RequestMethod.GET)
	public Object getAdcdRiverByRvUser(HttpServletRequest reques){
		String rvCd = reques.getParameter("rvCd");
		if(StringUtils.isNotBlank(rvCd)){
			List<StRvUser> list =  monitorSerivce.getAdcdRiverByRvUser(rvCd);
			return ResponseModel.Success(list);
		}
		return ResponseModel.Success(null);
	}
	
	/**
	 * 获取当前用户下所有行政区
	 * @return
	 */
	@RequestMapping(value = "/getUserAdcdRiver", method = RequestMethod.GET)
	public Object getUserAdcdRiver(HttpServletRequest reques){
		UserModel user = (UserModel) SecurityUtil.getSessionAttr("user");
		List<AdcdModel> list = new ArrayList<AdcdModel>();
		if(user != null){
			list = AdcdUtil.getChildAllAdnm(user.getUserAddvcd());
		}
		return ResponseModel.Success(list);
	}
}
