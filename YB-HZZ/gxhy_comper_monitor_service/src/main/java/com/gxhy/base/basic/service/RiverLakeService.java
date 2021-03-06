package com.gxhy.base.basic.service;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.apache.poi.ss.formula.functions.T;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.basic.mapper.RiverLakeMapper;
import com.gxhy.base.basic.model.LakeModel;
import com.gxhy.base.basic.model.PondModel;
import com.gxhy.base.basic.model.ReachModel;
import com.gxhy.base.basic.model.ReservoirModel;
import com.gxhy.base.basic.model.RiverModel;
import com.gxhy.base.imp.ImportExeclUtil;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.model.RequestModel;
import com.gxhy.utils.QueryUtil;


@Service
@SuppressWarnings("all")
public class RiverLakeService extends BaseMapper{

	public int importFile(MultipartFile file, int index) {
			JSONObject map = new JSONObject();
			String name = file.getOriginalFilename();
			switch (index) {
			case 0:
				List<RiverModel>  riverList=ImportExeclUtil.exportInfo(file,name,new RiverModel());//代表河流
				map.put("list", riverList);
				map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".insertRiver");
				break;
			case 1:
				List<ReachModel>  reachList=ImportExeclUtil.exportInfo(file,name,new ReachModel());//河段
				map.put("list", reachList);
				map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".insertReach");
				break;
			case 2:
				List<ReservoirModel> rsvrList=ImportExeclUtil.exportInfo(file,name,new ReservoirModel());//水库
				map.put("list", rsvrList);
				map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".insertRsvr");
				break;
			case 3:
				List<PondModel> pondList=ImportExeclUtil.exportInfo(file,name,new PondModel());//塘坝
				map.put("list", pondList);
				map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".insertPond");
				break;
			case 4:
				List<LakeModel>  lakeList=ImportExeclUtil.exportInfo(file,name,new LakeModel());//湖泊
				map.put("list", lakeList);
				map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".insertLake");	
				break;
			default:
				break;
			}	
 			return  this.insert(map);
	}

	public int deleteRiver(QueryUtil model) {
		int index=model.getIndex();
		JSONObject map = new JSONObject();
		List<String> list= Arrays.asList(model.getIds().split(","));
		map.put("list", list);
		switch (index) {
		case 0:
			map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".deleteRivers");
			break;
		case 1:
			map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".deleteReachs");
			break;
		case 2:
			map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".deleteRsvrs");
			break;
		case 3:
			map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".deletePonds");
			break;
		case 4:
			map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".deleteLakes");
			break;
		default:
			break;
		}	
		return this.delete(map);
	}
	
	public List<RiverModel> selectAllRivers(JSONObject map) {
		map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".selectRivers");
		return  this.selectList(map);
    }
	
	public List<RiverModel> selectAllLakes (JSONObject map) {
		map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".selectLakes");
		return  this.selectList(map);
	}

	public List<RiverModel> selectAllReachs(JSONObject map) {
		map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".selectReachs");
		return  this.selectList(map);
	}

	public List<RiverModel> selectAllRsvrs(JSONObject map) {
		map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".selectRsvrs");
		return  this.selectList(map);
	}

	public List<RiverModel> selectAllPonds(JSONObject map) {
		map.put(RequestModel.SQLID,RiverLakeMapper.class.getName() + ".selectPonds");
		return  this.selectList(map);
	}
}
