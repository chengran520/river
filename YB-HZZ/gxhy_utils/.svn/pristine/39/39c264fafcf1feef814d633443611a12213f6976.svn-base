
package com.gxhy.base.controller;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.common.Parameter;
import com.gxhy.base.model.RequestModel;
import com.gxhy.utils.BeanToMapUtil;
import com.gxhy.utils.StringUtil;

/**
 * @author yb
 * @Date 2018年7月17日下午5:28:29
 * @CopyRight gxhy_utils
 * 
 */
@SuppressWarnings("all")
public class BaseController {
	
	@Autowired
	public HttpServletRequest request;
	public RequestModel rm= new RequestModel();
	public Object obj;	//前台传递过来的内容转换成obj/CURD使用
	public Class cls;	//与obj配合一起使用
	
	private String url;
	private List<Map<String, Object>> body=null;
	
	public void RequestInit(){
		obj=null;
		
		InitInfo();
		if(body.size()>0){
			Map<String, Object> map=body.get(0);
			if(map.get("num")!=null){
				String strStart=(String)map.get("num");
				if(StringUtil.isInteger(strStart))
					rm.setNum(Long.parseLong(strStart));
			}
			if(map.get("size")!=null){
				String strLimit=(String)map.get("size");
				if(StringUtil.isInteger(strLimit))
					rm.setSize(Long.parseLong(strLimit));
			}
			if(map.get("orderby")!=null){
				rm.setOrderby((String)map.get("orderby"));
			}
			//看看是不是单表吧
			String beanName=(String)map.get("bean");
			if(beanName!=null&&!"".equals(beanName)){
				rm.setBean(beanName);
				//实例化它
				try {
					obj=Class.forName(beanName).newInstance();
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				cls=obj.getClass();
				try {
					obj=BeanToMapUtil.convertMap(cls, body.get(0));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}
	
	public JSONObject InitParams(Object obj) throws Exception{
		JSONObject js=new JSONObject();
		Class clazz = obj.getClass();
		Field[] fields = clazz.getDeclaredFields();
		try{
		for (Field field : fields) {
			String fieldStr = field.getName();
			String str= field.getType().toString();
			if("class java.util.Date".equals(str)){
				Method getMethod = clazz.getDeclaredMethod("get" + fieldStr.substring(0, 1).toUpperCase()+ fieldStr.substring(1), null);
				if (getMethod.invoke(obj, null) != null) {
					js.put(fieldStr, (Date)getMethod.invoke(obj, null));
				}
			}
			else{
				Method getMethod = clazz.getDeclaredMethod("get" + fieldStr.substring(0, 1).toUpperCase()+ fieldStr.substring(1), null);
				if (getMethod.invoke(obj, null) != null) {
					js.put(fieldStr, getMethod.invoke(obj, null));
				}
			}
		}
		}catch(Exception ex){
			throw ex;
		}
		return js;
	}
	
	public void InitInfo(){
		url = request.getRequestURI();
		Parameter parameter = new Parameter();
		parameter.init(request);
		try{
			String requestContentType = request.getContentType();
		} catch(Exception e){
			body = null;
		}
		if(body == null || body.isEmpty()){
			//no body, then user request parameters
			Map<String, String[]> parameters = request.getParameterMap();
			//check if any parameters has multipe value
			boolean hasMultipeValueParameter = false;
			for(String key : parameters.keySet()){
				String[] values = parameters.get(key);
				if(values != null && values.length > 1){
					hasMultipeValueParameter = true;
				}
			}
			if(!hasMultipeValueParameter){
				//support multiple parameter with single values
				//e.g. ?id=1&name=foo
				body = new ArrayList<Map<String, Object>>();
				Map<String, Object> obj = new HashMap<String, Object>();
				for(String key : request.getParameterMap().keySet()){
					String value = request.getParameter(key);
					obj.put(key, value);
				}
				body.add(obj);
			} else if(parameters.size() != 1){
				//not support multiple parameters with multiple values 
				//e.g. id=1&name=foo&id=3&name=bar
				//throw new BadRequestException("Can not parse request body");
			} else {
				//support single parameter, with multiple values
				//e.g. ?id=1&id=2&id=3
				body = new ArrayList<Map<String, Object>>();
				for(String key : parameters.keySet()){
					String[] values = parameters.get(key);
					for(String value : values){
						Map<String, Object> obj = new HashMap<String, Object>();
						obj.put(key, value);
						body.add(obj);
					}
				}
			}
		}
	}
	//分页真后台，通过属性获取jpa中的注解，得到字段名排序
	public JSONObject RequestInitRanges(JSONObject js,Boolean isSort,Class className) {
		this.RequestInitRanges(js);
		if(isSort){
			this.getTrueSort(className.getName(),(String)js.get("sort"),js);
		}
		return js;
	}
	/**
	 * 自动获取以及包装分页参数
	 * @author
	 */
	public JSONObject RequestInitRanges(JSONObject js) {
		if(js==null){
			js=new JSONObject();
		}
		String[] ranges=null;
		 String rangesHeader = request.getHeader("Range");
		 if(rangesHeader!=null){
			 ranges=rangesHeader.split(",");
		 }else{
			 if(request.getParameter("limit")!=null){
				 int size =Integer.parseInt(request.getParameter("limit"));
				 js.put("size", size);
			 }
			 if(request.getParameter("page")!=null){
				 int num =Integer.parseInt(request.getParameter("page"));
				 js.put("num", num);
			 }
			 if(request.getParameter("sort")!=null){
				 String sort =request.getParameter("sort");
				 //需要根据属性名找列名
				 js.put("sort", sort);
			 }
			 if(request.getParameter("order")!=null){
				 String order =request.getParameter("order");
				 js.put("order", order);
			 }
			 return js;
		 }
		 
		 
		if(ranges!=null&&ranges.length>0){
			for(String range:ranges){
				if(range.startsWith("limits")){//分页，格式limits=0-3
					range=range.trim().replace("limits=", "");
					String [] limits=range.split("-");
					js.put("num", limits[0]);
					js.put("size", limits[1]);
				}
				else if(range.startsWith("sort=")){
					range=range.trim().replace("sort", "");
					js.put(RequestModel.ORDERBY,  range);
				}
			}
		}
		return js;
	}
	
	public JSONObject getTrueSort(String className,String property,JSONObject js){
		if(property==null)
			return js;
		//比如deptNm前台传过来需要依据jpa找到对应的字段名
		try{
			Class<?> cls=Class.forName(className);
			Object obj=cls.newInstance();
			String strSort="";
			Field[] fields = obj.getClass().getDeclaredFields();
			for(Field f : fields){
				if(property.equals(f.getName())){
					Annotation[] lis=f.getAnnotations();
					if(lis!=null){
						if(lis.length==0){
							strSort=property;
							break;
						}
						for(Annotation mod:lis){
							String strTypeName=mod.annotationType().getName();
							if("javax.persistence.Column".equals(strTypeName)){
								String strVal=mod.toString();
								if(strVal.indexOf("name=")>=0){
									//用，分隔成若干数组
									HashMap<String,String> map=new HashMap<String,String>();
									String[] listItem=strVal.split(",");
									for(String strItem:listItem){
										String[] tmpItm=strItem.split("=");
										if(tmpItm!=null&&tmpItm.length>1){
											map.put(tmpItm[0].trim(), tmpItm[1].trim());
										}
									}
									strSort=map.get("name");
									break;
								}
							}
						}
						break;
					}
				}
			}
			js.put("sort", strSort);
			if(strSort==null||"".equals(strSort)){
				js.put("order", "");
			}
		}catch(Exception ex){
			//do nothing
			//LogUtil.out("属性获取失败，排序可能出现错误");
		}
		return js;
	}
}
