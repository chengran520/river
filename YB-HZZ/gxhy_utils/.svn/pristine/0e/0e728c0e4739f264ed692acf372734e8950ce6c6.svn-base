package com.gxhy.base.adcd.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gxhy.base.adcd.service.AdcdService;
import com.gxhy.base.model.AdcdModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.model.UserModel;
import com.gxhy.base.model.Ztree;
import com.gxhy.shiro.SecurityUtil;
import com.gxhy.utils.AdcdUtil;

@RestController
@RequestMapping("adcd")
public class AdcdController {

	@Autowired
	private AdcdService adcdService;
	
	@RequestMapping("/getAddvnms")
	public Object getAddvnms(String addvcd){
		String addvnms = adcdService.getAddvnms(addvcd);
		ResponseModel<Object> success = ResponseModel.Success(addvnms);
		success.setData(addvnms);
		return success;
	}
	
	/**
	 * 获取当前用户下所有行政区
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "/getUserAdcdZtree", method = RequestMethod.GET)
	public Object getUserAdcdZtree(HttpServletRequest request){
		UserModel user = SecurityUtil.getSessionUser();
		//先从缓存中获取行政区，没有就从库里面取
		List<Ztree> listTree = null;
		if(listTree == null){
			listTree = new ArrayList<Ztree>();
			String adcd = user.getUserAddvcd();
			int it = AdcdUtil.getRegionLevel(adcd);
			if(it > 1){
				Ztree amodel = new Ztree();
				List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.addZeroToAdcd(adcd.substring(0,2),12));
				amodel.setId(list.get(0).getAddvcd());
				amodel.setpId("-1");
				amodel.setName(list.get(0).getAddvnm());
				listTree.add(amodel);
			}
			if(it > 2){
				Ztree amodel = new Ztree();
				List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.addZeroToAdcd(adcd.substring(0,4),12));
				amodel.setId(list.get(0).getAddvcd());
				amodel.setpId(AdcdUtil.addZeroToAdcd(list.get(0).getAddvcd().substring(0,2),12));
				amodel.setName(list.get(0).getAddvnm());
				listTree.add(amodel);
			}
			List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.getPrefixAdcd(adcd, false));
			if(list.size() > 0){
				for(int i = 0 ;i<list.size();i++){
					AdcdModel model = list.get(i);
					Ztree admodel = new Ztree();
					admodel.setId(model.getAddvcd().trim());
					admodel.setName(model.getAddvnm().trim());
					int is = AdcdUtil.getRegionLevel(model.getAddvcd());
					if(is == 1){
						admodel.setpId("-1");
					}else if(is == 2){
						admodel.setpId(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,2),12));
					}else if(is == 3){
						admodel.setpId(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,4),12));
					}else if(is == 4){
						admodel.setpId(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,6),12));
					}else if(is == 5){
						admodel.setpId(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,9),12));
					}
					listTree.add(admodel);
				}				
			}
		}		
		return ResponseModel.Success(listTree);
	}
}
