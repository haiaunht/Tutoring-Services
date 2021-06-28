package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.Role;
import com.sangandau.tutoring.repositories.RoleRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {
  private RoleRepository roleRepository;

  @Autowired
  public RoleService(RoleRepository roleRepository) {
    this.roleRepository = roleRepository;
  }

  public Optional<Role> findAllInstructor() {
    return roleRepository.findAllByName("Instructor");
  }
}
