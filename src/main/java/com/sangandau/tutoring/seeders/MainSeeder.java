package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.repositories.CategoryRepository;
import com.sangandau.tutoring.repositories.CourseRepository;
import com.sangandau.tutoring.repositories.RoleRepository;
import com.sangandau.tutoring.repositories.TestimonialRepository;
import com.sangandau.tutoring.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner {
  @Autowired private RoleRepository roleRepository;
  @Autowired private RoleSeeder roleSeeder;

  @Autowired private UserRepository userRepository;
  @Autowired private UserSeeder userSeeder;

  @Autowired private CategoryRepository categoryRepository;
  @Autowired private CategorySeeder categorySeeder;

  @Autowired private CourseRepository courseRepository;
  @Autowired private CourseSeeder courseSeeder;

  @Autowired private TestimonialRepository testimonialRepository;
  @Autowired private TestimonialSeeder testimonialSeeder;

  @Override
  public void run(String... args) throws Exception {
    roleSeeder.seed(roleRepository);
    userSeeder.seed(roleRepository, userRepository);
    categorySeeder.seed(categoryRepository);
    courseSeeder.seed(categoryRepository, courseRepository);
    testimonialSeeder.seed(testimonialRepository);
  }
}
