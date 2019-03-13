package com.gxhy.utils;

import org.springframework.beans.BeansException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;

/**
 * Application作用域范围
 * @author gxhy
 * @Date 2018年11月14日下午5:33:48
 * @CopyRight gxhy_utils
 */
@Service
public class SpringAppContextUtil implements ApplicationContextAware {
	@Autowired
	private static ApplicationContext context;
 
	public void setApplicationContext(ApplicationContext contex)
			throws BeansException {
		context = contex;
	}

	public static ApplicationContext getContext() {
		return context;
	}

	public final static Object getBean(String beanName) {
		return context.getBean(beanName);
	}
	@SuppressWarnings("unchecked")
	public final static <T> T getBean(Class<T> beanName) {
		String str = beanName.getSimpleName();
		context.getBeanDefinitionNames();
		return (T) context.getBean(str);
	}
	public final static <T> T getBeanStr(String beanName) {
		String str = beanName;
		return (T) SpringUtils.getBean(str);
	}
	 
}