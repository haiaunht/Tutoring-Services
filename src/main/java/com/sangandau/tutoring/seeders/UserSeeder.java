package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Role;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.repositories.RoleRepository;
import com.sangandau.tutoring.repositories.UserRepository;
import java.util.List;
import javax.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserSeeder { 
  public void seed (RoleRepository roleRepository, UserRepository userRepository) {
    List<Role> roleList = (List<Role>) roleRepository.findAll();
    List<User> users = (List<User>) userRepository.findAll();

    if (users.size() == 0) {

      User sang = new User();
      sang.setFirstName("Sang");
      sang.setLastName("Vo");
      sang.setEmail("yauacom@yahoo.com");
      sang.setPhone("425-333-4444");
      sang.setRole(roleList.get(0));
      userRepository.save(sang);

      User sang_instructor = new User();
      sang_instructor.setFirstName("Sang");
      sang_instructor.setLastName("Vo");
      sang_instructor.setEmail("yauacom@yahoo.com");
      sang_instructor.setPhone("425-333-4444");
      sang_instructor.setRole(roleList.get(1));
      userRepository.save(sang_instructor);

      User au = new User();
      au.setFirstName("Hai-Au");
      au.setLastName("Bui");
      au.setEmail("haiaunht@yahoo.com");
      au.setPhone("425-123-4567");
      au.setRole(roleList.get(0));
      userRepository.save(au);

      User au_instructor = new User();
      au_instructor.setFirstName("Hai-Au");
      au_instructor.setLastName("Bui");
      au_instructor.setEmail("haiaunht@yahoo.com");
      au_instructor.setPhone("425-123-4567");
      au_instructor.setRole(roleList.get(1));
      userRepository.save(au_instructor);
    }
  }
}
