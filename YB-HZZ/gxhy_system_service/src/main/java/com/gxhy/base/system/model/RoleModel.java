package com.gxhy.base.system.model;
import java.util.Date;

import com.gxhy.base.imp.IsNeeded;

import lombok.Data;

@Data
public class RoleModel {
	
    @IsNeeded
	private String roleId;//角色id
    
    @IsNeeded
    private String roleName;//角色名称
    
    @IsNeeded
    private String roleDes;//角色描述

    private Date createTime;//创建时间

    private Date updateTime;//更新时间
    
}
