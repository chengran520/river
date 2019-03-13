package com.gxhy.base.mapper;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.gxhy.base.model.RequestModel;

/**
 * 通用查询service
 * @author yb
 * @2017年7月5日下午3:28:16   
 * @CopyRight gxhy
 * @param <T>
 */
@SuppressWarnings({"all"})
@Service
public class BaseMapper<T> {
	
	@Autowired
	private SqlSessionTemplate baseSqlSessionTemplate;
	
	/**
	 * 查询列表 需要传sqlid,默认支持分页，排序需要通过参数传到sqlxml中,sqlxml中可以取到map中的所有参数
	 * @param map
	 * @return Page
	 */
	public Page<?> selectList(Map<String, Object> map) {
		RequestModel<Map<String, Object>> rm = JSON.toJavaObject(
				new JSONObject(map), RequestModel.class);
		Page<?> p = PageHelper.startPage(rm.getNum().intValue(), rm.getSize()
				.intValue());
		baseSqlSessionTemplate.selectList(rm.getSqlid(), map);
		return p;
	}
	
	public List<T> selectLists(Map<String, Object> map) {
		if(map.get(RequestModel.NUM) != null && map.get(RequestModel.SIZE) != null){
			Page<?> p = PageHelper.startPage(((Number)map.get(RequestModel.NUM)).intValue()
					, ((Number)map.get(RequestModel.SIZE)).intValue());
		}
		List<T> selectList = baseSqlSessionTemplate.selectList((String)map.get(RequestModel.SQLID), map);
		return selectList;
	}
	
	/**
	 * 单条查询
	 * @param map
	 * @return
	 */
	public T selectOne(Map<String, Object> map) {
		RequestModel<Map<String, Object>> rm = JSON.toJavaObject(
				new JSONObject(map), RequestModel.class);
		return baseSqlSessionTemplate.selectOne(rm.getSqlid(), map);
	}
	
	/**
	 * 删除操作 sqlxml中可以取到map中的所有参数 map
	 * 参数：{"sqlid":"必传"}
	 * @param map
	 * @return
	 */
	public int delete(Map<String, Object> map) {
		RequestModel<?> rm = JSON.toJavaObject(new JSONObject(map),
				RequestModel.class);
		return baseSqlSessionTemplate.delete(rm.getSqlid(), map);
	}

	/**
	 * 修改操作 sqlxml中可以取到map中的所有参数
	 * @param map    
	 * @return
	 */
	public int update(Map<String, Object> map) {
		RequestModel<?> rm = JSON.toJavaObject(new JSONObject(map),
				RequestModel.class);
		return baseSqlSessionTemplate.update(rm.getSqlid(), map);
	}
	
	/**
	 * 新增操作 sqlxml中可以取到map中的所有参数
	 * @param map 
	 * @return
	 */
	public int insert(Map<String, Object> map) {
		RequestModel<?> rm = JSON.toJavaObject(new JSONObject(map),
				RequestModel.class);
		return baseSqlSessionTemplate.insert(rm.getSqlid(), map);
	}

}