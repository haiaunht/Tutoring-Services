package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.repositories.CourseRepository;
import com.sangandau.tutoring.repositories.UserRepository;
import java.util.Optional;
import java.util.Set;
import org.springframework.stereotype.Component;

@Component
public class UserCourseSeeder {
  public void seed (UserRepository userRepo, CourseRepository courseRepo) {
    Optional<User> kim = userRepo.findUserByUsername("kimle");
    Optional<Course> javaScript0 = courseRepo.findById(1);

    Set<Course> kimCourses = kim.get().getCourses();
    kimCourses.add(javaScript0.get());

    Set<User> javaScriptUsers = javaScript0.get().getUsers();
    javaScriptUsers.add(kim.get());

    kimCourses.add(javaScript0.get());
    javaScriptUsers.add(kim.get());
  }
}
