package com.gxhy.base.model;

import com.gxhy.base.imp.IsNeeded;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import lombok.Data;


@Data
public class UserModel implements Serializable{
  @IsNeeded
  private String userName;
  @IsNeeded
  private String userPhone;
  @IsNeeded
  private String userWechat;
  @IsNeeded
  private String userAddvcd;
  @IsNeeded
  private String userSex;
  @IsNeeded
  private String isLopc;
  @IsNeeded
  private String isLoapp;
  
  private String uuid;
  
  private String userPasswd;
  
  private String userId;
  
  private Date createTm;
  
  private Date updateTm;
  
  private String roleIds;
  
  private List<Object> roles;
  
  private String addvnm;
  
  private String gmCode; //河长编号

}