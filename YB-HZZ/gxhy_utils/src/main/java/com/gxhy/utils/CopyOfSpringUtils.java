//package com.gxhy.utils;
//
//import javax.servlet.http.HttpServletRequest;
//
//import org.springframework.beans.BeansException;
//import org.springframework.beans.factory.NoSuchBeanDefinitionException;
//import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
//import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.context.request.RequestContextHolder;
//import org.springframework.web.context.request.ServletRequestAttributes;
//
//import com.github.abel533.mapper.Mapper;
//
///**
// * springBean工厂
// * @author gxhy
// * @Date 2018年11月14日下午5:34:16
// * @CopyRight gxhy_utils
// */
//public final class CopyOfSpringUtils implements BeanFactoryPostProcessor {
//
//	private static ConfigurableListableBeanFactory beanFactory; // Spring应用上下文环境
//
//	@Override
//	public void postProcessBeanFactory(
//			ConfigurableListableBeanFactory beanFactory) throws BeansException {
//		CopyOfSpringUtils.beanFactory = beanFactory;
//	}
//
//	public static <T> Mapper<T> getMapperBean(Class<T> c) {
//		String entityNm = c.getName();
//		entityNm = entityNm.replace("domain", "persistence");
//		return (Mapper<T>) SpringAppContextUtil.getBeanStr(entityNm + "Mapper");
//	}
//
//	public static <T> Mapper<T> getMapperBean(String classNm) {
//		classNm = classNm.replace("domain", "persistence");
//		return (Mapper<T>) SpringAppContextUtil.getBeanStr(classNm + "Mapper");
//	}
//
//	public static String getMapperBeanStr(String classNm) {
//		classNm = classNm.replace("domain", "persistence");
//		if (SpringAppContextUtil.getBeanStr(classNm + "Mapper") == null) {
//			return classNm + "Mapper";
//		}
//		return classNm + "Mapper";
//	}
//
//	/**
//	 * 获取对象
//	 *
//	 * @param name
//	 * @return Object 一个以所给名字注册的bean的实例
//	 * @throws org.springframework.beans.BeansException
//	 *
//	 */
//	@SuppressWarnings("unchecked")
//	public static <T> T getBean(String name) throws BeansException {
//		return (T) beanFactory.getBean(name);
//	}
//
//	/**
//	 * 获取类型为requiredType的对象
//	 *
//	 * @param clz
//	 * @return
//	 * @throws org.springframework.beans.BeansException
//	 *
//	 */
//	public static <T> T getBean(Class<T> clz) throws BeansException {
//		T result = (T) beanFactory.getBean(clz);
//		return result;
//	}
//
//	/**
//	 * 如果BeanFactory包含一个与所给名称匹配的bean定义，则返回true
//	 *
//	 * @param name
//	 * @return boolean
//	 */
//	public static boolean containsBean(String name) {
//		return beanFactory.containsBean(name);
//	}
//
//	/**
//	 * 判断以给定名字注册的bean定义是一个singleton还是一个prototype。
//	 * 如果与给定名字相应的bean定义没有被找到，将会抛出一个异常（NoSuchBeanDefinitionException）
//	 *
//	 * @param name
//	 * @return boolean
//	 * @throws org.springframework.beans.factory.NoSuchBeanDefinitionException
//	 *
//	 */
//	public static boolean isSingleton(String name)
//			throws NoSuchBeanDefinitionException {
//		return beanFactory.isSingleton(name);
//	}
//
//	/**
//	 * @param name
//	 * @return Class 注册对象的类型
//	 * @throws org.springframework.beans.factory.NoSuchBeanDefinitionException
//	 *
//	 */
//	public static Class<?> getType(String name)
//			throws NoSuchBeanDefinitionException {
//		return beanFactory.getType(name);
//	}
//
//	/**
//	 * 如果给定的bean名字在bean定义中有别名，则返回这些别名
//	 *
//	 * @param name
//	 * @return
//	 * @throws org.springframework.beans.factory.NoSuchBeanDefinitionException
//	 *
//	 */
//	public static String[] getAliases(String name)
//			throws NoSuchBeanDefinitionException {
//		return beanFactory.getAliases(name);
//	}
//
//	public static HttpServletRequest getHttpRequest() {
//		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
//				.getRequestAttributes()).getRequest();
//		request.getMethod();
//		request.getUserPrincipal();
//		request.getRequestURI();
//		return request;
//	}
//
//	public static String getRequestUrl() {
//		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
//				.getRequestAttributes()).getRequest();
//		String u = request.getContextPath();
//		String url = request.getRequestURI();
//		if (url.contains(u)) {
//			url = url.replace(u, "");
//		}
//		return url;
//	}
//
//	public static String getReqMethod() {
//		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
//				.getRequestAttributes()).getRequest();
//		String m = request.getMethod();
//		StringBuffer sb = new StringBuffer();
//		if (m.equals(RequestMethod.POST.toString())) {
//			sb.append(RequestMethod.POST.toString());
//		}
//		if (m.equals(RequestMethod.GET.toString())) {
//			sb.append(RequestMethod.GET.toString());
//		}
//		if (m.equals(RequestMethod.PUT.toString())) {
//			sb.append(RequestMethod.PUT.toString());
//		}
//		if (m.equals(RequestMethod.DELETE.toString())) {
//			sb.append(RequestMethod.DELETE.toString());
//		}
//		return sb.toString();
//	}
//
//}
