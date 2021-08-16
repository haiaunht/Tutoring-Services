package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.CartItem;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.services.CourseService;
import com.sangandau.tutoring.services.ShoppingCartService;
import com.sangandau.tutoring.services.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/cartItems")
public class CartController {
  @Autowired
  private CourseService courseService;
  @Autowired
  private UserService userService;
  @Autowired
  private ShoppingCartService shoppingCartService;

  @GetMapping("/{userId}")
  public List<CartItem> findCartItem(@PathVariable Integer userId) {
    User findUser = userService.findById(userId).get();
    return shoppingCartService.listCartItem(findUser);
  }

  @PostMapping
  public void create(@RequestBody CartItem cartItem) {
    System.out.println(cartItem);
    shoppingCartService.save(cartItem);
  }

}
