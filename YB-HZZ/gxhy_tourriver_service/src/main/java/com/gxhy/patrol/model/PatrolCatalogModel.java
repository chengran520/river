package com.gxhy.patrol.model;

import java.text.DecimalFormat;
import java.util.Date;
import org.apache.commons.lang3.StringUtils;

/**
 * 河道巡查记录表
 * @author yb
 * @2017年7月28日上午11:22:03   
 * @CopyRight gxhy
 */
public class PatrolCatalogModel {
	
	private String uuid;
	
	private String patrolId; //巡河ID
	
	//巡查时间
	private Date patrolTm;
	
	//巡查时间和结束时间String类型
	private String sPatrolTm;
	
	private String sPatrolEndTm;
	
	//巡查结束时间
	private Date patrolEndTm;
	
	//巡查人员
	private String patrolUid;
	
	//巡查人员的名称
	private String patrolUName;
	
	//巡查起点
	private String patrolStartPoint;
	
	//巡查终点
	private String patrolEndPoint;
	
	//巡查速度
	private String patrolSpeed;
	
	//巡查里程
	private String patrolMileage;
	
	//巡检时长
	private String patrolTmLt;
	
	//巡查问题描述
	private String patrolDesc;
	
	//问题出现地址
	private String descAddress;
	
	//上报上级人员
	private String reportPUid;
	
    //上报上级人员名称
	private String reportPUName;
	
	//是否执法
	private String lawProcess;
	
	//审核状态
	private String auditStatus;
	
	//巡检人员行政区编码
	private String patroAdcd;
	
	//巡检人员行政区编码
	private String patroAddvnm;
	
	//巡检轨迹
	private String patrolPath;
	
	private String riverNm; //河流名称
	private String riverId; //河流编号
	

	public String getPatrolTmLt() {
		return patrolTmLt;
	}

	public void setPatrolTmLt(String patrolTmLt) {
		this.patrolTmLt = patrolTmLt;
	}

	public Date getPatrolTm() {
		return patrolTm;
	}

	public void setPatrolTm(Date patrolTm) {
		this.patrolTm = patrolTm;
	}

	public String getPatroAdcd() {
		return patroAdcd;
	}

	public void setPatroAdcd(String patroAdcd) {
		this.patroAdcd = patroAdcd;
	}
	// 分页的字段
	private Integer limit;
	private Integer pageindex;

	public String getPatrolSpeed() {
		if(StringUtils.isNotBlank(patrolMileage) && StringUtils.isNotBlank(patrolTmLt)){
			Double mileage = Double.valueOf(patrolMileage);
			Double tmlt = Double.valueOf(patrolTmLt);
			DecimalFormat df = new DecimalFormat("##0.00");
			if(tmlt == 0){
				tmlt = 1.0;
			}
			this.patrolSpeed = String.valueOf(df.format(mileage / tmlt));
		}
		return patrolSpeed;
	}

	public void setPatrolSpeed(String patrolSpeed) {
		this.patrolSpeed = patrolSpeed;
	}

	public String getPatrolMileage() {
		return patrolMileage;
	}

	public void setPatrolMileage(String patrolMileage) {
		this.patrolMileage = patrolMileage;
	}

	public String getPatrolDesc() {
		return patrolDesc;
	}

	public void setPatrolDesc(String patrolDesc) {
		this.patrolDesc = patrolDesc;
	}

	public String getDescAddress() {
		return descAddress;
	}

	public void setDescAddress(String descAddress) {
		this.descAddress = descAddress;
	}

	public String getLawProcess() {
		return lawProcess;
	}

	public void setLawProcess(String lawProcess) {
		this.lawProcess = lawProcess;
	}

	public String getAuditStatus() {
		return auditStatus;
	}

	public void setAuditStatus(String auditStatus) {
		this.auditStatus = auditStatus;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	
	public String getPatrolPath() {
		return patrolPath;
	}

	public void setPatrolPath(String patrolPath) {
		this.patrolPath = patrolPath;
	}

	public String getPatrolUid() {
		return patrolUid;
	}

	public void setPatrolUid(String patrolUid) {
		this.patrolUid = patrolUid;
	}

	public Date getPatrolEndTm() {
		return patrolEndTm;
	}

	public void setPatrolEndTm(Date patrolEndTm) {
		this.patrolEndTm = patrolEndTm;
	}

	public String getPatroAddvnm() {
		return patroAddvnm;
	}

	public void setPatroAddvnm(String patroAddvnm) {
		this.patroAddvnm = patroAddvnm;
	}

	public String getReportPUid() {
		return reportPUid;
	}

	public void setReportPUid(String reportPUid) {
		this.reportPUid = reportPUid;
	}

	public String getReportPUName() {
		return reportPUName;
	}

	public void setReportPUName(String reportPUName) {
		this.reportPUName = reportPUName;
	}

	public String getPatrolUName() {
		return patrolUName;
	}

	public void setPatrolUName(String patrolUName) {
		this.patrolUName = patrolUName;
	}

	public String getsPatrolTm() {
		return sPatrolTm;
	}

	public void setsPatrolTm(String sPatrolTm) {
		this.sPatrolTm = sPatrolTm;
	}

	public String getsPatrolEndTm() {
		return sPatrolEndTm;
	}

	public void setsPatrolEndTm(String sPatrolEndTm) {
		this.sPatrolEndTm = sPatrolEndTm;
	}

	public String getPatrolStartPoint() {
		return patrolStartPoint;
	}

	public void setPatrolStartPoint(String patrolStartPoint) {
		this.patrolStartPoint = patrolStartPoint;
	}

	public String getPatrolEndPoint() {
		return patrolEndPoint;
	}

	public void setPatrolEndPoint(String patrolEndPoint) {
		this.patrolEndPoint = patrolEndPoint;
	}

	public String getRiverNm() {
		return riverNm;
	}

	public void setRiverNm(String riverNm) {
		this.riverNm = riverNm;
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

	public String getRiverId() {
		return riverId;
	}

	public void setRiverId(String riverId) {
		this.riverId = riverId;
	}

	public String getPatrolId() {
		return patrolId;
	}

	public void setPatrolId(String patrolId) {
		this.patrolId = patrolId;
	}
	
}
