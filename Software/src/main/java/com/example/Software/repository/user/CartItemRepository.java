package com.example.Software.repository.user;

import com.example.Software.model.CartItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemRepository extends MongoRepository<CartItem, String> {
    List<CartItem> findCartItemByUserEmail(String userId);

    void removeCartItemById(String id);

    @Query("{ '_id' :  ?0}")
    @Update("{'$inc' :  {'quantity' :  ?1}}")
    void updateCartQuantityByProductId(String productId, int quantity);

    @Query("{'userEmail' :  ?0, 'productId' :  ?1}")
    CartItem findCartItemByUserEmailAndProductId(String userEmail, String productId);
}
