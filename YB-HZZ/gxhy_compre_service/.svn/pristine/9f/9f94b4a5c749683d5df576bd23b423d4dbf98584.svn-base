package com.gxhy.base.monitor.controller;
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
import com.gxhy.base.monitor.mapper.ReservoirMapper;
import com.gxhy.base.monitor.model.ReservoirModel;
import com.gxhy.base.monitor.service.ReservoirService;

/**
 * 水库信息
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked","rawtypes","unused"})
@RestController
@RequestMapping("data/reservoir")
public class ReservoirController extends  BaseController{
	
	@Autowired
	private ReservoirService reservoirService;
	
	/**
	 * 获取水库
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getRvvrs", method = RequestMethod.GET)
	public Object getRvvrs(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID,ReservoirMapper.class.getName() + ".getRvvrs");
		List<ReservoirModel> list = reservoirService.selectLists(map);
		return ResponseModel.Success(list);
	}

	
	/**
	 * 获取某个水库的基本信息
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getRvvrById", method = RequestMethod.GET)
	public Object getRvvrById(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String id=request.getParameter("stcd");
		map.put("id", id);
		map.put(RequestModel.SQLID,ReservoirMapper.class.getName() + ".getRvvrById");
		List<ReservoirModel> list = reservoirService.selectLists(map);
		return ResponseModel.Success(list);
	}
}
