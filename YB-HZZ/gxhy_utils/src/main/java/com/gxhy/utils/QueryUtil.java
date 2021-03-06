package com.gxhy.utils;

import lombok.Data;

@Data
public class QueryUtil {
	
    private String keyWord;
	
	private String ids;
	
	private int index;
	
	private String pageindex; //分页起始
	
	private String limit; // 分页条数
	
	private String adLevel;//行政级别
	
	private String startTm;
	
	private String endTm;
	
	private String addvcd;
	
	private String rvCd;
}
