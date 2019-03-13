package com.gxhy.base.system.service;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.imp.ImportExeclUtil;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.base.system.mapper.SysUserMapper;
import com.gxhy.utils.MD5Util;
import com.gxhy.utils.QueryUtil;

/**
 * @author yb
 * @Date 2018年7月16日下午2:59:23
 * @CopyRight gxhy_base_service
 */
@SuppressWarnings("all")
@Service
public class  SysUserService extends BaseMapper{
	
	/**
	 * 查询所有用户信息
	 * @return
	 */
	public Page<UserModel> getListUser(JSONObject map){
		map.put(RequestModel.SQLID,SysUserMapper.class.getName() + ".getAllUser");
		return  this.selectList(map);
	}

	public int insertUserList(List<UserModel> userList) {
		JSONObject map = new JSONObject();
		for(UserModel  model:userList){
			model.setUuid(UUID.randomUUID().toString().replace("-", ""));
			if(StringUtils.isBlank(model.getUserId())){//代表自己填写的
				model.setUserId(model.getUserPhone());
			}
			model.setCreateTm(new Date());
			model.setUpdateTm(new Date());
			if(StringUtils.isBlank(model.getUserPasswd())){
				model.setUserPasswd(MD5Util.CustomMD5("gxhy123456"));//如果是批量导入的
			}else {
				model.setUserPasswd(MD5Util.CustomMD5(model.getUserPasswd()));
			}
			
		}
		map.put("list", userList);
		map.put(RequestModel.SQLID,SysUserMapper.class.getName() + ".insertUser");	
		return this.insert(map);
	}

	public int deleteUser(QueryUtil model) {
		JSONObject map = new JSONObject();
		List<String> list= Arrays.asList(model.getIds().split(","));
		map.put("list", list);
		map.put(RequestModel.SQLID,SysUserMapper.class.getName() + ".deleteUsers");
		return this.delete(map);
	}
	
	public int updateUser(String uuid, String userPasswd) {
		JSONObject map = new JSONObject();
		map.put("uuid", uuid);
		map.put("userPasswd", MD5Util.CustomMD5(userPasswd));
		map.put(RequestModel.SQLID,SysUserMapper.class.getName() + ".updateUser");
		return this.update(map);
	}
    /**
     * 修改用户
     * @param model
     * @return
     */
	public int updUser(UserModel model) {
		JSONObject map = new JSONObject();
		map.put("uuid", model.getUuid());
		map.put("userName", model.getUserName());
		map.put("userAddvcd", model.getUserAddvcd());
		map.put("creteTm", new Date());
		map.put("updateTm", new Date());
		map.put("isLopc", model.getIsLopc());
		map.put("isLoapp", model.getIsLoapp());
		map.put("userSex", model.getUserSex());
		map.put("userWechat", model.getUserWechat());
		map.put("userPhone", model.getUserPhone());
		map.put("userId", model.getUserId());
		map.put(RequestModel.SQLID,SysUserMapper.class.getName() + ".updUser");
		return this.update(map);
	}
	
}
