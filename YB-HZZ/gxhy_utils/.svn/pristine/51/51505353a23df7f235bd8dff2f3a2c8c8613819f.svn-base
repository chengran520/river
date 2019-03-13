package com.gxhy.utils;

import java.util.List;

import com.github.pagehelper.Page;

import lombok.Data;

@Data
public class PageUtil<T> {

	// bootstrap 分页
	private Integer page; // 第几页
	private Long total; // 总记录数
	private List<T> rows; // 所有的数据
	private String result;
	private String msg;
	// 设置pageSize，page
	public static PageUtil success(Page page){
		PageUtil pa = new PageUtil<>();
		pa.setPage(page.getPageNum());
		pa.setTotal(page.getTotal());
		pa.setRows(page.getResult());
		pa.setResult("success");
		return pa;
	}
}
