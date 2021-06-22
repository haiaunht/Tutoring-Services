package com.sangandau.tutoring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
  @GetMapping(value = {"/home", "/courses", "/contact", "/login"})
  public String forward() {
    return "forward:/";
  }
}
