package com.gxhy.hydro.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.github.pagehelper.Page;
import com.gxhy.base.model.RequestModel;
import com.gxhy.hydro.mapper.HydroMapper;
import com.gxhy.hydro.mapper.RiverMapper;
import com.gxhy.hydro.model.RiverModel;
import com.gxhy.utils.AdcdUtil;
import com.gxhy.utils.StringUtil;

/**
 * 水位业务处理层
 * @author gxhy
 *
 */
@SuppressWarnings("all")
@Service
public class RiverService  extends HydroMapper{

	public List<RiverModel> riverChart(String stcd, String etm, String stm) {
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
		map.put(RequestModel.SQLID,RiverMapper.class.getName() + ".riverChart");
		List<RiverModel> list = this.selectLists(map);
		return list;
	}
	
	/**
	 * @author zhy
	 * 国汛预警APP-获取水情信息（查询最新一小时的水位信息）
	 * @return
	 */
	public Map<String,Object> getRiverList(Map<String, Object> paramsMap){
		Map<String,Object> retMap = new HashMap<String,Object>();
		Map<String,Object> mapRiver=new HashMap<String, Object>();
		//String userId = (String) paramsMap.get("loginName");
		String addvcd = (String) paramsMap.get("addvcd");
		String stcd = (String) paramsMap.get("stcd");
		String pageNum = (String) paramsMap.get("pageNum");//起始页面号
		String pageSize = (String) paramsMap.get("pageSize");//每页显示条数
		String stm = (String) paramsMap.get("stm");//开始时间
		String etm = (String) paramsMap.get("etm");//结束时间
		Page<RiverModel> page = null;
		if(StringUtil.isNotBlank(addvcd)){
			if(StringUtil.isNotBlank(stcd)){//根据id查看详情
				mapRiver.put("stcd", stcd);
			}
			//mapRiver.put("userId", userId);
			if(StringUtil.isNotBlank(pageNum) && StringUtil.isNotBlank(pageSize)){
				mapRiver.put("num", "0"+ pageNum);//起始页面号
				mapRiver.put("size", pageSize);//每页显示条数
			}
/*			if(StringUtil.isNotBlank(stm) && StringUtil.isNotBlank(etm)){
				mapRiver.put("stm", stm);
				mapRiver.put("etm", etm);
			}*/
			mapRiver.put("addvcd", AdcdUtil.getPrefixAdcd(addvcd, false));
			mapRiver.put(RequestModel.SQLID, RiverMapper.class.getName() + ".getRiverList");
			page =this.selectList(mapRiver);
		   	retMap.put("result", "success");
		   	retMap.put("riverList", page);
		   	retMap.put("total", page.getTotal());//总条数
		   	retMap.put("PageNum", page.getPageNum());//起始页面号
		   	retMap.put("Pages", page.getPages());//总页数
		   	retMap.put("pageSize", page.getPageSize());//每页显示条数
		}else{
			retMap.put("result", "error");
			retMap.put("tmpMsg", "行政区不能为空！");
		}
		return retMap;
	}
}
