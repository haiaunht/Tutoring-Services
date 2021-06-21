package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.Course;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends PagingAndSortingRepository<Course, Integer> {

}
