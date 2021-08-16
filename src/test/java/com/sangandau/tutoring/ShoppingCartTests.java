package com.sangandau.tutoring;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.sangandau.tutoring.models.CartItem;
import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.models.User_Course;
import com.sangandau.tutoring.repositories.CartItemRepository;
import com.sangandau.tutoring.repositories.User_Course_Repository;
import com.sangandau.tutoring.models.User;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class ShoppingCartTests {
  @Autowired
  private CartItemRepository cartItemRepository;
  @Autowired
  private TestEntityManager entityManager;

  @Test
  public void testAddOneCartItem() {
    Course course = entityManager.find(Course.class, 1);
    User user = entityManager.find(User.class, 5);

    CartItem cartItem = new CartItem();
    cartItem.setUser(user);
    cartItem.setCourse(course);

    CartItem savedCartItem = cartItemRepository.save(cartItem);
    assertTrue(savedCartItem.getId() > 0);
  }

  @Test
  public void testGetCartItemByUser() {
    User user = new User();
    user.setId(5);

    List<CartItem> cartItems = cartItemRepository.findByUser(user);
    assertEquals(1, cartItems.size());

  }
}
