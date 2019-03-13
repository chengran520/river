package com.gxhy.base.basic.controller;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.basic.mapper.QualityMapper;
import com.gxhy.base.basic.model.QualityModel;
import com.gxhy.base.basic.service.QualityService;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.utils.DateUtil;

/**
 * 水质信息
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("data_monitor/quality")
public class QualityController extends BaseController{

	@Autowired
	private QualityService qualityService;
	
	
	/**
	 * 获取水质列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getQualityList", method = RequestMethod.GET)
	public Object getQualityList(HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID,QualityMapper.class.getName() + ".getQualityList");
		List<QualityModel> list = qualityService.selectLists(map);
		return ResponseModel.Success(list);
	}
	
   /**
    * 获取水质chart图表数据
    * @param request
    * @return
    */
	@RequestMapping(value = "/echartQuality", method = RequestMethod.GET)
	public Object echartQuality(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String quaId = request.getParameter("id");
		String date = request.getParameter("date");
		String sql = "";
		String Table = "yuancheng";
		if(StringUtils.isNotBlank(quaId)){
			if("wt".equals(quaId)){
				sql = "Q.WT";
			}else if("turb".equals(quaId)){
				sql = "Q.TURB";
			}else if("cond".equals(quaId)){
				sql = "Q.COND";
			}else if("ph".equals(quaId)){
				sql = "Q.PH";
			}else if("dox".equals(quaId)){
				sql = "Q.DOX";
			}
		}
		if(StringUtils.isNotBlank(date)){
			Date startTm=DateUtil.getStartToTime(date);
			Date endTm=DateUtil.getEndToTime(date);
			map.put("starttime", startTm);
			map.put("endtime", endTm);
		}
		map.put("table", Table);
		map.put("sql", sql);
		map.put(RequestModel.SQLID,QualityMapper.class.getName() + ".getQuaValList");
		List<QualityModel> zlist = qualityService.selectList(map);
		return ResponseModel.Success(zlist);
	}

}
