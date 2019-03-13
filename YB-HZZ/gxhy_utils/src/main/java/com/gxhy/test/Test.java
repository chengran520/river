package com.gxhy.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.gxhy.utils.HttpClientUtil;

public class Test {

	private static String APPKEY = "43ddfb0b820f45fe97e23f1c02f3c794";// 秘钥appkey
	private static String APPSECRET = "33d103cf2aa6d82bd165d9e5234d5a48";// 秘钥appSecret
	private static String TOKEN_URL = "https://open.ys7.com/api/lapp/token/get"; //获取accessToken
	private static String LIST_URL = "https://open.ys7.com/api/lapp/live/video/list"; //获取视频列表
	
	private static String accessToken; //全局token
	
	public static String getAccessToken(){
		Map<String,String> params = new HashMap<String,String>();
		params.put("appKey", APPKEY);
		params.put("appSecret", APPSECRET);
		params.put("url", TOKEN_URL);
		String result = HttpClientUtil.getInstance().sendHttpPost(TOKEN_URL, params);
		JSONObject parse = (JSONObject) JSONObject.parse(result);
		accessToken = (String)parse.getJSONObject("data").get("accessToken");
		return accessToken;
	}
	
	public static JSONArray getLiveList(){
		getAccessToken();
		List<VideoModel> list = null;
		Map<String,String> params = new HashMap<String,String>();
		params.put("accessToken", accessToken);
		params.put("pageStart", "0");
		params.put("pageSize", "50");
		String result = HttpClientUtil.getInstance().sendHttpPost(LIST_URL, params);
		JSONObject parse = (JSONObject) JSONObject.parse(result);
		JSONArray jsonArray = parse.getJSONArray("data");
		System.out.println(jsonArray);
		return jsonArray;
	}
	
	public static void main(String[] args) {
		String accessToken = getAccessToken();
		System.out.println(accessToken);
	}
	
}
