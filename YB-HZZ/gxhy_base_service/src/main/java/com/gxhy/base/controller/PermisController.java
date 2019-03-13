package com.gxhy.base.controller;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.mapper.PermissionMapper;
import com.gxhy.base.model.Permission;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.model.Ztree;
import com.gxhy.base.service.PermisService;
import com.gxhy.utils.PageUtil;
import com.gxhy.utils.QueryUtil;
/***
 * 权限管理
 * @author chengran
 *
 */
@RestController
@RequestMapping("system/menu")
@SuppressWarnings("all")
public class PermisController extends BaseController{

	private static final Logger logger = LoggerFactory.getLogger(PermisController.class);
	
	@Autowired
	private  PermisService  permisService;
	
	/***
     * 导入菜单信息
     * @param file
     * @param request
     * @param response
     * @return
     */
	@RequestMapping(value = "/importMenuFile",method = RequestMethod.POST)
    public Object importMenuFile(HttpServletRequest request) {
		//导入操作
		String name = "";
		MultipartFile file=null;
		MultipartHttpServletRequest multiRequest=(MultipartHttpServletRequest)request;
        Iterator iter=multiRequest.getFileNames(); 
        while(iter.hasNext()){
            file = multiRequest.getFile(iter.next().toString());
         }
		int i=permisService.importMenuFile(file);
	    return ResponseModel.Success(i);   
    }
	
	/***
	 * 获取全部的菜单信息
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/getAllMenu",method = RequestMethod.GET)
	public Object  getAllMenu(HttpServletRequest request,QueryUtil model){
		JSONObject map = new JSONObject();
		map.put("keyWord", model.getKeyWord());
		Page<Permission> page = permisService.getListMenus(map);
		return PageUtil.success(page);
	}
	
	/***
	 * 删除菜单信息
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/deleteMenu",method = RequestMethod.POST)
	public Object deleteMenu(HttpServletRequest request,QueryUtil model){
		int i=permisService.deleteMenu(model);
		return ResponseModel.Success(i);   
	}
	
	
	/***
	 * 获取权限树
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/getAllPermission",method = RequestMethod.GET)
	public ResponseModel<Map<String, Object>> getAllPermission(QueryUtil model){
		JSONObject map = new JSONObject();
		Map<String, Object> maps=permisService.getAllPermission(map,model);
		return ResponseModel.Success(maps);    
	}
	
	/**
	 * 保存菜单
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/saveMenu", method = RequestMethod.POST)
	public Object saveMenu(Permission model,int ptype){
		 int i=permisService.saveMenu(model,ptype);		 
		 return ResponseModel.Success(i);
		
	}
}
