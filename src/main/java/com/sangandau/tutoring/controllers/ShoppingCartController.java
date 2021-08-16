package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.CartItem;
import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.services.CourseService;
import com.sangandau.tutoring.services.ShoppingCartService;
import com.sangandau.tutoring.services.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShoppingCartController {
  @Autowired
  private ShoppingCartService cartService;
  @Autowired
  private UserService userService;
  @Autowired
  private CourseService courseService;

  @GetMapping("/cart/{userId}")
  public List<CartItem> showShoppingCart(@PathVariable Integer userId) {
    User currentUser = userService.findById(userId).get();
    List<CartItem> cartItems = cartService.listCartItem(currentUser);
    return cartItems;
  }

  @PostMapping("/cart/{userId}/{courseId}")
  public CartItem add(@PathVariable Integer userId, @PathVariable Integer courseId) {
    User currentUser = userService.findById(userId).get();
    Course currentCourse = courseService.findById(courseId).get();
    CartItem cart = new CartItem();
    cart.setUser(currentUser);
    cart.setCourse(currentCourse);
    cart.setQuantity(1);
    return cartService.save(cart);
  }
}
