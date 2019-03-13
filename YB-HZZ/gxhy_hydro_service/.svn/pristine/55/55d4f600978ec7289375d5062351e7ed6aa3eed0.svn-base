package com.gxhy.hydro.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.github.pagehelper.Page;
import com.gxhy.base.model.RequestModel;
import com.gxhy.hydro.mapper.HydroMapper;
import com.gxhy.hydro.mapper.PptnMapper;
import com.gxhy.hydro.mapper.RiverMapper;
import com.gxhy.hydro.model.PptnModel;
import com.gxhy.utils.AdcdUtil;
import com.gxhy.utils.StringUtil;

/**
 * 雨情信息
 * @author zhy
 * @Date 2018年12月19日上午9:44:45
 * @CopyRight gxhy_hydro_service
 */
@SuppressWarnings("all")
@Service
public class PptnService extends HydroMapper{

	/**
	 * 国汛预警APP-获取雨情信息
	 * @author zhy
	 * @return
	 */
	public Map<String,Object> getListPptn(Map<String, Object> paramsMap){
		Map<String,Object> retMap = new HashMap<String,Object>();
		Map<String,Object> mapPptn=new HashMap<String, Object>();
		//String userId = (String) paramsMap.get("loginName");
		String addvcd = (String) paramsMap.get("addvcd");
		String stcd = (String) paramsMap.get("stcd");
		String pageNum = (String) paramsMap.get("pageNum");//起始页面号
		String pageSize = (String) paramsMap.get("pageSize");//每页显示条数
		String stm = (String) paramsMap.get("stm");//开始时间
		String etm = (String) paramsMap.get("etm");//结束时间
		Page<PptnModel> page = null;
		if(StringUtil.isNotBlank(addvcd)){
			if(StringUtil.isNotBlank(stcd)){//根据id查看详情
				mapPptn.put("stcd", stcd);
			}
			if(StringUtil.isNotBlank(pageNum) && StringUtil.isNotBlank(pageSize)){
				mapPptn.put("num", "0"+ pageNum);//起始页面号
				mapPptn.put("size", pageSize);//每页显示条数
			}
/*			if(StringUtil.isNotBlank(stm) && StringUtil.isNotBlank(etm)){
				mapPptn.put("stm", stm);
				mapPptn.put("etm", etm);
			}*/
			//mapPptn.put("userId", userId);
			mapPptn.put("addvcd", AdcdUtil.getPrefixAdcd(addvcd, false));
			mapPptn.put(RequestModel.SQLID, PptnMapper.class.getName() + ".getPptnList");
			page =this.selectList(mapPptn);
		   	retMap.put("result", "success");
		   	retMap.put("pptnList", page);
		   	retMap.put("total", page.getTotal());//总条数
		   	retMap.put("pageNum", page.getPageNum());//起始页面号
		   	retMap.put("Pages", page.getPages());//总页数
		   	retMap.put("pageSize", page.getPageSize());//每页显示条数
		}else{
			retMap.put("result", "error");
			retMap.put("tmpMsg", "行政区不能为空！");
		}
		return retMap;
	}


	/**
	 * 如果不传stm、etm默认为过去二十四小时
	 * 雨量查询的是五分钟一条的时段数据
	 * @param stcd
	 * @param etm
	 * @param stm
	 * @return
	 */
	public List<PptnModel> pptnChart(String stcd, String etm, String stm) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Calendar c;
		if(StringUtils.isBlank(etm)){
			c = Calendar.getInstance();
			etm = sdf.format(c.getTime());
		}
		if(StringUtils.isBlank(stm)){
			c = Calendar.getInstance();
			c.add(Calendar.HOUR_OF_DAY, -24);
			stm = sdf.format(c.getTime());
		}
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("stcd",stcd);
		map.put("etm",etm);
		map.put("stm",stm);
		map.put(RequestModel.SQLID,PptnMapper.class.getName() + ".pptnChart");
		List<PptnModel> list = this.selectLists(map);
		return list;
	}


	public List<String> rainWater(String stcd) {
		Date date = new Date();
		SimpleDateFormat ymdh = new SimpleDateFormat("yyyy-MM-dd HH"); 
		SimpleDateFormat ymd = new SimpleDateFormat("yyyy-MM-dd"); 
		String etm = ymdh.format(date);
		etm = etm + ":05:00"; // 由于数据上报需要时间 所以给出五分钟的容差
		String stm = ymd.format(date);
		stm = stm + " 08:00:00";
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("stcd",stcd);
		map.put("etm",etm);
		map.put("stm",stm);
		map.put(RequestModel.SQLID,PptnMapper.class.getName() + ".rain");
		Double rain = (Double) this.selectOne(map);
		map.put(RequestModel.SQLID,RiverMapper.class.getName() + ".water");
		Double water = (Double) this.selectOne(map);
		List<String> list = new ArrayList<String>();
		if(rain == null){
			list.add("-");
		}else{
			list.add(rain+"");
		}
		if(water == null){
			list.add("-");
		}else{
			list.add(water+"");
		}
		return list;
	}
	
	
	
	
}
