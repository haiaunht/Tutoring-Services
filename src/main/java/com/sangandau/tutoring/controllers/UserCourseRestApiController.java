package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.CartItem;
import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User_Course;
import com.sangandau.tutoring.services.CourseService;
import com.sangandau.tutoring.services.UserCourseService;
import com.sangandau.tutoring.services.UserService;
import java.sql.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user-course")
public class UserCourseRestApiController {
  @Autowired
  private UserService service;
  @Autowired
  private CourseService courseService;
  @Autowired
  private UserCourseService userCourseService;


  @GetMapping("/{userId}")
  public List<Course> findAll(@PathVariable Integer userId) {
    Set<Course> result = service.findCourseOfUser(userId);
    return new ArrayList<>(result);
  }

  @PostMapping("/{userId}/paid/{courseId}")
  public User_Course addToShopping(@PathVariable Integer userId, @PathVariable Integer courseId) {
    return userCourseService.save(userId,courseId);
  }
}
