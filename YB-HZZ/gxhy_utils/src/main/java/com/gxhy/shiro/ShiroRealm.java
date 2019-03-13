package com.gxhy.shiro;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import com.gxhy.base.mapper.BaseMapper;

/**
 * 自定义控制权限
 * @author yb
 * @Date 2018年7月24日下午3:03:16
 * @CopyRight gxhy_utils
 */
@SuppressWarnings("all")
public class ShiroRealm extends AuthorizingRealm{
	
	@Autowired
	private BaseMapper baseMapper;
	

	/**
	 * 用户认证
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
    	SimpleAuthenticationInfo simpleAuthent = new SimpleAuthenticationInfo(token.getUsername(), token.getPassword(), getName());
    	doGetAuthorizationInfo(simpleAuthent.getPrincipals());
        return simpleAuthent;  
	}


	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(
			PrincipalCollection principals) {
		// TODO Auto-generated method stub
		return null;
	}
	

}
