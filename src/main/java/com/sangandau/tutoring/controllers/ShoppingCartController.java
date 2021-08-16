package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.CartItem;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.services.ShoppingCartService;
import com.sangandau.tutoring.services.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShoppingCartController {
  @Autowired
  private ShoppingCartService cartService;
  @Autowired
  private UserService userService;

  @GetMapping("/cart/{userId}")
  public List<CartItem> showShoppingCart(@PathVariable Integer userId) {
    User currentUser = userService.findById(userId).get();
    List<CartItem> cartItems = cartService.listCartItem(currentUser);
    return cartItems;
  }
}
