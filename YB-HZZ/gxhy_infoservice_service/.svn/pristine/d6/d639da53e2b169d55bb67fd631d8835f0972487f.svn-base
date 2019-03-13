package com.gxhy.base.basic.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Iterator;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.basic.mapper.StraRiverMapper;
import com.gxhy.base.basic.model.RiverModel;
import com.gxhy.base.basic.model.StraRiverModel;
import com.gxhy.base.basic.service.StraRiverService;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.utils.DateUtil;
import com.gxhy.utils.OfficeImgToPdf;
import com.gxhy.utils.PageUtil;
import com.gxhy.utils.ReadApplicationUntil;

@RestController
@RequestMapping("data/StraRiver")
@SuppressWarnings("unchecked")
public class StraRiverController extends BaseController {

	@Autowired
	StraRiverService straRiverService;

	/**
	 * 获取一河一策
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getStraRivers", method = RequestMethod.GET)
	public Object getStraRivers(HttpServletRequest request, StraRiverModel model) throws Exception {
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map, true, StraRiverModel.class);
		int type = model.getType();
		map.put("type", type);
		String startTm = request.getParameter("startTm");
		String endTm = request.getParameter("endTm");
		if (StringUtils.isNotBlank(startTm)) {
			Date startTime = DateUtil.convertStringToDate(startTm);
			map.put("startTime", startTime);
		}
		if (StringUtils.isNotBlank(endTm)) {
			Date endTime = DateUtil.convertStringToDate(endTm);
			map.put("endTime", endTime);
		}
		map.put(RequestModel.SQLID, StraRiverMapper.class.getName() + ".getStraRivers");
		Page<StraRiverModel> page = straRiverService.selectList(map);
		return PageUtil.success(page);
	}

	/**
	 * 删除一河一策
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteStrRiver", method = RequestMethod.POST)
	public Object deleteStrRiver(HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		String uuid = request.getParameter("uuid");
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID, StraRiverMapper.class.getName() + ".deleteStraRivers");
		int num = straRiverService.delete(map);
		return ResponseModel.Success(num);
	}

	/**
	 * 增加一河一策
	 * 
	 * @param request
	 * @param type
	 * @param straFileTitle
	 * @param rvCd
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@RequestMapping(value = "/insertStRiver", method = RequestMethod.POST)
	public Object insertStRiver(HttpServletRequest request, int type, String straFileTitle, String rvCd)
			throws IllegalStateException, IOException {
		String filePath = ReadApplicationUntil.getFileAddres();
		long startTime = System.currentTimeMillis();
		// 将当前上下文初始化给 CommonsMutipartResolver （多部分解析器）
		MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
		// 将request变成多部分request
		// 获取multiRequest 中所有的文件名
		Iterator iter = multiRequest.getFileNames();
		String uuid = UUID.randomUUID().toString().replace("-", "");
		int i = 0;
		while (iter.hasNext()) {
			// 一次遍历所有文件
			MultipartFile file = multiRequest.getFile(iter.next().toString());
			if (file != null) {
				String upPath = file.getOriginalFilename();
				String fName = upPath.substring(upPath.lastIndexOf("."), upPath.length());
				if (".pdf".equals(fName.toLowerCase().trim())) {
					upPath = uuid + fName;
				}
				String path = filePath + upPath;
				// 上传
				File files = new File(path);
				file.transferTo(files);

				String fileStr = straRiverService.selectFile(uuid);
				if (StringUtils.isNotBlank(fileStr)) {
					File fileP = new File(fileStr);
					// 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
					if (fileP.exists() && fileP.isFile()) {
						fileP.delete();
					}
				}
				i = straRiverService.saveOrUpStaRiver(type, straFileTitle, rvCd, path, uuid);
			}
		}
		if (i > 0) {
			return ResponseModel.Success("成功");
		} else {
			return ResponseModel.Success("上传失败！");
		}

	}

	/**
	 * 更新一河一侧的下载、预览次数
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/updateStrRiver", method = RequestMethod.POST)
	public Object getStraDetail(HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		String uuid = request.getParameter("uuid");
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID, StraRiverMapper.class.getName() + ".updateStraRiver");
		straRiverService.update(map);
		return ResponseModel.Success("success");
	}
}
