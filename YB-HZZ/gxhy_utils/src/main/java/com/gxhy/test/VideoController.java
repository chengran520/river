package com.gxhy.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONArray;
import com.gxhy.base.controller.BaseController;

@RestController
@RequestMapping("/video")
public class VideoController extends BaseController{
	
	@RequestMapping("/getVideoList")
	public JSONArray getVideoList(){
		JSONArray liveList = Test.getLiveList();
		return liveList;
	}
	
}
