package com.gxhy.base.common;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

public class Parameter {
	//public static final String COPYRIGHT = com.ibm.rich.service.Copyright.OCO;
	
	//String url, Locale locale, String filter, String sortBy, int start, int end, Map<String, Object> parameters
	
	String filter;
	
	Locale locale;
	
	int start = 0;
	int end = -1;
	
	Map<String, Object> parameters = new HashMap<String, Object>();
	
	Map<String, Object[]> multiValueQueryParameters = new HashMap<String, Object[]>();
	
	Map<String, String> headers = new HashMap<String, String>();
	
	public void init(HttpServletRequest req){
		//process get request
		
		//filter
		this.filter = req.getParameter("filter");
		
		//range
		int[] range = this.parseRange(req);
		this.start = range[0];
		this.end = range[1];
		
		//multiValueQueryParameters
		for(String key : req.getParameterMap().keySet()){
			if("filter".equals(key) || "sort".equals(key)){
				//ignore
			//	this.multiValueQueryParameters.put("filter", req.getParameterMap().get(key));
			} else {
				this.multiValueQueryParameters.put(key, req.getParameterMap().get(key));
			}
		}
		 
		//query parameters
		Enumeration<String> names = req.getParameterNames();
		while(names.hasMoreElements()){
			String name = names.nextElement();
			if("filter".equals(name) || "sort".equals(name)){
				//ignore
			//	this.parameters.put("filter", req.getParameter(name));
			} else {
				this.parameters.put(name, req.getParameter(name));
			}
		}
		
		//locale
		this.locale = req.getLocale();
		
		//headers
		Enumeration<String> heanderNames = req.getHeaderNames();
		while(heanderNames.hasMoreElements()){
			String name = heanderNames.nextElement();
			String value = req.getHeader(name);
			this.headers.put(name, value);
		}
	}
	
	private int[] parseRange(HttpServletRequest request) {
		int[] result = new int[2];
		result[0] = 0;
		result[1] = -1;
		String range = request.getHeader("Range");
		if ( range != null ) {
			String regex = "items=\\d+-\\d+";
			if ( Pattern.matches(regex, range) ) {
				int index = range.indexOf("-");
				String start = range.substring(6,index);
				String end = range.substring(index+1,range.length());
				result[0] = Integer.valueOf(start).intValue();
				result[1] = Integer.valueOf(end).intValue();
			}
		}
		return result;
	}

	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public Locale getLocale() {
		return locale;
	}

	public void setLocale(Locale locale) {
		this.locale = locale;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public Map<String, Object> getParameters() {
		return parameters;
	}

	public void setParameters(Map<String, Object> parameters) {
		this.parameters = parameters;
	}

	public Map<String, Object[]> getMultiValueQueryParameters() {
		return multiValueQueryParameters;
	}

	public void setMultiValueQueryParameters(Map<String, Object[]> multiValueQueryParameters) {
		this.multiValueQueryParameters = multiValueQueryParameters;
	}

	public Map<String, String> getHeaders() {
		return headers;
	}

	public void setHeaders(Map<String, String> headers) {
		this.headers = headers;
	}
	
	
}
