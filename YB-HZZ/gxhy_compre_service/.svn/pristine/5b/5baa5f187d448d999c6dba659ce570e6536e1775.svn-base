package com.gxhy.base.monitor.controller;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.monitor.mapper.PoolMapper;
import com.gxhy.base.monitor.model.PoolModel;
import com.gxhy.base.monitor.service.PoolService;
import com.gxhy.utils.QueryUtil;

/***
 * 山塘
 * @author cr
 *
 */
@SuppressWarnings({ "unchecked","rawtypes","unused"})
@RestController
@RequestMapping("data/pool")
public class PoolController extends BaseController{
	
	@Autowired
	private PoolService poolService;
	
	/**
	 * 获取山塘
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getPools", method = RequestMethod.GET)
	public Object getPools(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID,PoolMapper.class.getName() + ".getPools");
		List<PoolModel> list = poolService.selectLists(map);	
		return ResponseModel.Success(list);
	}
	
	/**
	 * 根据测站id获取山塘
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getPoolById", method = RequestMethod.GET)
	public Object getPoolById(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String id=request.getParameter("stcd");
		map.put("id", id);
	    map.put(RequestModel.SQLID,PoolMapper.class.getName() + ".getPoolById");
	    List<PoolModel> list = poolService.selectLists(map);	
		return ResponseModel.Success(list);
	}
	
	
}
