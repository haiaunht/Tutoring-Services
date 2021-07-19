package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.Role;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.repositories.RoleRepository;
import com.sangandau.tutoring.repositories.UserRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  private UserRepository userRepository;
  private RoleRepository roleRepos;

  @Autowired
  public UserService(UserRepository userRepository, RoleRepository roleRepos) {
    this.userRepository = userRepository;
    this.roleRepos = roleRepos;
  }

  public Optional<User> findById(Integer id) {
    return userRepository.findById(id);
  }

  public Set<Course> findCourseOfUser(Integer id) {
    Optional<User> foundUser = userRepository.findById(id);
    Set<Course> courses = (Set<Course>) foundUser.get().getCourses();

    return courses;
  }

  public boolean isEmailExist(String email) {
    return userRepository.findUserByEmail(email).isPresent();
  }

  public boolean isUsernameExist(String username) {
    return userRepository.findUserByUsername(username).isPresent();
  }

  public boolean isPasswordExist(String password) {
    return userRepository.findUserByPassword(password).isPresent();
  }

  public Optional<User> findByUsernameAndPassword(String username, String password) {
    return userRepository.findByUsernameAndPassword(username, password);
  }

  public User save(User newRegister) {
    Role role;
    Optional<Role> userRole = roleRepos.findAllByName(newRegister.getRole().getName());
    newRegister.setRole(userRole.get());
    return userRepository.save(newRegister);
  }
}
