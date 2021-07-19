package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.Role;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.repositories.CourseRepository;
import com.sangandau.tutoring.repositories.RoleRepository;
import com.sangandau.tutoring.repositories.UserRepository;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.stereotype.Component;

@Component
public class UserSeeder {
  public void seed (RoleRepository roleRepository, UserRepository userRepository, CourseRepository courseRepository) {
    List<Role> roleList = (List<Role>) roleRepository.findAll();
    List<User> users = (List<User>) userRepository.findAll();
    List<Course> courses = (List<Course>) courseRepository.findAll();

    if (users.size() == 0) {

      User sang = new User();
      sang.setFullName("Sang Vo");
      sang.setEmail("yauacom@yahoo.com");
      sang.setPhone("425-333-4444");
      sang.setUsername("yauacomAdmin");
      sang.setPassword("yauacom123");
      sang.setRole(roleList.get(0));
      userRepository.save(sang);

      User sang_instructor = new User();
      sang_instructor.setFullName("Sang Vo");
      sang_instructor.setEmail("yauacom@yahoo.com");
      sang_instructor.setPhone("425-333-4444");
      sang_instructor.setUsername("yauacomInstructor");
      sang_instructor.setPassword("yauacom123");
      sang_instructor.setRole(roleList.get(1));
      userRepository.save(sang_instructor);

      User au = new User();
      au.setFullName("Hai-Au Bui");
      au.setEmail("haiaunht@yahoo.com");
      au.setPhone("425-123-4567");
      au.setUsername("haiaunhtAdmin");
      au.setPassword("haiau123");
      au.setRole(roleList.get(0));
      userRepository.save(au);

      User au_instructor = new User();
      au_instructor.setFullName("Hai-Au Bui");
      au_instructor.setEmail("haiaunht@yahoo.com");
      au_instructor.setPhone("425-123-4567");
      au_instructor.setUsername("haiaunhtInstructor");
      au_instructor.setPassword("haiau123");
      au_instructor.setRole(roleList.get(1));
      userRepository.save(au_instructor);

      User kim = new User();
      kim.setFullName("Kim Le");
      kim.setEmail("kim@yahoo.com");
      kim.setPhone("425-123-0000");
      kim.setUsername("kimle");
      kim.setPassword("kim123");
      kim.setRole(roleList.get(2));
      userRepository.save(kim);

    }
  }
}
