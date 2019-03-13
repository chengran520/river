package com.gxhy.base.basic.service;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.basic.mapper.StraRiverMapper;
import com.gxhy.base.basic.model.StraRiverModel;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.model.RequestModel;
@Service
public class StraRiverService extends BaseMapper{

	public String selectFile(String uuid) {
		JSONObject map = new JSONObject();
		map.put("uuid",uuid);
		map.put(RequestModel.SQLID, com.gxhy.base.basic.mapper.StraRiverMapper.class.getName() + ".selectFile");
		List<StraRiverModel> list =this.selectLists(map);
		if(list.size()>0){
			return list.get(0).getStraFileContent();
		}
		return null;
	}

	public int saveOrUpStaRiver(int type, String straFileTitle, String rvCd,
			String straFileContent, String uuid) {
		JSONObject map = new JSONObject();
		map.put("rvCd", rvCd);
	    map.put("straFileTitle", straFileTitle);
	    map.put("straFileContent", straFileContent);
	    map.put("type",type);
	    map.put("downloadNum",0);
	    map.put("checkNum",0);
	    map.put("creatTm", new Date());
	    map.put("uuid", uuid);
		map.put(RequestModel.SQLID,StraRiverMapper.class.getName() + ".insertStRiver");
		return this.insert(map);
		
	}


	

}
