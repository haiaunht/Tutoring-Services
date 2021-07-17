package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.services.UserService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserRestApiController {
  private UserService userService;

  @Autowired
  public UserRestApiController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/new-user")
  public User create(@RequestBody User newUser) {
    String email = newUser.getEmail();
    String username = newUser.getUsername();

    if (!userService.isUsernameExist(username)) {
      return userService.save(newUser);
    }
    else {
      throw new UserAlreadyExist();
    }
  }

  @GetMapping("/{username}/{password}")
  public User match(@PathVariable String username, @PathVariable String password) {
//    return userService.isUsernameExist(username) && userService.isPasswordExist(password);
    return userService.findByUsernameAndPassword(username, password).orElseThrow(() -> new UserNotFound() );
  }

  @NoArgsConstructor
  private class UserAlreadyExist extends RuntimeException {};

  @NoArgsConstructor
  private class UserNotFound extends RuntimeException {};

  @ControllerAdvice
  private class UserAdvice {
    @ResponseBody
    @ExceptionHandler(UserRestApiController.UserAlreadyExist.class)
    @ResponseStatus(HttpStatus.IM_USED)
    String petNotFoundHandler(UserRestApiController.UserAlreadyExist ex) {
      return "User is already register";
    }
  }
}
