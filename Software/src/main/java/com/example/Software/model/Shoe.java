package com.example.Software.model;

import com.example.Software.constant.OriginCountry;
import com.example.Software.constant.ShoeColor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;
import java.util.Map;

@Document(collection = "shoe")
@Data
public class Shoe {

    @Id
    private String shoeId;

    @Field("style")
    private String style;

    @Field("shoe_name")
    private String name;

    @Field("summary")
    private String summary;

    @Field("categories")
    private List<String> categories;

    @Field("colors")
    private List<ShoeColor> colors;

    @Field("origin_country")
    private OriginCountry originCountry;

    @Field("benefits")
    private List<String> benefits;

    @Field("story")
    private String story;

    @Field("price")
    private Float price;

    @Field("image_paths")
    private List<String> imagePaths;

    @Field("size_stock")
    private Map<String, Integer> stock;

    @Field("details")
    private List<String> details;
}
