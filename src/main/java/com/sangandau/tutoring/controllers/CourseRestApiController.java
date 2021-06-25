package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.services.CourseService;
import java.util.List;
import java.util.Optional;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
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

  @GetMapping("/{courseName}")
  public Course findCourseByName(@PathVariable String courseName) {
    return courseService.findCourseByName(courseName).orElseThrow(() -> new CourseNotFound());
  }

  @NoArgsConstructor
  private class CourseNotFound extends RuntimeException {};

  @ControllerAdvice
  private class CourseNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(CourseRestApiController.CourseNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String petNotFoundHandler(CourseRestApiController.CourseNotFound ex) {
      return "Can not found what you are looking for";
    }
  }
}
