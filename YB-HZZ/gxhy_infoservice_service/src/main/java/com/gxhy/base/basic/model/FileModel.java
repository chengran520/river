package com.gxhy.base.basic.model;

import java.util.Date;

import lombok.Data;

/**
 * 文件管理类
 * @author chengran
 *
 */
@Data
public class FileModel {

	private String fileId;//文件id
	
	private String fileName;//文件名称
	
	private String fileSymbol;//文件文号
	
	private String fileType;//文件类型（1.河长会议制度，2:信息报送制度，3工作督察制度，4工作方案，5考核问责与激励制度,6验收制度,7信息共享制度,8河长巡河制度,9联席会议制度,10河长制办公室专门机构设立文件,11多项制度合发,12通知,13会议纪要,14工作报告,15领导批示,16一河（湖）一策,17其它）
	
	private Date creteTm;//文件印发时间
	
	private String fileOrg;//发文机构
	
	private String fileAttrType;//归属类型
	
	private String remark;//备注
		
	private String fileUrl;//文件地址
	
	private String fileUser;//发问者
	
	private String fileTypeNm;//文件类型
	// 分页的字段
	private Integer limit;
	
	private Integer pageindex;
}
