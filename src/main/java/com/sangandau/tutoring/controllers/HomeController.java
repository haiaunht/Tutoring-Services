package com.sangandau.tutoring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
  @GetMapping(value = {"/home", "/{categoryName}/courses", "/courses", "/courses/{courseName}", "/contact", "/login", "/404",
      "/instructors/all", "/instructors/{courseId}"})
  public String forward() {
    return "forward:/";
  }
}
