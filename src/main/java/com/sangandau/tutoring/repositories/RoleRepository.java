package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.Role;
import java.util.Optional;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends PagingAndSortingRepository<Role, Integer> {
  public Optional<Role> findAllByName(String name);
}
