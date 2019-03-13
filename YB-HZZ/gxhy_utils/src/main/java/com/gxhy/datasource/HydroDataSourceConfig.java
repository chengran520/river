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
 * 雨水情datasource数据库连接源
 * @author yb
 * @Date 2018年7月18日下午6:47:39
 * @CopyRight gxhy_utils
 */
@Configuration
@MapperScan(basePackages = "com.gxhy.hydro", sqlSessionTemplateRef = "hydroSqlSessionTemplate")
public class HydroDataSourceConfig {
	
	@Bean(name = "hydroDataSource")
	@ConfigurationProperties(prefix = "spring.datasource.hydro")
	public DataSource hydroDataSource() {
		return DataSourceBuilder.create().build();
	}

	/**
	 * 事物处理
	 * 如多数据源，此处要注意把事物区别
	 * @param dataSource
	 * @return
	 */
	@Bean(name = "hydroTransactionManager")
	public DataSourceTransactionManager HydroTransactionManager(@Qualifier("hydroDataSource") DataSource dataSource) {
		return new DataSourceTransactionManager(dataSource);
	}

	@Bean(name = "hydroSqlSessionFactory")
	public SqlSessionFactory hydroSqlSessionFactory(@Qualifier("hydroDataSource") DataSource dataSource)throws Exception {
		SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
		bean.setDataSource(dataSource);
		bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath*:hydro/mapper/*.xml"));
		return bean.getObject();
	}

	/**
	 * 数据库操作
	 * @param sqlSessionFactory
	 * @return
	 * @throws Exception
	 */
	@Bean(name = "hydroSqlSessionTemplate")
	public SqlSessionTemplate hydroSqlSessionTemplate(@Qualifier("hydroSqlSessionFactory") SqlSessionFactory sqlSessionFactory)throws Exception {
		return new SqlSessionTemplate(sqlSessionFactory);
	}
}
