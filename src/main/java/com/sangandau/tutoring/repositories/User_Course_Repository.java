package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User_Course;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface User_Course_Repository extends PagingAndSortingRepository<User_Course, Integer> {
  public List<User_Course> findAllByUserId(Integer id);
}
