package com.gxhy.base.adcd.service;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.adcd.mapper.AdcdMapper;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.model.AdcdModel;
import com.gxhy.base.model.RequestModel;
@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class AdcdService extends BaseMapper{
	
	/**
	 * 根据编码获取名称 
	 * @param adcds
	 * @return
	 */
	public List<AdcdModel> getAdcdNm(String adcd){
		Map<String, Object> map = new Hashtable<String, Object>();
		map.put("adcd", adcd);
		map.put(RequestModel.SQLID, AdcdMapper.class.getName() + ".getAdcdNm");
		List<AdcdModel> list= this.selectLists(map);
		return list;
	}
	
	/**
	 * 获取当前用户所在行政区域
	 * @param adcd
	 * @return
	 */
	public List<AdcdModel> getAdcdZtree(String adcd){
		JSONObject map = new JSONObject();
        map.put("adcd",adcd);
		map.put(RequestModel.SQLID, AdcdMapper.class.getName() + ".getUserAdcdZtree");	
		List<AdcdModel> list = this.selectLists(map);
		return list;
	}
	
	public String getAddvnms(String addvcd) {
		while(addvcd.length()<12){
			addvcd = addvcd + "0";
		}
		JSONObject params = new JSONObject();
		String addvcdA = addvcd.substring(0, 2);
		String addvcdB = addvcd.substring(0, 4);
		String addvcdC = addvcd.substring(0, 6);
		String addvcdD = addvcd.substring(0, 9);
		
		params.put("addvcdA", addvcdA+"0000000000");
		params.put("addvcdB", addvcdB+"00000000");
		params.put("addvcdC", addvcdC+"000000");
		params.put("addvcdD", addvcdD+"000");
		
		params.put(RequestModel.SQLID, AdcdMapper.class.getName() + ".getAddvnms");
		List<String> list = this.selectLists(params);
		String result = "";
		for (String string : list) {
			result += string;
			result += ",";
		}
		return result;
	}
}
