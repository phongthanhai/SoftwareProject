package com.example.Software.controller.product;

import com.example.Software.model.ProductReview;
import com.example.Software.model.User;
import com.example.Software.response.SearchResult;
import com.example.Software.response.product.ProductDTOResponse;
import com.example.Software.response.product.ProductDetailResponse;
import com.example.Software.service.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("product")
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public SearchResult<List<ProductDTOResponse>> searchProducts(@RequestParam(required = false) String name,
                                                                 @RequestParam(required = false) String brand,
                                                                 @RequestParam(required = false) String gender,
                                                                 @RequestParam(required = false) String sortType,
                                                                 @RequestParam int page,
                                                                 @RequestParam int size) {
        if (StringUtils.hasText(name)){
            name = name.trim();
        }
        return productService.getProductByFilter(name, brand, gender, sortType, page, size);
    }

    @GetMapping("/{productId}")
    public ProductDetailResponse getProductDetail(@PathVariable String productId) {
        return productService.getProductDetailById(productId);
    }

    @PostMapping("/review")
    public void createProductReview(@RequestBody ProductReview productReview) {
        String userEmail = authService.getUserEmail();
        productReview.setUserEmail(userEmail);
        productReview.setCreateAt(new Date());
        productReviewService.addProductReview(productReview);
    }

    @GetMapping("/review/{productId}")
    public ListProductReviewResponse getListProductReview(@PathVariable String productId,
                                                          @RequestParam int page,
                                                          @RequestParam int size) {
        List<ProductReviewDTO> reviews = new ArrayList<>();
        List<ProductReview> productReviews = productReviewService.getProductReviewById(productId, page, size);
        List<String> userEmails = productReviews.stream().map(ProductReview::getUserEmail).toList();
        List<User> users = userService.getUserByEmails(userEmails);
        Map<String, User> userMap = users.stream().collect(Collectors.toMap(User::getEmail, user -> user));
        for (ProductReview productReview : productReviews) {
            User user = userMap.get(productReview.getUserEmail());
            reviews.add(ProductReviewDTO.from(productReview, user));
        }
        double averageRating = productReviewService.getAverageRating(productId);
        return new ListProductReviewResponse(averageRating, reviews);
    }
}
