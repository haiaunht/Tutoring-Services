package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.User_Course;
import com.sangandau.tutoring.repositories.User_Course_Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserCourseService {
  private User_Course_Repository repo;

  @Autowired
  public UserCourseService(User_Course_Repository repo) {
    this.repo = repo;
  }

  public List<User_Course> findAll(Integer userId) {
    return repo.findAllByUserId(userId);
  }
}
