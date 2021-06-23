package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.Category;
import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.repositories.CategoryRepository;
import com.sangandau.tutoring.services.CategoryService;
import com.sangandau.tutoring.services.CourseService;
import java.util.List;
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
@RequestMapping("/api/v1")
public class CategoryRestApiController {
  private CategoryService categoryService;
  private CourseService courseService;

  @Autowired
  public CategoryRestApiController(CategoryService categoryService,
      CourseService courseService) {
    this.categoryService = categoryService;
    this.courseService = courseService;
  }

  @GetMapping("/categories")
  public List<Category> findAll() {
    return categoryService.findAll();
  }

  @GetMapping("/{categoryName}")
  public List<Course> getAllCourseByCategory(@PathVariable String categoryName) {
    return categoryService.findByCategory(categoryName).orElseThrow(() -> new CategoryNotFound()).getCourses();
  }

  @NoArgsConstructor
  class CategoryNotFound extends RuntimeException {};

  @ControllerAdvice
  private class PetTypeNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(CategoryNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String petNotFoundHandler(CategoryNotFound ex) {
      return "Can not found what you are looking for";
    }
  }
}
