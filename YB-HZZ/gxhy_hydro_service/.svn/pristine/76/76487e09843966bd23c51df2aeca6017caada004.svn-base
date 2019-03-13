
package com.gxhy.hydro.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import lombok.extern.slf4j.Slf4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.hydro.model.PptnModel;
import com.gxhy.hydro.service.PptnService;

/**
 * 雨情信息
 * 
 * @author zhy
 * @Date 2018年12月18日上午9:17:05
 * @CopyRight gxhy_hydro_service 注：所有业务功能写到service层
 */
@Slf4j
@RestController
@RequestMapping("/hydro/pptn")
public class PptnController extends BaseController {
	private static final Logger logger = LoggerFactory.getLogger(PptnController.class);

	@Autowired
	private PptnService pptnService;

	/**
	 * 国汛预警APP-查询雨情信息
	 * 
	 * @author zhy
	 * @param stcd
	 * @return
	 */
	@RequestMapping(value = "/getPptnList", method = RequestMethod.POST)
	public @ResponseBody Map<String, Object> getPptnList(@RequestParam Map<String, Object> paramsMap) {
		logger.info("PptnController--->getPptnList-->params:" + paramsMap);
		Map<String, Object> context = new HashMap<String, Object>();
		try {
			context = pptnService.getListPptn(paramsMap);
		} catch (Exception e) {
			logger.error("--->getPptnList:", e);
			 context.put("result","error");
			context.put("tmpMsg", "请求超时！");
		}
		return context;
	}

	/**
	 * sby 雨量chart图专用 根据stcd、stm、etm来确定返回数据 使用此方法 遵守stm、etm及其格式（2018-11-13
	 * 19:32:00） 雨量查询的是五分钟一条的时段数据
	 * 
	 * @return
	 */
	@RequestMapping("/pptnChart")
	public Object pptnChart(HttpServletRequest request) {
		String stcd = request.getParameter("stcd");
		String etm = request.getParameter("etm");
		String stm = request.getParameter("stm");

		List<PptnModel> list = pptnService.pptnChart(stcd, etm, stm);
		return ResponseModel.Success(list);
	}
	
	/**
	 * sby 今日雨量和最新水位		视频页面雨水使用
	 * 20181129
	 * @return
	 */
	@RequestMapping("/rainWater")
	public Object rainWater(HttpServletRequest request) {
		String stcd = request.getParameter("stcd");
		List<String> list = pptnService.rainWater(stcd);
		return ResponseModel.Success(list);
	}

}
