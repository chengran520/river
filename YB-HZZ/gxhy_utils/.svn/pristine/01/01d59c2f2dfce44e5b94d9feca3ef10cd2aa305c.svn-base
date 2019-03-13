package com.gxhy.test;

import lombok.Data;

@Data
public class VideoModel {
	private String deviceSerial; //设备序列号
	
	private int channelNo; // 频道编号
	
	private String deviceName; //设备名称
	
	private String liveAddress; //HLS流畅直播地址
	
	private String hdAddress; //HLS高清直播地址
	
	private String rtmp; //RTMP流畅直播地址
	
	private String rtmpHd; //RTMP高清直播地址
	
	private int status; //地址使用状态：0-未使用或直播已关闭，1-使用中，2-已过期，3-直播已暂停，0状态不返回地址，其他返回
	
	private int exception; //地址异常状态：0-正常，1-设备不在线，2-设备开启视频加密，3-设备删除，4-失效，5-未绑定，6-账户下流量已超出，7-设备接入限制，0/1/2/6状态返回地址，其他不返回
}
