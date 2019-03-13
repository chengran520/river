package com.gxhy.base.model;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import java.util.Collection;

public class ResponseModel<T>
{
  private boolean success;
  private T data;
  private long count;
  private long pages;
  private String msg;
  private String message;
  private int code;
  private String stackTrace;
  
  public String getMsg()
  {
    return this.msg;
  }
  
  protected boolean canEqual(Object other)
  {
    return other instanceof ResponseModel;
  }
  
  public boolean equals(Object o)
  {
    if (o == this) {
      return true;
    }
    if (!(o instanceof ResponseModel)) {
      return false;
    }
    ResponseModel<?> other = (ResponseModel)o;
    if (!other.canEqual(this)) {
      return false;
    }
    if (isSuccess() != other.isSuccess()) {
      return false;
    }
    Object this$data = getData();Object other$data = other.getData();
    if (this$data == null ? other$data != null : !this$data.equals(other$data)) {
      return false;
    }
    if (getCount() != other.getCount()) {
      return false;
    }
    if (getPages() != other.getPages()) {
      return false;
    }
    Object this$msg = getMsg();Object other$msg = other.getMsg();
    if (this$msg == null ? other$msg != null : !this$msg.equals(other$msg)) {
      return false;
    }
    Object this$message = getMessage();Object other$message = other.getMessage();
    if (this$message == null ? other$message != null : !this$message.equals(other$message)) {
      return false;
    }
    if (getCode() != other.getCode()) {
      return false;
    }
    Object this$stackTrace = getStackTrace();Object other$stackTrace = other.getStackTrace();return this$stackTrace == null ? other$stackTrace == null : this$stackTrace.equals(other$stackTrace);
  }
  
  public void setStackTrace(String stackTrace)
  {
    this.stackTrace = stackTrace;
  }
  
  public void setCode(int code)
  {
    this.code = code;
  }
  
  public void setMessage(String message)
  {
    this.message = message;
  }
  
  public void setMsg(String msg)
  {
    this.msg = msg;
  }
  
  public void setPages(long pages)
  {
    this.pages = pages;
  }
  
  public void setCount(long count)
  {
    this.count = count;
  }
  
  public void setData(T data)
  {
    this.data = data;
  }
  
  public boolean isSuccess()
  {
    return this.success;
  }
  
  public T getData()
  {
    return this.data;
  }
  
  public long getCount()
  {
    return this.count;
  }
  
  public long getPages()
  {
    return this.pages;
  }
  
  public int hashCode()
  {
    int PRIME = 59;int result = 1;result = result * 59 + (isSuccess() ? 79 : 97);Object $data = getData();result = result * 59 + ($data == null ? 43 : $data.hashCode());long $count = getCount();result = result * 59 + (int)($count ^ $count >>> 32);long $pages = getPages();result = result * 59 + (int)($pages ^ $pages >>> 32);Object $msg = getMsg();result = result * 59 + ($msg == null ? 43 : $msg.hashCode());Object $message = getMessage();result = result * 59 + ($message == null ? 43 : $message.hashCode());result = result * 59 + getCode();Object $stackTrace = getStackTrace();result = result * 59 + ($stackTrace == null ? 43 : $stackTrace.hashCode());return result;
  }
  
  public String getMessage()
  {
    return this.message;
  }
  
  public int getCode()
  {
    return this.code;
  }
  
  public String getStackTrace()
  {
    return this.stackTrace;
  }
  
  public void setSuccess(boolean success)
  {
    this.success = success;
  }
  
  public static <E> ResponseModel<E> Success(E data)
  {
    ResponseModel<E> res = new ResponseModel();
    res.setSuccess(true);
    res.setCode(0);
    res.setData(data);
    res.setMsg("");
    if ((data instanceof Page))
    {
      res.setCount(((Page)data).getTotal());
      res.setPages(((Page)data).getPages());
    }
    else if ((data instanceof Collection))
    {
      res.setCount(((Collection)data).size());
    }
    else
    {
      res.setCount(1L);
    }
    return res;
  }
  
  public static <E> ResponseModel<E> Success(E data, String code)
  {
    ResponseModel<E> res = Success(data);
    res.setMsg("");
    res.setCode(0);
    return res;
  }
  
  public static <E> ResponseModel<E> Success(E data, long total)
  {
    ResponseModel<E> res = new ResponseModel();
    res.setSuccess(true);
    res.setCode(0);
    res.setData(data);
    res.setMsg("");
    res.setCount(total);
    return res;
  }
  
  public static <E> ResponseModel<E> Success(String message)
  {
    ResponseModel<E> res = new ResponseModel();
    res.setSuccess(true);
    res.setCode(0);
    res.setMessage(message);
    return res;
  }
  
  public static <E> ResponseModel<E> Failure(String message)
  {
    ResponseModel<E> res = new ResponseModel();
    res.setSuccess(false);
    res.setCode(1);
    res.setMsg(message);
    return res;
  }
  
  public static <E> ResponseModel<E> Failure(String message, String stackTrace)
  {
    ResponseModel<E> res = new ResponseModel();
    res.setSuccess(false);
    res.setCode(1);
    res.setMsg(message);
    res.setStackTrace(stackTrace);
    return res;
  }
  
  public static <E> ResponseModel<E> Failure(String message, String stackTrace, String code)
  {
    ResponseModel<E> res = Failure(message, stackTrace);
    res.setCode(1);
    return res;
  }
  
  public JSONArray resJsonArray()
  {
    return JSON.parseArray(JSON.toJSONString(this.data));
  }
  
  public String resJsonValue(String string)
  {
    return JSON.parseObject(JSON.toJSONString(this.data)).getString(string);
  }
  
  public String toString()
  {
    return JSONObject.toJSONString(this);
  }
}
