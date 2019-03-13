package com.gxhy.base.model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RequestModel<T>
  implements Serializable
{
  public static final String BEAN = "bean";
  public static final String NUM = "num";
  public static final String SIZE = "size";
  public static final String ORDERBY = "orderby";
  public static final String SQLID = "sqlid";
  public static final String SIDX = "sidx";
  public static final String SORD = "sord";
  private T data;
  private List<T> list;
  private String bean;
  
  public String toString()
  {
    return "RequestModel(data=" + getData() + ", list=" + getList() + ", bean=" + getBean() + ", num=" + getNum() + ", size=" + getSize() + ", orderby=" + getOrderby() + ", sqlid=" + getSqlid() + ", parameterMap=" + getParameterMap() + ")";
  }
  
  public int hashCode()
  {
    int PRIME = 59;int result = 1;Object $data = getData();result = result * 59 + ($data == null ? 43 : $data.hashCode());Object $list = getList();result = result * 59 + ($list == null ? 43 : $list.hashCode());Object $bean = getBean();result = result * 59 + ($bean == null ? 43 : $bean.hashCode());Object $num = getNum();result = result * 59 + ($num == null ? 43 : $num.hashCode());Object $size = getSize();result = result * 59 + ($size == null ? 43 : $size.hashCode());Object $orderby = getOrderby();result = result * 59 + ($orderby == null ? 43 : $orderby.hashCode());Object $sqlid = getSqlid();result = result * 59 + ($sqlid == null ? 43 : $sqlid.hashCode());Object $parameterMap = getParameterMap();result = result * 59 + ($parameterMap == null ? 43 : $parameterMap.hashCode());return result;
  }
  
  protected boolean canEqual(Object other)
  {
    return other instanceof RequestModel;
  }
  
  public boolean equals(Object o)
  {
    if (o == this) {
      return true;
    }
    if (!(o instanceof RequestModel)) {
      return false;
    }
    RequestModel<?> other = (RequestModel)o;
    if (!other.canEqual(this)) {
      return false;
    }
    Object this$data = getData();Object other$data = other.getData();
    if (this$data == null ? other$data != null : !this$data.equals(other$data)) {
      return false;
    }
    Object this$list = getList();Object other$list = other.getList();
    if (this$list == null ? other$list != null : !this$list.equals(other$list)) {
      return false;
    }
    Object this$bean = getBean();Object other$bean = other.getBean();
    if (this$bean == null ? other$bean != null : !this$bean.equals(other$bean)) {
      return false;
    }
    Object this$num = getNum();Object other$num = other.getNum();
    if (this$num == null ? other$num != null : !this$num.equals(other$num)) {
      return false;
    }
    Object this$size = getSize();Object other$size = other.getSize();
    if (this$size == null ? other$size != null : !this$size.equals(other$size)) {
      return false;
    }
    Object this$orderby = getOrderby();Object other$orderby = other.getOrderby();
    if (this$orderby == null ? other$orderby != null : !this$orderby.equals(other$orderby)) {
      return false;
    }
    Object this$sqlid = getSqlid();Object other$sqlid = other.getSqlid();
    if (this$sqlid == null ? other$sqlid != null : !this$sqlid.equals(other$sqlid)) {
      return false;
    }
    Object this$parameterMap = getParameterMap();Object other$parameterMap = other.getParameterMap();return this$parameterMap == null ? other$parameterMap == null : this$parameterMap.equals(other$parameterMap);
  }
  
  public void setParameterMap(Map<String, Object> parameterMap)
  {
    this.parameterMap = parameterMap;
  }
  
  public void setSqlid(String sqlid)
  {
    this.sqlid = sqlid;
  }
  
  public void setOrderby(String orderby)
  {
    this.orderby = orderby;
  }
  
  public void setSize(Long size)
  {
    this.size = size;
  }
  
  public void setNum(Long num)
  {
    this.num = num;
  }
  
  public void setBean(String bean)
  {
    this.bean = bean;
  }
  
  public void setList(List<T> list)
  {
    this.list = list;
  }
  
  public void setData(T data)
  {
    this.data = data;
  }
  
  public Map<String, Object> getParameterMap()
  {
    return this.parameterMap;
  }
  
  public String getSqlid()
  {
    return this.sqlid;
  }
  
  public String getOrderby()
  {
    return this.orderby;
  }
  
  public Long getSize()
  {
    return this.size;
  }
  
  public Long getNum()
  {
    return this.num;
  }
  
  public String getBean()
  {
    return this.bean;
  }
  
  public List<T> getList()
  {
    return this.list;
  }
  
  public T getData()
  {
    return this.data;
  }
  
  private Long num = Long.valueOf(0L);
  private Long size = Long.valueOf(100000L);
  private String orderby;
  private String sqlid;
  private Map<String, Object> parameterMap = new HashMap();
}
