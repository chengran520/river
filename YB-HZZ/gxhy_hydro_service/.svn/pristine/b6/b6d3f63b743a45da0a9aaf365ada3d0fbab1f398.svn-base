package com.gxhy.hydro.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gxhy.base.model.ResponseModel;
import com.gxhy.hydro.model.RiverModel;
import com.gxhy.hydro.service.RiverService;

/**
 * 河道水情
 * @author zhy
 * @Date 2018年12月18日上午9:17:40
 * @CopyRight gxhy_hydro_service
 * 注：所有业务功能写到service层
 */
@RestController
@RequestMapping("/hydro/river")
public class RiverController {
	
	private static final Logger logger = LoggerFactory.getLogger(RiverController.class);
	
	@Autowired
	private RiverService riverService;
	
	/**
	 * sby
	 * 水位chart图专用		根据stcd、stm、etm来确定返回数据
	 * 使用此方法  遵守stm、etm及其格式（2018-11-13 19:32:00） 
	 * 水位查询的是一小时一条的时段数据
	 * @return
	 */
	@RequestMapping("/riverChart")
	public Object pptnChart(HttpServletRequest request){
		String stcd = request.getParameter("stcd");
		String etm = request.getParameter("etm");
		String stm = request.getParameter("stm");
		
		List<RiverModel> list = riverService.riverChart(stcd,etm,stm);
		return ResponseModel.Success(list);
	}
	
	/**
	 * @author zhy
	 * 国汛预警APP-查询水情信息（---暂时查询的是每个站点最新的一条信息）(查询最新一小时的水位信息)
	 * @param stcd
	 * @return
	 */
	@RequestMapping(value = "/getRiverList",method = RequestMethod.POST)
    public @ResponseBody Map<String,Object> getRiverList(@RequestParam Map<String, Object> paramsMap){
        logger.info("RiverController--->getRiverList-->params:"+paramsMap);
        Map<String,Object> context = new HashMap<String, Object>();
        try{
            context = riverService.getRiverList(paramsMap);
        }catch (Exception e){
            logger.error("--->getRiverList:",e);
            context.put("result","error");
            context.put("tmpMsg","请求超时！");
        }
        return context;
    }


}
