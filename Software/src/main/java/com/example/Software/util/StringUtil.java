package com.example.Software.util;

import java.util.List;

public class StringUtil {
    public static List<String> convertStringToList(String str) {
        return List.of(str.split("\\s+"));
    }

    public static boolean isSimilar(String str1, String str2) {
        List<String> listStr1 = convertStringToList(str1);
        List<String> listStr2 = convertStringToList(str2);
        int count = 0;
        for(String s1 : listStr1){
            for(String s2 : listStr2){
                if(str1.equals(str2)){
                    count++;
                }
            }
        }
        return count >= 2;
    }
}
