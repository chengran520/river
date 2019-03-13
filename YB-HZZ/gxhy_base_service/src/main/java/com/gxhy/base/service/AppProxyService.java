package com.gxhy.base.service;
import java.awt.Menu;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.mapper.BaseMapper;
import com.gxhy.base.mapper.PermissionMapper;
import com.gxhy.base.model.Permission;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.shiro.SecurityUtil;
/**
 * 菜单功能
 * @author yb
 * @2017年9月8日上午9:14:15   
 * @CopyRight gxhy
 */
@SuppressWarnings({"all"})
@Service
public class AppProxyService extends BaseMapper {
	
	/**
	 * 获取权限菜单功能
	 * @return
	 * @throws Exception
	 */
	public List<Permission> getHeadMenu(String menuId) throws Exception{
		UserModel user = SecurityUtil.getSessionUser();
		if(user != null){		
			if(!StringUtils.isNotBlank(menuId)){
				menuId = "-1";
			}
			List<Permission> listData = getMenuDataFromCache(user.getUserId(),menuId);
			return listData;
		}else{
			SecurityUtil.removeSessionUser();
			SecurityUtils.getSubject().getSession().removeAttribute("username");
			return null;
		}
	}	
	/**
	 * 当前用户所有的权限菜单
	 * @param userId
	 * @return
	 */
	private List<Permission> getMenuDataFromCache(String userId,String menuId){
		//分别获取信息
		JSONObject js= new JSONObject();
		String sqlId= PermissionMapper.class.getName()+".getMenuPageById";
		js.put(RequestModel.SQLID, sqlId);
		js.put("userId", userId);
		js.put("menuId", menuId);
		List<Permission> listData=  (List<Permission>)this.selectLists(js);
		return listData; 
	}
	
	
}
