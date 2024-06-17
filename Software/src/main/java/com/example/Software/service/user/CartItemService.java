package com.example.Software.service.user;

import com.example.Software.model.CartItem;
import com.example.Software.repository.user.CartItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CartItemService {
    private final CartItemRepository cartItemRepository;

    public List<CartItem> getCartItemsByUserEmail(String userEmail) {
        return cartItemRepository.findCartItemByUserEmail(userEmail);
    }

    public void addItem(CartItem cartItem) {
        cartItemRepository.insert(cartItem);
    }

    public void updateQuantity(String cartItemId, int quantity) {
        cartItemRepository.updateCartQuantityByProductId(cartItemId, quantity);
    }

    public void increaseQuantity(String cartItemId, int quantity) {
        cartItemRepository.increaseCartQuantityByProductId(cartItemId, quantity);
    }

    public void removeItem(String cartItemId) {
        cartItemRepository.removeCartItemById(cartItemId);
    }

    public CartItem getCartItemByUserEmailAndProductId(String userEmail, String productId) {
        return cartItemRepository.findCartItemByUserEmailAndProductId(userEmail, productId);
    }

    public void removeCartItemsByEmail(String userEmail) {
        cartItemRepository.removeAllByUserEmail(userEmail);
    }
}
