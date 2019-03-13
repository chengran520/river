package com.gxhy.base.basic.model;
import java.util.Date;
import com.gxhy.base.imp.IsNeeded;
import com.gxhy.utils.StringUtil;

import lombok.Data;


@Data
public class RiverLongModel {
	@IsNeeded
	private String  gmName;//河长名称
	
	@IsNeeded
	private String  gmDuties;//河长职务
	
	@IsNeeded
	private String  addvcd;//所属行政区编码
	
	@IsNeeded
	private String  addvnm;//所属行政区名称
	
	@IsNeeded
	private String  gmMobile;//手机号码
	
	@IsNeeded
	private String  adLevel;//行政级别（1:省级;2:副省级;3:地市级;4:副地市级;5:县级;6:副县级;7:科级;8:副科级;9:股级;10:副股级;99其他;）
	
	@IsNeeded
	private String  gmType;//河长类型
	
	@IsNeeded
	private String  nt;//备注
	
	@IsNeeded
	private String  gmDutiesLev;//主要领导（1:党委主要领导;2:政府主要领导;3:人大主要领导;4:政协主要领导;9:其他）
	
	@IsNeeded
	private String  hightDutiesGov;//最高职务所在单位名称
	
	@IsNeeded
	private String  govType;//单位类别（1:党委、政府;2:人大、政协;9:其他）
	
	@IsNeeded
	private Date    effDate;//生效时间
	
	
	private String  gmTp;//河长类型（1河长2湖长3库长4塘长）
    

	private String  gmCode;



	public String getAdLevel(){
		String adle = "";
		if(StringUtil.isNotBlank(this.adLevel)){
			adle = adLevel.trim();//去除首尾空格
		}
		return adle;
		
	}
	
	public String getGmDutiesLev(){
		String adle = "";
		if(StringUtil.isNotBlank(this.gmDutiesLev)){
			adle = gmDutiesLev.trim();//去除首尾空格
		}
		return adle;
		
	}
	public String getGovType(){
		String adle = "";
		if(StringUtil.isNotBlank(this.govType)){
			adle = govType.trim();//去除首尾空格
		}
		return adle;
		
	}
	public String getGmTp(){
		String adle = "";
		if(StringUtil.isNotBlank(this.gmTp)){
			adle = gmTp.trim();//去除首尾空格
		}
		return adle;
	}
	public String getGmType(){
		String adle = "";
		if(StringUtil.isNotBlank(this.gmType)){
			adle = gmType.trim();//去除首尾空格
		}
		return adle;
	}
}
