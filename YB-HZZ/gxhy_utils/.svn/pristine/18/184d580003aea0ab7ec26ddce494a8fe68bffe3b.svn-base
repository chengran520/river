package com.gxhy.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.codec.binary.Base64;

public class Encodes {
	
	public static byte[] decodeBase64(String input) {
	   return Base64.decodeBase64(input.getBytes());
	}
		
	 public static String getImgStr(String imgFile){
         //将图片文件转化为字节数组字符串，并对其进行Base64编码处理        
         InputStream in = null;
         byte[] data = null;
         //读取图片字节数组
         try 
         {
        	 File file = new File(imgFile);  
             if(!file.exists()){  
                 return null;
             }  
             in = new FileInputStream(imgFile);        
             data = new byte[in.available()];
             in.read(data);
             in.close();
         } catch (IOException e) {
             e.printStackTrace();
         }
         String a="data:image/png;base64,"+new String(Base64.encodeBase64(data));
         return a;
      }
}
