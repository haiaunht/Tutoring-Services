package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.services.CourseService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseRestApiController {
  private CourseService courseService;

  @Autowired
  public CourseRestApiController(CourseService courseService) {
    this.courseService = courseService;
  }

  @GetMapping
  public List<Course> findAll() {
    return courseService.findAll();
  }
}
