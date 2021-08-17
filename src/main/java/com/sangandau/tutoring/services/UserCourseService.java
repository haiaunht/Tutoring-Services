package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.models.User_Course;
import com.sangandau.tutoring.repositories.CourseRepository;
import com.sangandau.tutoring.repositories.UserRepository;
import com.sangandau.tutoring.repositories.User_Course_Repository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserCourseService {
  @Autowired
  private User_Course_Repository repo;
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private CourseRepository courseRepository;

  public List<User_Course> findAll(Integer userId) {
    return repo.findAllByUserId(userId);
  }

  public User_Course save( Integer userId, Integer courseId) {
    Optional<User> currentUser = userRepository.findById(userId);
    Optional<Course> currentCourse = courseRepository.findById(courseId);

    User_Course user_course = new User_Course();
    user_course.setCourse(currentCourse.get());
    user_course.setUser(currentUser.get());

    return repo.save(user_course);
  }
}
