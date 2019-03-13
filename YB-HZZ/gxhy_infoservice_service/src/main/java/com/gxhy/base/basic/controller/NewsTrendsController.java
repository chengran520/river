package com.gxhy.base.basic.controller;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.basic.model.FileModel;
import com.gxhy.base.basic.model.MsgModel;
import com.gxhy.base.basic.service.NewsTrendsService;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.utils.DateUtil;
import com.gxhy.utils.PageUtil;
import com.gxhy.utils.ReadApplicationUntil;

/**
 * 新闻动态
 * @author cr
 *
 */
@SuppressWarnings("unchecked")
@RestController
@RequestMapping("/news")
public class NewsTrendsController {
	
   private static final Logger logger = LoggerFactory.getLogger(NewsTrendsController.class);
	
	@Autowired
	private  NewsTrendsService newTrendsService;
	
	
	/***
	 * 新增消息
	 * @param request
	 * @param model
	 * @param type
	 * @return
	 */
	
	@RequestMapping(value = "/addMsg",method = RequestMethod.POST)
    public Object addMsg(HttpServletRequest request,MsgModel model) {
		int i=newTrendsService.addMsg(model);
		return ResponseModel.Success(i);   
    }
	
	/**
	 * 上传文件
	 * @param request
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@RequestMapping(value = "/addFileUpload", method = RequestMethod.POST)
	 public Object addFileUpload(HttpServletRequest request) throws IllegalStateException, IOException{
	   String filePath  = ReadApplicationUntil.getFileAddres();
       String filePath1 =filePath+DateUtil.convertDateToString(new Date(), 5);
        File filePath2 = new File(filePath1);
        //创建父类文件
        if(!filePath2.exists() && !filePath2.isDirectory()){
        	filePath2.mkdirs();
        }
       long  startTime=System.currentTimeMillis();
       String uuid="";
       int i=0;
     //将request变成多部分request
       MultipartHttpServletRequest multiRequest=(MultipartHttpServletRequest)request;
       //获取multiRequest 中所有的文件名
       Iterator iter=multiRequest.getFileNames();
       uuid=UUID.randomUUID().toString().replace("-", "");
       while(iter.hasNext()){
           //一次遍历所有文件
           MultipartFile file=multiRequest.getFile(iter.next().toString());
           if(file!=null){
               String upPath = file.getOriginalFilename();
               String fName = upPath.substring(upPath.lastIndexOf("."),upPath.length()); 
               String name=upPath.substring(0, upPath.lastIndexOf("."));
               if(".pdf".equals(fName.toLowerCase().trim())){
               	upPath = uuid+fName;
               }
               String path=filePath2+"\\"+upPath;
               //上传
               File files = new File(path);
               file.transferTo(files);              
           	   String fileStr = newTrendsService.selectFile(uuid);
           	   if(StringUtils.isNotBlank(fileStr)){
           		   File fileP= new File(fileStr);
                   // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
                   if(fileP.exists() && fileP.isFile()) {
                   	  fileP.delete();
                   }
           	 }else{
           		i=newTrendsService.addFilePath(path,uuid);  	
           	 }
           }
       }
       if(i>0){
    	   return ResponseModel.Success(uuid);
       }else{
    	   return ResponseModel.Success("上传失败！");
       }
	 }
	
	
	/**
	 * 保存文件信息
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/addFile",method = RequestMethod.POST)
    public Object addFile(HttpServletRequest request,FileModel model) {
		int i=newTrendsService.addFile(model);
		return ResponseModel.Success(i);   
    }
	
	/**
	 * 获取所有的文件信息
	 * @param request
	 * @return
	 */
	
	@RequestMapping(value = "/getFiles",method = RequestMethod.GET)
	public Object getFiles(HttpServletRequest request,FileModel model) {
		Page<FileModel>  page=newTrendsService.getFiles(model);
		return PageUtil.success(page);  
    }

	/**
	 * 获取所有的消息
	 * @param request
	 * @return
	 */
	
	@RequestMapping(value = "/getMsgs",method = RequestMethod.GET)
	public Object getMsgs(HttpServletRequest request,MsgModel model) {
		Page<FileModel>  page=newTrendsService.getMsgs(model);
		return PageUtil.success(page);   
    }
}
