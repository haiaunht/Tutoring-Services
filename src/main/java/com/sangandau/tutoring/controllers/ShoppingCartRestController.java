package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.services.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShoppingCartRestController {
  @Autowired
  private ShoppingCartService cartService;

  @PostMapping("/cart/add/{courseId}/{qty}")
  public String addProductToCart(@PathVariable Integer courseId) {

    return "";
  }
}
