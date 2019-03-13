package com.gxhy;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * 此方法是为了通过eclipse启动tomcat时进行加载，因spring boot默认了内置tomcat加载
 * @author yb
 * @Date 2018年7月27日下午3:21:48
 * @CopyRight gxhy_utils
 * @EnableEurekaClient  注册中心客户端调用
 * @EnableFeignClients  feign客户端调用
 */
@SpringBootApplication
//@EnableEurekaClient
//@EnableFeignClients
public class Application extends SpringBootServletInitializer{

	/* (non-Javadoc)
	 * @see org.springframework.boot.web.servlet.support.SpringBootServletInitializer#configure(org.springframework.boot.builder.SpringApplicationBuilder)
	 */
	@Override
	protected SpringApplicationBuilder configure(
			SpringApplicationBuilder builder) {
		// TODO Auto-generated method stub
		return builder.sources(Application.class);
	}
	
	
}
