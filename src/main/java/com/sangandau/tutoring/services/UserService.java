package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.repositories.UserRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  private UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public Optional<User> findById(Integer id) {
    return userRepository.findById(id);
  }
}
