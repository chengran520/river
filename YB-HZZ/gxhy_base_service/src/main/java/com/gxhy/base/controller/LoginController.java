package com.gxhy.base.controller;
import java.awt.Color;
import java.awt.Menu;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections.map.HashedMap;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.mapper.BaseUsersMapper;
import com.gxhy.base.model.Permission;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.base.service.AppProxyService;
import com.gxhy.base.utils.VerifyCodeUtil;
import com.gxhy.shiro.SecurityUtil;
import com.gxhy.utils.Constants;
import com.gxhy.utils.MD5Util;

/**
 * 用户登陆
 * @author yb
 * @2017年8月5日下午4:34:58   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("base/login")
@SuppressWarnings("all")
public class LoginController extends BaseController{
	
	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	private BaseMapper baseMapper;
	
	@Autowired
	private AppProxyService appProxyService;
	
	/**
	 * 用户登陆
	 * @author yb
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public Object login(HttpServletRequest request) throws Exception {
		//生成验证码
		 String gentCode = (String) request.getSession().getAttribute("verifyCode");
		 //输入验证码
		 String inptCode = request.getParameter("verifyCode");
		 boolean flag = this.isVerifyCode(gentCode, inptCode);
		 if(!flag){
			 return ResponseModel.Failure("验证码输入不正确！");
		 }
		 //用户名
		 String loginName = request.getParameter("loginName");
		 //密码
		 String loginPasswd = request.getParameter("loginPasswd");
		 //密码加密
		 loginPasswd=MD5Util.CustomMD5(loginPasswd);
		 JSONObject paramMap = new JSONObject();		
		 paramMap.put("userId", loginName);
		 paramMap.put("userPwd", loginPasswd);
		 paramMap.put(RequestModel.SQLID, BaseUsersMapper.class.getName() + ".isUsersShiro");
	     UserModel user = (UserModel) baseMapper.selectOne(paramMap);
	     if(user == null){
	    	 return ResponseModel.Failure("账号信息输入有误，请确认检查！");
	     }else{
    	     Subject currentUser = SecurityUtils.getSubject(); 
    	     logger.info("开始验证用户名："+loginName+"密码："+loginPasswd);
    	     //通过shiro进行安全权限认证
    	     UsernamePasswordToken token = new UsernamePasswordToken(loginName, loginPasswd); 
    	     currentUser.login(token);
    	     if(currentUser.isAuthenticated()){ 
    	    	logger.info("验证用户信息成功,跳转页面！");
    	    	currentUser.getSession().setAttribute(Constants.CURRENT_USER, user);
	            request.getSession().setAttribute("user", user);
	            ResponseModel rm = ResponseModel.Success( "/main.jsp" );
	            return rm;
    	     } 
	     }
	     return ResponseModel.Failure("登陆失败，请检查用户名和密码是否正确，网络是否连接！");
    }
	
	/**
	 *  获取验证码图片和文本(验证码文本会保存在HttpSession中) 
	 * @param request
	 * @param response
	 * @throws IOException
	 */
    @RequestMapping("/getVerifyCodeImage") 
    public void VerifyCodeImage(HttpServletRequest request, HttpServletResponse response) throws IOException {  
        //设置页面不缓存  
        response.setHeader("Pragma", "no-cache");  
        response.setHeader("Cache-Control", "no-cache");  
        response.setDateHeader("Expires", 0);  
        String verifyCode = VerifyCodeUtil.generateTextCode(VerifyCodeUtil.TYPE_NUM_ONLY, 4, null);  
        //将验证码放到HttpSession里面  
        request.getSession().setAttribute("verifyCode", verifyCode);  
        //设置输出的内容的类型为JPEG图像  
        response.setContentType("image/jpeg");  
        Color color = new Color(255,255,255);
        BufferedImage bufferedImage = VerifyCodeUtil.generateImageCode(verifyCode, 90, 30, 3, true, color, null, null);  
        //写给浏览器  
        ImageIO.write(bufferedImage, "JPEG", response.getOutputStream());  
    } 
    
    /**
     * 验证码验证
     * @param gentCode
     * @param inptCode
     * @return
     */
    private boolean isVerifyCode(String gentCode,String inptCode){
    	if(gentCode.equals(inptCode)){
    		return true;
    	}
    	return false;
    }
    
    /**
     * 获取用户的菜单信息
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping("/getUserMenuInfo") 
    public Object getUserMenuInfo(HttpServletRequest request, HttpServletResponse response) throws Exception{   	
    	String menuId = request.getParameter("menuId");   	
    	List<Permission> menuList=appProxyService.getHeadMenu(menuId);
    	List<Permission> headMenus=new ArrayList<Permission>();//表示导航菜单
    	List<Permission> leftMenus=new ArrayList<Permission>();//表示子菜单
    	List<Permission> pers=new ArrayList<Permission>();//表示权限集合
    	for(Permission per:menuList){
    		if(per.getType().trim().equals("0")){//表示菜单
    			if(per.getPpermisId().equals("-1")){
    				headMenus.add(per);
    			}else{
    				leftMenus.add(per);
    			}
    		}else{
    			pers.add(per);
    		}
    	}
    	Map<String, Object> maps=new HashedMap();
    	maps.put("headMenus", headMenus);
    	maps.put("leftMenus",leftMenus);
    	maps.put("pers",pers);
    	return ResponseModel.Success(maps);
    }
    
    /**
     * 用户注销
     * @param request
     * @return
     */
   
    @RequestMapping(value = "/user/logout", method = RequestMethod.GET) 
    public Object logOut(HttpServletRequest request){
    	SecurityUtil.removeSessionUser(request);
    	return ResponseModel.Success("用户注销成功！");
    }
}
