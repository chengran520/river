package com.gxhy.base.system.controller;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import lombok.extern.slf4j.Slf4j;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.imp.ImportExeclUtil;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.base.system.service.SysUserService;
import com.gxhy.shiro.SecurityUtil;
import com.gxhy.utils.AdcdUtil;
import com.gxhy.utils.DateUtil;
import com.gxhy.utils.MD5Util;
import com.gxhy.utils.PageUtil;
import com.gxhy.utils.QueryUtil;

/**
 * @author yb
 * @Date 2018年7月16日下午2:59:14
 * @CopyRight gxhy_base_service
 * 用户管理
 */
@Slf4j
@RestController
@RequestMapping("/system/user")
public class UserController extends BaseController{
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private SysUserService sysUserService;
	
	
	/***
	 * 增加以及修改用户
	 * @param request
	 * @param model
	 * @return
	 * @throws FileNotFoundException 
	 */
	@RequestMapping(value = "/insertUser",method = RequestMethod.POST)
	public Object  insertUser(HttpServletRequest request,UserModel model){	
		int i=0;
		if(StringUtils.isBlank(model.getUuid())){
			List<UserModel> list = new ArrayList<UserModel>();
			list.add(model);
			i = sysUserService.insertUserList(list);
		}else{
			i=sysUserService.updUser(model);
		}
	
		return ResponseModel.Success(i);
	}
	
	/***
     * 获取所有的用户信息
     * @param file
     * @param request
     * @param response
     * @return
     */
	@RequestMapping(value = "/getAllUser",method = RequestMethod.GET)
	public Object  getAllUser(HttpServletRequest request,QueryUtil model){
		JSONObject  map=getQueryMap(request,model);
		UserModel user = (UserModel) SecurityUtil.getSessionAttr("user");
		map.put("addvcd", model.getAddvcd());
		if(StringUtils.isNotBlank(model.getAddvcd())){
			map.put("adcd", model.getAddvcd());
		}else{
			String adcd=user.getUserAddvcd();
			if(StringUtils.isNotBlank(adcd)){
				adcd = AdcdUtil.getPrefixAdcd(adcd, false);
			}
			map.put("adcd", adcd);
		}
		
		Page<UserModel> page = sysUserService.getListUser(map);
		return PageUtil.success(page);
	}
	
	
	/***
     * 获取所有的用户信息
     * @param file
     * @param request
     * @param response
     * @return
     */
	@RequestMapping(value = "/deleteUser",method = RequestMethod.POST)
	public Object  deleteUser(HttpServletRequest request,QueryUtil model){
		int i=sysUserService.deleteUser(model);
		return ResponseModel.Success(i);
	}
	
	/***
     * 导入登录用户数据信息
     * @param file
     * @param request
     * @param response
     * @return
     */
	@RequestMapping(value = "/importUserInfo",method = RequestMethod.POST)
    public Object importUserInfo(HttpServletRequest request) {
			//导入操作
			String name = "";
			MultipartFile file=null;
			MultipartHttpServletRequest multiRequest=(MultipartHttpServletRequest)request;
	         Iterator iter=multiRequest.getFileNames(); 
	         while(iter.hasNext()){
	            file = multiRequest.getFile(iter.next().toString());
	            name = file.getOriginalFilename();
	         }
			List<UserModel> userList = ImportExeclUtil.exportInfo(file,name,new UserModel());
			int i = sysUserService.insertUserList(userList);
		    return ResponseModel.Success(i);   
    }
	
	/**
	 * 请求公用方法
	 * @param request
	 * @param model
	 * @return
	 */
	private JSONObject getQueryMap(HttpServletRequest request, QueryUtil model) {
		JSONObject map = new JSONObject();
		try {
			map = InitParams(model);
			RequestInitRanges(map,true,QueryUtil.class);
			map.put("keyWord", model.getKeyWord()!=null ? model.getKeyWord().trim():model.getKeyWord());
			map.put("startTm",model.getStartTm());
			map.put("endTm",model.getEndTm());
		}catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}
	
	@RequestMapping(value = "/updateUser",method = RequestMethod.GET)
	public Object  updateUser(HttpServletRequest request, String uuid, String userPasswd){
		int i=sysUserService.updateUser(uuid, userPasswd);
		return ResponseModel.Success(i);
	}

	
}
