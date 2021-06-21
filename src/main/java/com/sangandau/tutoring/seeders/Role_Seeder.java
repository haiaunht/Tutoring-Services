package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Role;
import com.sangandau.tutoring.repositories.RoleRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Role_Seeder implements CommandLineRunner {
  private RoleRepository roleRepository;

  @Autowired
  public Role_Seeder(RoleRepository roleRepos) {
    this.roleRepository = roleRepos;
  }

  @Override
  public void run(String... args) throws Exception {
    List<Role> roles = (List<Role>) roleRepository.findAll();

    if (roles.size() == 0) {
      Role admin = new Role();
      admin.setName("Admin");
      admin.setDescription("For admin role only.");
      roleRepository.save(admin);

      Role tutor = new Role();
      tutor.setName("Instructor");
      tutor.setDescription("Instructor of A-Study company");
      roleRepository.save(tutor);

      Role user = new Role();
      user.setName("User");
      user.setDescription("User");
      roleRepository.save(user);
    }
  }
}
