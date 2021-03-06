package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.User;
import java.util.Optional;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Integer> {
  public Optional<User> findById(Integer id);
  public Optional<User> findUserByEmail(String email);
  public Optional<User> findUserByUsername(String username);
  public Optional<User> findUserByPassword(String password);
  public Optional<User> findByUsernameAndPassword(String username, String password);
}
