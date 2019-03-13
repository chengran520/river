package com.gxhy.base.model;
import java.util.Date;
import com.gxhy.base.imp.IsNeeded;
import lombok.Data;

/**
 * @author gxhy
 * @Date 2018年11月20日下午3:28:44
 * @CopyRight gxhy_base_service
 */

public class Permission {
	
	
	@IsNeeded
	private String permisId;//权限ID
	
	@IsNeeded
	private String permisNm;//权限名称
	
	@IsNeeded
	private String ppermisId;//父级权限Id
	
	@IsNeeded
	private String menuUrl;//权限菜单地址

	@IsNeeded
	private String  type;//类型，1：菜单，2：按钮
	
	@IsNeeded
	private String  imgUrl;//图标地址
	
	@IsNeeded
	private Integer sort;//排序
	
	@IsNeeded
	private String permisDes;//资源描述
	
	private Date createTime;//创建时间

    private Date updateTime;//更新时间

    private String pmenuIdName;//上级权限名称
    
	public String getPermisId() {
		return permisId;
	}

	public void setPermisId(String permisId) {
		this.permisId = permisId;
	}

	public String getPermisNm() {
		return permisNm.trim();
	}

	public void setPermisNm(String permisNm) {
		this.permisNm = permisNm;
	}

	public String getPpermisId() {
		return ppermisId;
	}

	public void setPpermisId(String ppermisId) {
		this.ppermisId = ppermisId;
	}

	public String getMenuUrl() {
		return menuUrl;
	}

	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}

	public String getType() {
		return type.trim();
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Integer getSort() {
		return sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}

	public String getPermisDes() {
		return permisDes;
	}

	public void setPermisDes(String permisDes) {
		this.permisDes = permisDes;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getPmenuIdName() {
		return pmenuIdName;
	}

	public void setPmenuIdName(String pmenuIdName) {
		this.pmenuIdName = pmenuIdName;
	}

    
}
