package com.example.Software.action;

import com.example.Software.model.Point;
import com.example.Software.service.user.UserPointService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.logging.log4j.util.PropertySource;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

@AllArgsConstructor
@Data
public class PointContainer {
    private static LinkedHashMap<String, Point> map = new LinkedHashMap<>();

    public static void init(UserPointService userPointService) {
        List<Point> points = userPointService.getAllUserPoints();
        Collections.sort(points);
        points.forEach(System.out::println);
        points.forEach(point -> map.put(point.getId(), point));
        }

    public static List<Point> getAllPoints() {
        return new ArrayList<>(map.values());
    }

    public synchronized static void updatePoint(String pointId, int pointUpdate) {
        Point point = map.get(pointId);
        if (point != null) {
            int newPoint = point.getPoint() + pointUpdate;
            point.setPoint(newPoint);
        }
        map = map.entrySet().stream().sorted(Map.Entry.comparingByValue())
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));
    }
}
