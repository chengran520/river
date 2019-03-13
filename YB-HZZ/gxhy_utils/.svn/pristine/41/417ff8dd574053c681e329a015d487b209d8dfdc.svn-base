package com.gxhy.utils;

import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;

/**
 * 字符串处理
 * @author yb
 * @2017年7月7日下午5:17:43   
 * @CopyRight gxhy
 */
public class StringUtil extends StringUtils {

    /**
     * 将字符串去掉空格，其中包括“Null”、“null”字符串的处理
     * @param inputStr 输入字符串
     * @return 字符串去空
     */
    public static String toTrim(String inputStr) {
        if (StringUtils.isBlank(inputStr))
            return "";
        if (inputStr.trim().equalsIgnoreCase("null"))
            return "";
        return inputStr.trim();
    }

    public static boolean isInteger(String str) {
        Pattern pattern = Pattern.compile("^[-\\+]?[\\d]+$");
        return pattern.matcher(str).matches();
    }

    public static boolean isDouble(String str) {
        Pattern pattern = Pattern.compile("^[-\\+]?\\d+[\\.\\d+]*$");
        return pattern.matcher(str).matches();
    }

    public static boolean isBlank(String str) {
        return str == null || str.trim().length() == 0;
    }
  
}