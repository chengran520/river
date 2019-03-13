package com.gxhy.patrol.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.model.RequestModel;
import com.gxhy.patrol.mapper.RoutineMapper;
import com.gxhy.utils.StringUtil;

@Service
@SuppressWarnings({"rawtypes","unchecked"})
public class RoutineService extends BaseMapper{
	
	/**
	 * 删除未上报的巡检日志
	 * @param id
	 * @return
	 */
	public int deletePatrolCatalog(String id){
		int num=0;
		Map<String,String> paramMap =new HashMap<String,String>();
		if(StringUtil.isNotBlank(id)){
			paramMap.put("id", id);
			paramMap.put(RequestModel.SQLID,RoutineMapper.class.getName() + ".deletePatrolCatalog");
			num = this.delete(paramMap);
		}
		return num;
	}
	
}
