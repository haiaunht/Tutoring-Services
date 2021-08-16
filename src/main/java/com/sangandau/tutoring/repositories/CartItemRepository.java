package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.CartItem;
import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends PagingAndSortingRepository<CartItem, Integer> {
  public List<CartItem> findByUser(User user);
  public CartItem findByUserAndCourse(User user, Course course);
}
