package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.CartItem;
import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.repositories.CartItemRepository;
import com.sangandau.tutoring.repositories.CourseRepository;
import com.sangandau.tutoring.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShoppingCartService {
  @Autowired
  private CartItemRepository cartItemRepository;
  @Autowired
  private CourseRepository courseRepository;
  @Autowired
  private UserRepository userRepository;

  public List<CartItem> listCartItem( User user) {
    return cartItemRepository.findByUser(user);
  }

  public Integer addCourse(Integer courseId, Integer quantity, User user) {
    Course course = courseRepository.findById(courseId).get();
    CartItem cartItem = cartItemRepository.findByUserAndCourse(user, course);

    if (cartItem != null) {
      cartItem.setQuantity(cartItem.getQuantity()+quantity);
    } else {
      cartItem = new CartItem();
      cartItem.setQuantity(quantity);
      cartItem.setCourse(course);
      cartItem.setUser(user);
    }

    cartItemRepository.save(cartItem);
    return cartItem.getQuantity();
  }

  public CartItem save(CartItem cartItem) {
    Optional<User> currentUser = userRepository.findById(cartItem.getUser().getId());
    cartItem.setUser(currentUser.get());

    Optional<Course> currentCourse = courseRepository.findById(cartItem.getCourse().getId());
    cartItem.setCourse(currentCourse.get());

    cartItem.setQuantity(1);

    return cartItemRepository.save(cartItem);
  }
}
