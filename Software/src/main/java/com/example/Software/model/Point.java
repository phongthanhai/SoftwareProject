package com.example.Software.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "point")
@Data
@AllArgsConstructor
public class Point implements Comparable<Point>{
    @Id
    private String id;
    @Field("name")
    private String name;
    @Field("point")
    private int point;

    @Override
    public int compareTo(Point otherPoint) {
        return Integer.compare(otherPoint.point, this.point);
    }
}
