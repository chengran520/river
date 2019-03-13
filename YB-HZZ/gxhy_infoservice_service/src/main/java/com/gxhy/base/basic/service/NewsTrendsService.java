package com.gxhy.base.basic.service;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.annotations.Param;
import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.basic.mapper.NewsTrendsMapper;
import com.gxhy.base.basic.mapper.RiverLongMapper;
import com.gxhy.base.basic.model.FileModel;
import com.gxhy.base.basic.model.MsgModel;
import com.gxhy.base.basic.model.RiverLongModel;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.model.AdcdModel;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.utils.AdcdUtil;
import com.gxhy.utils.DateUtil;
import com.gxhy.utils.PageUtil;


@Service
@SuppressWarnings("unchecked")
public class NewsTrendsService extends BaseMapper{

	public int addMsg(MsgModel model) {
		UserModel user = (UserModel)SecurityUtils.getSubject().getSession().getAttribute("user");
		JSONObject map = new JSONObject();
		map.put("sendTm", new Date());
		map.put("msgId", UUID.randomUUID().toString().replace("-", ""));			
		map.put("sendUser",user.getUserName());
		map.put("sendUserId", user.getUserId());
	    map.put("msgContent", model.getMsgContent());
	    map.put("msgType", model.getMsgType());
	    map.put("msgTitle", model.getMsgTitle());
		map.put(RequestModel.SQLID,NewsTrendsMapper.class.getName() + ".insertMsg");
		return this.insert(map);
	}

	public String selectFile(String uuid) {
		JSONObject map = new JSONObject();
		map.put("fileId", uuid);
		map.put(RequestModel.SQLID,NewsTrendsMapper.class.getName() + ".selectFile");
		return (String) this.selectOne(map);
	}

	public int addFilePath(String path, String uuid) {
		JSONObject map = new JSONObject();
		map.put("fileId", uuid);
		map.put("fileUrl", path);
		map.put(RequestModel.SQLID,NewsTrendsMapper.class.getName() + ".insertFile");
		return this.insert(map);
		
	}

	public int addFile(FileModel model) {
		JSONObject map = new JSONObject();
		map.put("fileName", model.getFileName());
		map.put("fileOrg", model.getFileOrg());
		map.put("fileType", model.getFileType());
		map.put("creteTm", new Date());
		map.put("fileSymbol", model.getFileAttrType());
		UserModel user = (UserModel)SecurityUtils.getSubject().getSession().getAttribute("user");
		map.put("fileUser", user.getUserId());
		map.put("remark", model.getRemark());
		map.put("fileAttrType", model.getFileAttrType());
		if(StringUtils.isNotBlank(model.getFileId())){
			map.put("fileId", model.getFileId());
			map.put(RequestModel.SQLID,NewsTrendsMapper.class.getName() + ".updateFile");
			return this.update(map);
		}else{
			model.setFileId(UUID.randomUUID().toString().replace("-", ""));
			map.put(RequestModel.SQLID,NewsTrendsMapper.class.getName() + ".insertFile");
			return this.insert(map);
		}
		
	}

	//文件可以看上级，不能看平级,功能实现,以及看自己发布的文件信息
	public Page<FileModel> getFiles(FileModel model) {
		UserModel user = (UserModel)SecurityUtils.getSubject().getSession().getAttribute("user");
		String addvcd=user.getUserAddvcd();
		List<AdcdModel> list=AdcdUtil.getChildAllAdnm(addvcd);
		List<String>  lst=new ArrayList<String>();
		for(AdcdModel mod:list){
			if(!mod.getAddvcd().equals(addvcd)){
				lst.add(mod.getAddvcd());
			}			
		}
		JSONObject map=new JSONObject();
		map.put("userId", user.getUserId());
		map.put("size", lst.size());
		map.put("list",lst);
		map.put(RequestModel.SQLID,NewsTrendsMapper.class.getName() + ".getFiles");
	   return this.selectList(map);	
	}

	
	public Page<FileModel> getMsgs(MsgModel model) {
		JSONObject map=getMap(model.getPageindex(),model.getLimit());
		map.put("startTm", DateUtil.convertDateToString(DateUtil.getNextWeek(new Date()),10));  
		map.put("endTm", DateUtil.convertDateToString(new Date(),10));  
		map.put(RequestModel.SQLID,NewsTrendsMapper.class.getName() + ".getMsgs");
		return this.selectList(map);	
	}
	
	public  JSONObject getMap(Integer  num,Integer size){
		JSONObject map = new JSONObject();
		if(size!= null &&num!= null){
			map.put("num",num);
			map.put("size",size);
		}
		return map;
		
	}
}