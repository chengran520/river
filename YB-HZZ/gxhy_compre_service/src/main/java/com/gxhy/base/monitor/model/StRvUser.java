package com.gxhy.base.monitor.model;

import lombok.Data;

/**
 * 河长对应河流
 * @author yb
 *
 */
@Data
public class StRvUser {
	
	//河流编码
	private String rvCd;
	//用户ID
	private String userId;
	//用户名称
	private String userNm;
	//河长手机号码
	private String userPhone;
	//用户性别
	private String sex;
	
}
