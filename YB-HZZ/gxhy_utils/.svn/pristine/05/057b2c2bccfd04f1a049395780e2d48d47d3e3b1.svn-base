package com.gxhy.utils;

public class SttpUtils {
	
	/**
	 *  站类型转换
	 * @param sttp,devid
	 * @return sttpNm
	 */
	public static String getSttpNm(String sttp,String devid) {
		String sttpNm="";
		if("TB".equals(sttp) && "00".equals(devid.substring(0, 2))){
			sttpNm= "水位感应站";
		}else if("TG".equals(sttp) && "00".equals(devid.substring(0, 2))){
			sttpNm= "雨水图像站";
		}else if("ZP".equals(sttp) && "00".equals(devid.substring(0, 2))){
			sttpNm= "雨水一体站";
		}else if("GB".equals(sttp) && "02".equals(devid.substring(0, 2))){
			sttpNm= "呼叫器室外站";
		}else if("LD".equals(sttp) && "03".equals(devid.substring(0, 2))){
			sttpNm= "1x2双色屏";
		}else if("LQ".equals(sttp) && "04".equals(devid.substring(0, 2))){
			sttpNm= "全彩屏";
		}else if("LC".equals(sttp) && "04".equals(devid.substring(0, 2))){
			sttpNm= "全彩屏";
		}else if("BB".equals(sttp) && "07".equals(devid.substring(0, 2))){
			sttpNm= "入户报警器（专业版）";
		}else if("TD".equals(sttp) && "09".equals(devid.substring(0, 2))){
			sttpNm= "雨水视频站";
		}else if("PP".equals(sttp) && "11".equals(devid.substring(0, 2))){
			sttpNm= "简易雨量站";
		}else if("ZZ".equals(sttp) && "12".equals(devid.substring(0, 2))){
			sttpNm= "简易水位站";
		}else if("LE".equals(sttp) && "13".equals(devid.substring(0, 2))){
			sttpNm= "2x3双色屏";
		}else if("GP".equals(sttp) && "14".equals(devid.substring(0, 2))){
			sttpNm= "声光报警站";
		}else if("TW".equals(sttp) && "16".equals(devid.substring(0, 2))){
			sttpNm= "一对多室外站";
		}else if("RH".equals(sttp) && "17".equals(devid.substring(0, 2))){
			sttpNm= "入户报警器（家庭版）";
		}else if("WB".equals(sttp) && "18".equals(devid.substring(0, 2))){
			sttpNm= "无线预警广播";
		}else if("GX".equals(sttp) && "19".equals(devid.substring(0, 2))){
			sttpNm= "国信盒子";
		}else if("CS".equals(sttp) && "20".equals(devid.substring(0, 2))){
			sttpNm= "预警全彩屏";
		}else if("LS".equals(sttp) && "20".equals(devid.substring(0, 2))){
			sttpNm= "预警单色屏";
		}else if("LN".equals(sttp) && "21".equals(devid.substring(0, 2))){
			sttpNm= "内涝站牌";
		}else{
			sttpNm= "暂未规定";
		}
		return sttpNm;
		
	}
}
