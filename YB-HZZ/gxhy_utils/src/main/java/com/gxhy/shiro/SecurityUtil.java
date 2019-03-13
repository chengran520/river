package com.gxhy.shiro;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;

import com.gxhy.base.model.UserModel;
import com.gxhy.utils.Constants;

/**
 * session用户管理
 * @author gxhy
 * @Date 2018年11月14日下午5:33:13
 * @CopyRight gxhy_utils
 */
public class SecurityUtil {
	
	/**
	 * 获取当前用户信息
	 * @return
	 */
	public static UserModel getSessionUser(){
		UserModel user = (UserModel) getSessionAttr(Constants.CURRENT_USER);
		if(user != null){
			return user;
		}else{
			return null;
		}
	}
	
	/**
	 * 通过传值 获取session信息
	 * @param key
	 * @return
	 */
	public static Object getSessionAttr(String key) {
		Subject subject = SecurityUtils.getSubject();
		if(subject!=null){
			return subject.getSession().getAttribute(key);
		}else{
			return null;
		}
	}
	
	/**
	 * 清空当前用户信息
	 */
	public static void removeSessionUser(HttpServletRequest request){
		Subject subject = SecurityUtils.getSubject();
		subject.getSession().removeAttribute(Constants.CURRENT_USER);
		request.getSession().removeAttribute(Constants.CURRENT_USER);
		subject.getSession().removeAttribute(Constants.CURRENT_USER);
	}
	
	/**
	 * 清空当前用户信息
	 */
	public static void removeSessionUser(){
		Subject subject = SecurityUtils.getSubject();
		subject.getSession().removeAttribute(Constants.CURRENT_USER);
		subject.getSession().removeAttribute(Constants.CURRENT_USER);
	}
	
}
