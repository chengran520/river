<%@page import="org.apache.shiro.subject.Subject"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<%@page import="com.gxhy.base.model.UserModel"%>
<%@page import="com.gxhy.utils.AdcdUtil"%>
<%
	String appPath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort();
	pageContext.setAttribute("appPath", appPath);
    pageContext.setAttribute("basePath", request.getContextPath()+"/");
    UserModel user = (UserModel)request.getSession().getAttribute("user");
    if(user !=null && user.getUserId() != null){
		  pageContext.setAttribute("userAdcd", user.getUserAddvcd());
  		  pageContext.setAttribute("username", user.getUserName());
  		  pageContext.setAttribute("userId", user.getUserId());
  		  if(user.getUserAddvcd() != null && user.getUserAddvcd() != ""){  			  
  		  	 //pageContext.setAttribute("adcdLevl", AdcdUtil.getRegionLevel(user.getUserAddvcd()));
  		  }
//   		  if(user.getRoles() != null){  			  
//    		  	 pageContext.setAttribute("roleId", user.getRoles().get(0).getRoleId());
//    		  }
    }else{
    	 Subject currentUser = SecurityUtils.getSubject();
    	 currentUser.getSession().removeAttribute("user");
    	 currentUser.getSession().removeAttribute("username");
    	 currentUser.getSession().removeAttribute("userId");
    	 request.getSession().removeAttribute("user");
    }
%>
