package com.gxhy.utils;
/**
 * 测站类型
 * @author yb
 *
 */
public class BasicSiteUtil {

	/**
	 *  MM-气象站,PP-雨量站,BB-蒸发站,ZQ-河道水文站,DD-堰闸水文站,ZZ-河道水位站,TT-潮位站,RR-水库水文站,DP-泵站,ZG-地下水站,SS-墒情站,ZB-分洪水位站
	 * @param adCd
	 * @return
	 */
	private static String sttpNm;
	
	public static String getSttpNm(String sttp) {
	    if(sttp.equals("MM")){
	    	sttpNm="气象站";
	    }else if(sttp.equals("PP")){
	    	sttpNm="雨量站";
	    }else if(sttp.equals("BB")){
	    	sttpNm="蒸发站";
	    }else if(sttp.equals("ZQ")){
	    	sttpNm="河道水文站";
	    }else if(sttp.equals("DD")){
	    	sttpNm="堰闸水文站";
	    }else if(sttp.equals("ZZ")){
	    	sttpNm="河道水位站";
	    }else if(sttp.equals("TT")){
	    	sttpNm="潮位站";
	    }else if(sttp.equals("RR")){
	    	sttpNm="水库水文站";
	    }else if(sttp.equals("ST")){
	    	sttpNm="山塘";
	    }else if(sttp.equals("SZ")){
	    	sttpNm="水质站";
	    }else if(sttp.equals("ZG")){
	    	sttpNm="地下水站";
	    }else if(sttp.equals("SS")){
	    	sttpNm="墒情站";
	    }else if(sttp.equals("ZB")){
	    	sttpNm="分洪水位站";
	    }else if(sttp.equals("SP")){
	    	sttpNm="视频站";
	    }else if(sttp.equals("SY")){
	    	sttpNm="水源地";
	    }else if(sttp.equals("PW")){
	    	sttpNm="排污口";
	    }else{}
	    
		 return sttpNm;
	}

}