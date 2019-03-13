package com.gxhy.base.system.service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.imp.ImportExeclUtil;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.Ztree;
import com.gxhy.base.system.mapper.RoleMapper;
import com.gxhy.base.system.mapper.SysUserMapper;
import com.gxhy.base.system.model.RoleModel;
import com.gxhy.utils.QueryUtil;

@SuppressWarnings("all")
@Service
public class RoleService extends  BaseMapper{
   /**
    * 获取所有的角色信息
    * @param map
    * @return
    */
	public Page<RoleModel> getListRoles(JSONObject map) {
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".getAllRole");
		return   this.selectList(map);
	}
    /**
     * 新增或修改角色信息通用方法
     * @param file
     * @param type 为1表示新增，为2表示修改，在新增中file不为空代表文件上传新增，file为空为用户自己填写新增
     * @return
     */
	public int importFileRole(MultipartFile file,RoleModel mod, int type){ 	
		
		JSONObject map = new JSONObject();
		List<RoleModel>  roleList=new ArrayList<RoleModel>();
		if(type==1){
			if(file!=null){//上传文件新增方式
				String name = file.getOriginalFilename();
				roleList=ImportExeclUtil.exportInfo(file,name,new RoleModel());
			}else{
				roleList.add(mod);//自己填写新增方式
			}		
			for(RoleModel  model:roleList){
				model.setCreateTime(new Date());
				model.setUpdateTime(new Date());		
			}
			map.put("list", roleList);
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".insertRole");				
			return this.insert(map);
		}else{
			map.put("roleId", mod.getRoleId());
			map.put("roleName", mod.getRoleName());
			map.put("roleDes", mod.getRoleDes());
			map.put("updateTm",new Date());
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".updateRole");	
			return this.update(map);
		}
		
	}
    /**
     * 删除角色信息
     * @param model
     * @return
     */
	public int deleteRole(QueryUtil model) {
		JSONObject map = new JSONObject();
		List<String> list= Arrays.asList(model.getIds().split(","));
		map.put("list", list);
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".deleteRoles");
		return this.delete(map);
	}
    /**
     * 保存角色和权限
     * @param model
     * @return
     */
	public int saveRolePers(QueryUtil model) {
		JSONObject map = new JSONObject();
		List<String> list= Arrays.asList(model.getIds().split(","));
		map.put("list", list);
		map.put("roleId", model.getKeyWord());
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".deleteRolePers");
		int num=this.delete(map);
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".saveRolePers");
		return this.insert(map);
	}
    /**
     * 获取所有的角色以及获取当前用户拥有的角色
     * @param map
     * @param model
     * @return
     */
	public Map<String, Object> getAllRoles(JSONObject map, QueryUtil model) {
		//不需要查询全部
	    Map<String, Object> maps = new HashMap<String, Object>();
		String userId=model.getKeyWord();
		map.put("userId", userId);
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".selectRolesByUserId");
		List<String>  roleIds= this.selectLists(map);
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".getRoleZtree");
		List<Ztree>  roles= this.selectLists(map);
		for(Ztree mod:roles){
			mod.setpId("-1");
		}
		maps.put("pers", roleIds);
		maps.put("roles", roles);
		return maps;
	}
   /**
    * 保存用户和角色的关系
    * @param model
    * @return
    */
	public int saveUserRoles(QueryUtil model) {
		JSONObject map = new JSONObject();
		List<String> list= Arrays.asList(model.getIds().split(","));//角色集合
		map.put("list", list);
		map.put("userId", model.getKeyWord());
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".deleteUserRoles");
		int num=this.delete(map);
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".saveUserRoles");
		return this.insert(map);
	}


}
