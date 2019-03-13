package com.gxhy.base.model;
import com.alibaba.fastjson.annotation.JSONField;

public class ZtreeMenu {
  
	private String id;

	private String pId;
	
	private String name;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	@JSONField(name="pId")
	public String getpId() {
		return pId;
	}

	public void setpId(String pId) {
		this.pId = pId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
