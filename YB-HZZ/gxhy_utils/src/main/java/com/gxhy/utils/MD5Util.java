package com.gxhy.utils;

import java.io.ByteArrayOutputStream;
import java.security.MessageDigest;

/**
 * MD加密util工具包
 * @author yb
 * @2017年8月21日下午3:24:24   
 * @CopyRight gxhy
 */
public class MD5Util {
	
	 public final static String MD5(String s) {
	        char hexDigits[]={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};       

	        try {
	            byte[] btInput = s.getBytes();
	            // 获得MD5摘要算法的 MessageDigest 对象
	            MessageDigest mdInst = MessageDigest.getInstance("MD5");
	            // 使用指定的字节更新摘要
	            mdInst.update(btInput);
	            // 获得密文
	            byte[] md = mdInst.digest();
	            // 把密文转换成十六进制的字符串形式
	            int j = md.length;
	            char str[] = new char[j * 2];
	            int k = 0;
	            for (int i = 0; i < j; i++) {
	                byte byte0 = md[i];
	                str[k++] = hexDigits[byte0 >>> 4 & 0xf];
	                str[k++] = hexDigits[byte0 & 0xf];
	            }
	            return new String(str);
	        } catch (Exception e) {
	            e.printStackTrace();
	            return null;
	        }
	    }
	 
	 /**
	  * 自定义加密
	  * @param password
	  * @return
	  */
	 public final static String CustomMD5(String password) { 
		 if(password==null){
			 return null;
		 }
		 	String str="";
			str=password+reverse(password);
			for(int i=0;i<password.length();i++){
				str=MD5(str);
				String f=str.substring(0, 16);
				String l=str.substring(16, 32);
				str=l+f;
			}
			return str;
	 }
   
	private static byte[] base64DecodeChars = new byte[] { -1, -1, -1, -1, -1,  
         -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  
         -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  
         -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59,  
         60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  
         10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1,  
         -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,  
         38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1,  
         -1, -1 };  
	   
	 /** 
	  * 解密 
	  * @param str 
	  * @return 
	  */  
	 public static byte[] decode(String str) {  
	     byte[] data = str.getBytes();  
	     int len = data.length;  
	     ByteArrayOutputStream buf = new ByteArrayOutputStream(len);  
	     int i = 0;  
	     int b1, b2, b3, b4;  
	   
	     while (i < len) {  
	         do {  
	             b1 = base64DecodeChars[data[i++]];  
	         } while (i < len && b1 == -1);  
	         if (b1 == -1) {  
	             break;  
	         }  
	   
	         do {  
	             b2 = base64DecodeChars[data[i++]];  
	         } while (i < len && b2 == -1);  
	         if (b2 == -1) {  
	             break;  
	         }  
	         buf.write((int) ((b1 << 2) | ((b2 & 0x30) >>> 4)));  
	   
	         do {  
	             b3 = data[i++];  
	             if (b3 == 61) {  
	                 return buf.toByteArray();  
	             }  
	             b3 = base64DecodeChars[b3];  
	         } while (i < len && b3 == -1);  
	         if (b3 == -1) {  
	             break;  
	         }  
	         buf.write((int) (((b2 & 0x0f) << 4) | ((b3 & 0x3c) >>> 2)));  
	   
	         do {  
	             b4 = data[i++];  
	             if (b4 == 61) {  
	                 return buf.toByteArray();  
	             }  
	             b4 = base64DecodeChars[b4];  
	         } while (i < len && b4 == -1);  
	         if (b4 == -1) {  
	             break;  
	         }  
	         buf.write((int) (((b3 & 0x03) << 6) | b4));  
	     }  
	     return buf.toByteArray();  
	 	}  
 
	
	public static String reverse(String str) {
		return new StringBuilder(str).reverse().toString();
	}

	public static void main(String[] args) {
		String passWord="123456";
		String customMD5 = CustomMD5(MD5Util.MD5(passWord));
		System.out.println(customMD5);
		
	}

}

