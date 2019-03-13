package com.gxhy.base.basic.model;

import java.util.Date;

import org.apache.commons.lang3.StringUtils;

/**
 * 事件类
 * @author chengran
 *
 */
public class BusineModel {
	
	private String busineId;//事件id
	
	private String originId;//来源       巡河事件id,  公众举报id
	 
	private String busineOrigin;//来源  日常巡河--rcxh  公众举报--gzjb   执法监管--zfjg
	
	private String busineType;//事件类型01-09
	
	private String busineTypeNm;//上报类型名称
	
	private String busineAddress;//事件上报地址
	
	private Date createTm;//事件创建时间
	
	private Date updateTm;//事件更新时间
	
	private String busineStatus;//事件状态   1 待处理  2处理中   3处理完成    4无效    5转为执法
	
	private String busineStatusNm;

	private String busineUid;//事件上报人
	
	private String busineUnm;//事件上报人名称
	
	private String busineDesc;//事件描述
	
	private String handleUserId;//事件处理人
	
	private String lastHandleUserId;//上次处理人id
	
	private String lastHandleUserNm;//上次处理人
	
	private Date   handleTm;//处理时间
	
	private String status;//流程状态    1为未开始,2退回,3 转交,4 已处理,5无效
	
	private String handleView;//处理意见 
	
	private String reportUrl;//上报图片
	
	private String url;//所有图片
	
	private String handleUserIdOne;
	
	private String workFlowId;
	
	private int count;
	
	// 分页的字段
	private Integer limit;
	
	private Integer pageindex;
		
	public String getBusineId() {
		return busineId;
	}
	public void setBusineId(String busineId) {
		this.busineId = busineId;
	}
	public String getOriginId() {
		return originId;
	}
	public void setOriginId(String originId) {
		this.originId = originId;
	}
	public String getBusineOrigin() {
		return busineOrigin;
	}
	public void setBusineOrigin(String busineOrigin) {
		this.busineOrigin = busineOrigin;
	}
	public String getBusineType() {
		return busineType;
	}
	public void setBusineType(String busineType) {
		this.busineType = busineType;
	}
	public String getBusineAddress() {
		return busineAddress;
	}
	public void setBusineAddress(String busineAddress) {
		this.busineAddress = busineAddress;
	}
	public Date getCreateTm() {
		return createTm;
	}
	public void setCreateTm(Date createTm) {
		this.createTm = createTm;
	}
	public String getBusineStatus() {
		return busineStatus;
	}
	public void setBusineStatus(String busineStatus) {
		this.busineStatus = busineStatus;
	}
	public String getBusineUid() {
		return busineUid;
	}
	public void setBusineUid(String busineUid) {
		this.busineUid = busineUid;
	}
	public String getBusineDesc() {
		return busineDesc;
	}
	public void setBusineDesc(String busineDesc) {
		this.busineDesc = busineDesc;
	}
	public String getHandleUserId() {
		return handleUserId;
	}
	public void setHandleUserId(String handleUserId) {
		this.handleUserId = handleUserId;
	}
	public String getLastHandleUserId() {
		return lastHandleUserId;
	}
	public void setLastHandleUserId(String lastHandleUserId) {
		this.lastHandleUserId = lastHandleUserId;
	}
	public Date getHandleTm() {
		return handleTm;
	}
	public void setHandleTm(Date handleTm) {
		this.handleTm = handleTm;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getHandleView() {
		return handleView;
	}
	public void setHandleView(String handleView) {
		this.handleView = handleView;
	}
	public String getBusineStatusNm() {
		if(StringUtils.isNotBlank(busineStatus)){
			switch (busineStatus) {
			case "1":
				busineStatusNm="未处理";
				break;
			case "2":
				busineStatusNm="处理中";
				break;
			case "3":
				busineStatusNm="已处理";
				break;
			case "4":
				busineStatusNm="无效";
				break;
			case "5":
				busineStatusNm="执法";
				break;	
			default:
				break;
			}
		}
		return busineStatusNm;
	}
	public void setBusineStatusNm(String busineStatusNm) {
		this.busineStatusNm = busineStatusNm;
	}
	public String getLastHandleUserNm() {
		return lastHandleUserNm;
	}
	public void setLastHandleUserNm(String lastHandleUserNm) {
		this.lastHandleUserNm = lastHandleUserNm;
	}
	public String getReportUrl() {
		return reportUrl;
	}
	public void setReportUrl(String reportUrl) {
		this.reportUrl = reportUrl;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Date getUpdateTm() {
		return updateTm;
	}
	public void setUpdateTm(Date updateTm) {
		this.updateTm = updateTm;
	}
	public String getHandleUserIdOne() {
		return handleUserIdOne;
	}
	public void setHandleUserIdOne(String handleUserIdOne) {
		this.handleUserIdOne = handleUserIdOne;
	}
	public String getBusineTypeNm() {
		return busineTypeNm;
	}
	public void setBusineTypeNm(String busineTypeNm) {
		this.busineTypeNm = busineTypeNm;
	}
	public String getWorkFlowId() {
		return workFlowId;
	}
	public void setWorkFlowId(String workFlowId) {
		this.workFlowId = workFlowId;
	}
	public String getUrl() {
		return url;
	}
	public String getBusineUnm() {
		return busineUnm;
	}
	public void setBusineUnm(String busineUnm) {
		this.busineUnm = busineUnm;
	}
	public Integer getLimit() {
		return limit;
	}
	public void setLimit(Integer limit) {
		this.limit = limit;
	}
	public Integer getPageindex() {
		return pageindex;
	}
	public void setPageindex(Integer pageindex) {
		this.pageindex = pageindex;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
}
