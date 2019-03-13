package com.gxhy.adcd.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.adcd.domain.AdcdModel;
import com.gxhy.adcd.domain.AdcdTreeModel;
import com.gxhy.adcd.persistence.AdcdMapper;
import com.gxhy.adcd.service.AdcdService;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.EhCacheUtils;
import com.gxhy.base.util.SysCacheType;

/**
 * 行政区用户
 * @author yb
 */
@SuppressWarnings("unchecked")
@RestController
@RequestMapping("data/adcd")
public class AdCdController  extends BaseController {
	
	@Autowired
	private AdcdService adcdService;
	
	/**
	 * 获取当前用户下所有行政区
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "/getUserAdcdZtree", method = RequestMethod.GET)
	public Object getUserAdcdZtree(HttpServletRequest request){
		SysUsers user = SecurityUtil.getSessionUser();
		//先从缓存中获取行政区，没有就从库里面取
		List<AdcdTreeModel> listTree = (List<AdcdTreeModel>) EhCacheUtils.get(SysCacheType.CACHADCD, user.getUserId());
		if(listTree == null){
			listTree = new ArrayList<AdcdTreeModel>();
			String adcd = user.getUserAddvcd();
			int it = AdcdUtil.getRegionLevel(adcd);
			if(it > 1){
				AdcdTreeModel amodel = new AdcdTreeModel();
				List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.addZeroToAdcd(adcd.substring(0,2),12));
				amodel.setId(list.get(0).getAddvcd());
				amodel.setPid("-1");
				amodel.setName(list.get(0).getAddvnm());
				listTree.add(amodel);
			}
			if(it > 2){
				AdcdTreeModel amodel = new AdcdTreeModel();
				List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.addZeroToAdcd(adcd.substring(0,4),12));
				amodel.setId(list.get(0).getAddvcd());
				amodel.setPid(AdcdUtil.addZeroToAdcd(list.get(0).getAddvcd().substring(0,2),12));
				amodel.setName(list.get(0).getAddvnm());
				listTree.add(amodel);
			}
			List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.getPrefixAdcd(adcd, false));
			if(list.size() > 0){
				for(int i = 0 ;i<list.size();i++){
					AdcdModel model = list.get(i);
					AdcdTreeModel admodel = new AdcdTreeModel();
					admodel.setId(model.getAddvcd().trim());
					admodel.setName(model.getAddvnm().trim());
					int is = AdcdUtil.getRegionLevel(model.getAddvcd());
					if(is == 1){
						admodel.setPid("-1");
					}else if(is == 2){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,2),12));
					}else if(is == 3){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,4),12));
					}else if(is == 4){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,6),12));
					}else if(is == 5){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,9),12));
					}
					listTree.add(admodel);
				}
				EhCacheUtils.put(SysCacheType.CACHADCD, user.getUserId(),listTree);
			}
		}
		
		return ResponseModel.Success(listTree);
	}
	
	/**
	 *  获取所有的省
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getProvince", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="省份列表")
	public Object getProvince(HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		List<AdcdModel> list = (List<AdcdModel>) EhCacheUtils.get(SysCacheType.CACHADCD, SysCacheType.ADCD_PROVINCE);
		if(list == null){
			map.put(RequestModel.SQLID, AdcdMapper.class.getName()+ ".getProvince");
			list = adcdService.selectList(map);
			EhCacheUtils.put(SysCacheType.CACHADCD, SysCacheType.ADCD_PROVINCE,list);
		}
		return ResponseModel.Success(list);
	}

	/**
	 * 获取所有的省下所有的市
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getCity", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="城市列表")
	public Object getCity(AdcdModel model, HttpServletRequest request)
			throws Exception {
		JSONObject map = new JSONObject();
		if(model.getAddvcd()!=null&&!model.getAddvcd().equals("")){
			if(model.getAddvcd().equals("-1")){
				map.put("addvcd", null);
				map.put("addvcdCity", null);// 获取前缀
			}else{
				map.put("addvcd", model.getAddvcd());
				map.put("addvcdCity", AdcdUtil.getPrefixAdcd(model.getAddvcd(), true));// 获取前缀
			}
		}
		map.put(RequestModel.SQLID, AdcdMapper.class.getName()
				+ ".getCity");
		List<AdcdModel> list = adcdService.selectList(map);
		return ResponseModel.Success(list);
	}

	/**
	 * 获取 市下所有的县
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getDistrict", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="县区列表")
	public Object getDistrict(AdcdModel model, HttpServletRequest request)
			throws Exception {
		JSONObject map = new JSONObject();
		if(model.getAddvcd()!=null&&!model.getAddvcd().equals("")){
			if(model.getAddvcd().equals("-1")){
				map.put("addvcd", null);
				map.put("district",null);// 获取前缀
			}else{
				map.put("addvcd", model.getAddvcd());
				map.put("district", AdcdUtil.getPrefixAdcd(model.getAddvcd(), true));// 获取前缀
			}
		}
		map.put(RequestModel.SQLID, AdcdMapper.class.getName()
				+ ".getDistrict");
		List<AdcdModel> list = adcdService.selectList(map);
		return ResponseModel.Success(list);
	}
	
	/**
	 * 获取县下所有的乡
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getCountry", method = RequestMethod.GET)
	public Object getCountry(AdcdModel model, HttpServletRequest request)
			throws Exception {
		JSONObject map = new JSONObject();
		if(model.getAddvcd()!=null&&!model.getAddvcd().equals("")){
			if(model.getAddvcd().equals("-1")){
				map.put("addvcd", null);
				map.put("country",null);// 获取前缀
			}else{
				map.put("addvcd", model.getAddvcd());
				map.put("country", AdcdUtil.getPrefixAdcd(model.getAddvcd(), false));// 获取前缀
			}
		}
		map.put(RequestModel.SQLID, AdcdMapper.class.getName()
				+ ".getCountry");
		List<AdcdModel> list = adcdService.selectList(map);
		return ResponseModel.Success(list);
	}
	
	/**
	 * 获取乡下所有村
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getVillage", method = RequestMethod.GET)
	public Object getVillage(AdcdModel model, HttpServletRequest request)
			throws Exception {
		JSONObject map = new JSONObject();
		if(model.getAddvcd()!=null&&!model.getAddvcd().equals("")){
			if(model.getAddvcd().equals("-1")){
				map.put("addvcd", null);
				map.put("village",null);// 获取前缀
			}else{
				map.put("addvcd", model.getAddvcd());
				map.put("village", AdcdUtil.getPrefixAdcd(model.getAddvcd(), false));// 获取前缀
			}
		}
		map.put(RequestModel.SQLID, AdcdMapper.class.getName()
				+ ".getVillage");
		List<AdcdModel> list = adcdService.selectList(map);
		return ResponseModel.Success(list);
	}
}
