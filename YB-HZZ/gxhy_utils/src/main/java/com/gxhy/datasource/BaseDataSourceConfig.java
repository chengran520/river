package com.gxhy.datasource;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;


/**
 * 系统通用datasource数据库连接源
 * @author yb
 * @Date 2018年7月18日下午6:27:25
 * @CopyRight gxhy_utils
 */
@Configuration
@MapperScan(basePackages = {"com.gxhy.base","com.gxhy.shiro","com.gxhy.patrol"}, sqlSessionTemplateRef = "baseSqlSessionTemplate")
public class BaseDataSourceConfig {
	
	@Bean(name = "baseDataSource")
	@ConfigurationProperties(prefix = "spring.datasource.base")
	public DataSource baseDataSource() {
		return DataSourceBuilder.create().build();
	}

	/**
	 * 事物处理
	 * 如多数据源，此处要注意把事物区别
	 * @param dataSource
	 * @return
	 */
	@Bean(name = "baseTransactionManager")
	public DataSourceTransactionManager baseTransactionManager(@Qualifier("baseDataSource") DataSource dataSource) {
		return new DataSourceTransactionManager(dataSource);
	}

	@Bean(name = "baseSqlSessionFactory")
	public SqlSessionFactory baseSqlSessionFactory(@Qualifier("baseDataSource") DataSource dataSource)throws Exception {
		SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
		bean.setDataSource(dataSource);
		//此方法是用于如果使用spring boot集成方式时在resources下使用mapper
		bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath*:base/mapper/*.xml"));
		return bean.getObject();
	}
	
	/**
	 * 数据库操作
	 * @param sqlSessionFactory
	 * @return
	 * @throws Exception
	 */
	@Bean(name = "baseSqlSessionTemplate")
	public SqlSessionTemplate baseSqlSessionTemplate(@Qualifier("baseSqlSessionFactory") SqlSessionFactory sqlSessionFactory)throws Exception {
		return new SqlSessionTemplate(sqlSessionFactory);
	}
}
