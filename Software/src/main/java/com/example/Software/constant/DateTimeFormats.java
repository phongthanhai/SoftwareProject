package com.example.Software.constant;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DateTimeException;
import java.util.Date;

public class DateTimeFormats {
    public static final String YYYY = "yyyy";
    public static final String YYYY_MM_SLASH_VERSION = "yyyy/MM";
    public static final String MM_DD = "MMdd";
    public static final String YYYY_MM_DD = "yyyy-MM-dd";
    public static final String DD_MM_YYYY_SLASH_VERSION = "dd/MM/yyyy";
    public static final String YYYY_MM_DD_HH_MM_SS_STANDARD = "yyyy-MM-dd HH:mm:ss";
    public static final String YYYY_MM_DD_HH_MM_SS_STANDARD_V2 = "yyyy/MM/dd HH:mm:ss";
    public static final String DD_MM_YYYY_HH_MM_SS_STANDARD = "dd/MM/yyyy HH:mm:ss";
    public static final String DD_MM_YYYY_HH_MM_STANDARD = "dd/MM/yyyy HH:mm";
    public static final String YYYY_MM = "yyyyMM";
    public static final String MM_DD_YYYY_HH_MM_SS_STANDARD = "MM/dd/yyyy HH:mm:ss";

    public static String format(Date dateTime, String pattern) {
        DateFormat df = new SimpleDateFormat(pattern);
        return df.format(dateTime);
    }

    public static Date parse(String date, String pattern) {
        try {
            DateFormat df = new SimpleDateFormat(pattern);
            return df.parse(date);
        } catch (ParseException e) {
            throw new DateTimeException(e.getMessage());
        }
    }

    public static String changeDateFormat(String date, String fromPattern, String toPattern) {
        Date newDate = DateTimeFormats.parse(date, fromPattern);
        return DateTimeFormats.format(newDate, toPattern);
    }
}
