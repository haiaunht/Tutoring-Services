package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User_Course;
import com.sangandau.tutoring.services.UserCourseService;
import com.sangandau.tutoring.services.UserService;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user-course")
public class UserCourseRestApiController {
  private UserService service;

  @Autowired
  public UserCourseRestApiController(UserService service) {
    this.service = service;
  }

  @GetMapping("/{userId}")
  public Set<Course> findAll(@PathVariable Integer userId) {
    return service.findCourseOfUser(userId);
  }
}
