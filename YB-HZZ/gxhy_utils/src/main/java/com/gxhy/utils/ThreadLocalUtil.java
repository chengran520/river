package com.gxhy.utils;

import java.util.HashMap;
import java.util.Map;

public class ThreadLocalUtil {

	private static final ThreadLocal<Map<String, Object>> contextHolder = new ThreadLocal<Map<String, Object>>();
	public static final String GLOBAL = "global";

	public static void setObject(String key, Object obj) {
		Map<String, Object> map = contextHolder.get();
		if (map == null) {
			map = new HashMap<String, Object>();
			contextHolder.set(map);
		}
		map.put(key, obj);
	}

	public static Object getObject(String key) {
		return contextHolder.get() == null ? null : contextHolder.get()
				.get(key);
	}

	public static void remove() {
		contextHolder.remove();
	}
}