package com.gxhy.base.basic.model;

import java.util.Date;

import lombok.Data;

/**
 *  字典表
 * @author cr
 *
 */
@Data
public class DictModel {
  
	private String dictNm;//字典名称
	
	private String dictVal;//字典值
	
	private String dictTp;//字典类型
	
	private Date  createTm;//创建时间
	
	private Date  updateTm;//更新时间
	
	private String content;//字典内容

}
