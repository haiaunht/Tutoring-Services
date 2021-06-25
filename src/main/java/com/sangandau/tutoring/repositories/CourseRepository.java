package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.Course;
import java.util.Optional;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends PagingAndSortingRepository<Course, Integer> {
  public Optional<Course> findCourseByName(String courseName);
}
