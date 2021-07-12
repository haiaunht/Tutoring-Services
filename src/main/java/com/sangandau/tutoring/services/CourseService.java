package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.repositories.CourseRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
  private CourseRepository courseRepository;

  @Autowired
  public CourseService(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }

  public Page<Course> findAll(Pageable pageable) {
    return courseRepository.findAll(pageable);
  }

  public Optional<Course> findCourseByName(String courseName) {
    return courseRepository.findCourseByName(courseName);
  }
}
