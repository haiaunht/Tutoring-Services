//package com.sangandau.tutoring;
//
//import static org.junit.jupiter.api.Assertions.assertTrue;
//
//import com.sangandau.tutoring.models.CartItem;
//import com.sangandau.tutoring.models.Course;
//import com.sangandau.tutoring.models.User;
//import com.sangandau.tutoring.repositories.CartItemRepository;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//import org.springframework.test.annotation.Rollback;
//
//@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE)
//@Rollback(false)
//public class CartItemTest {
//  @Autowired
//  private CartItemRepository cartItemRepository;
//
//  @Autowired
//  private TestEntityManager entityManager;
//
//  @Test
//  public void testAddOneCartItem() {
//    Course course = entityManager.find(Course.class, 5);
//    User user = entityManager.find(User.class, 3);
//
//    CartItem cartItem = new CartItem();
//    cartItem.setUser(user);
//    cartItem.setCourse(course);
//
//    CartItem savedCartItem = cartItemRepository.save(cartItem);
//    assertTrue(savedCartItem.getId() > 0);
//  }
//}
