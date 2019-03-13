package com.gxhy.base.basic.service;
import java.util.Arrays;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.basic.mapper.RiverLongMapper;
import com.gxhy.base.basic.model.ResultRiverInfoModel;
import com.gxhy.base.basic.model.RiverLongModel;
import com.gxhy.base.imp.ImportExeclUtil;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.shiro.SecurityUtil;
import com.gxhy.utils.AdcdUtil;
import com.gxhy.utils.QueryUtil;

@Service
@SuppressWarnings("unchecked")
public class RiverLongService extends BaseMapper{

	public int insertFileRL(List<RiverLongModel>  riverList, int index) {
		JSONObject map = new JSONObject();
		for(RiverLongModel  model:riverList){
			model.setGmCode(UUID.randomUUID().toString().replace("-", ""));
			switch (index) {
			case 0:
				model.setGmTp("1");
				break;
			case 1:
				model.setGmTp("2");
				break;
			case 2:
				model.setGmTp("3");
				break;
			case 3:
				model.setGmTp("4");
				break;
			default:
				break;
			}
		}
		map.put("list", riverList);
		map.put(RequestModel.SQLID,RiverLongMapper.class.getName() + ".insertRiverLong");
	   return  this.insert(map);
	}

	public List<RiverLongModel> selectAllRiverLongs(JSONObject map) {
		map.put(RequestModel.SQLID,RiverLongMapper.class.getName() + ".selectAllRiverLongs");
		return  this.selectList(map);
	}

	public int deleteRL(QueryUtil model) {
		JSONObject map = new JSONObject();
		List<String> list= Arrays.asList(model.getIds().split(","));
		map.put("list", list);
		map.put(RequestModel.SQLID,RiverLongMapper.class.getName() + ".deleteRiverLong");
		return  this.delete(map);
	}

	public List<ResultRiverInfoModel> getRiverInfoList(JSONObject map) {
		map.put(RequestModel.SQLID, RiverLongMapper.class.getName()+ ".getRiverInfoList");
		List<ResultRiverInfoModel> models= this.selectList(map);
		return models;
	
   }
	
	/**
	 * 查询水位、流量
	 * @param stcd
	 * @return
	 */
  public List<ResultRiverInfoModel> getZlist(String stcd,String stm,String etm) {
	    Map<String, Object> map = new Hashtable<String, Object>();
		map.put("stcd", stcd);
		map.put("stm", stm);
		map.put("etm", etm);
		map.put(RequestModel.SQLID, RiverLongMapper.class.getName() + ".getZqlist");
		List<ResultRiverInfoModel> list=this.selectList(map);
	    return list;
  }

	public List<RiverLongModel> getRvLongList() {
		JSONObject map = new JSONObject();
		UserModel user = SecurityUtil.getSessionUser();
		map.put("addvcd", AdcdUtil.getPrefixAdcd(user.getUserAddvcd(), false));
		map.put(RequestModel.SQLID, RiverLongMapper.class.getName() + ".getRvLongList");
		List<RiverLongModel> list=this.selectLists(map);
		return list;
	}
	
	public List<Map<String, Object>> getRvLongNum(){
		JSONObject map = new JSONObject();
		UserModel user = SecurityUtil.getSessionUser();
		map.put("addvcd", AdcdUtil.getPrefixAdcd(user.getUserAddvcd(), false));
		map.put(RequestModel.SQLID, RiverLongMapper.class.getName() + ".getRvLongNum");
		return this.selectLists(map);
	}
	
	/**
	 * 更新河湖长信息
	 * @param riverList
	 * @param index
	 * @return
	 */
	public int updateFileRL(RiverLongModel  riverModel, int index) {
		JSONObject map = new JSONObject();
		map.put("gmCode", riverModel.getGmCode());	
		map.put("gmName", riverModel.getGmName());	
		map.put("gmDuties", riverModel.getGmDuties());	
		map.put("gmMobile", riverModel.getGmMobile());	
		map.put("addvnm", riverModel.getAddvnm());	
		map.put("adLevel", riverModel.getAdLevel());	
		map.put("gmDutiesLev", riverModel.getGmDutiesLev());	
		map.put("govType", riverModel.getGovType());	
		map.put("gmType", riverModel.getGmType());	
		switch (index) {
			case 0:
				riverModel.setGmTp("1");
				break;
			case 1:
				riverModel.setGmTp("2");
				break;
			case 2:
				riverModel.setGmTp("3");
				break;
			case 3:
				riverModel.setGmTp("4");
				break;
			default:
				break;
		}
		map.put(RequestModel.SQLID,RiverLongMapper.class.getName() + ".insertRiverLong");
	    return  this.insert(map);
	}
}
