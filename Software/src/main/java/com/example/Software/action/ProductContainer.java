package com.example.Software.action;

import com.example.Software.model.Product;
import com.example.Software.service.product.ProductService;
import lombok.AllArgsConstructor;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.PriorityBlockingQueue;


@AllArgsConstructor
public class ProductContainer {
    private static final ConcurrentHashMap<String, Product> productConcurrentHashMap = new ConcurrentHashMap<>();
    private static PriorityQueue<Product> productPriorityQueue;

    public static void init(ProductService productService) {
        List<Product> products = productService.getAllProducts();
        products.forEach(product -> productConcurrentHashMap.put(product.getId(), product));
        productPriorityQueue = new PriorityQueue<>(productConcurrentHashMap.values());
    }

    public static List<Product> getProducts() {
        return new ArrayList<>(productPriorityQueue);
    }

    public static void updateProduct(Product product) {
        String id = product.getId();
        productConcurrentHashMap.put(id, product);
        productPriorityQueue = new PriorityQueue<>(productConcurrentHashMap.values());
    }

}

//@AllArgsConstructor
//public class ProductContainer {
//    private static PriorityBlockingQueue<Product> productConcurrentHeap = new PriorityBlockingQueue<>();
//    private static List<Product> productList;
//
//    public static void init(ProductService productService) {
//        List<Product> products = productService.getAllProducts();
//        productConcurrentHeap.addAll(products);
//    }
//
//    public static List<Product> getProducts() {
//        return new ArrayList<>(productConcurrentHeap);
//    }
//
//    public static void updateProduct(Product product) {
//        productConcurrentHeap.remove(product);
//        productConcurrentHeap.add(product);
//    }
//}
