package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.User;
import com.sangandau.tutoring.services.RoleService;
import com.sangandau.tutoring.services.UserService;
import java.util.List;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/instructors")
public class InstructorsRestApiController {
  private RoleService roleService;
  private UserService userService;

  @Autowired
  public InstructorsRestApiController(RoleService roleService,
      UserService userService) {
    this.roleService = roleService;
    this.userService = userService;
  }

  @GetMapping
  public List<User> findAllByName() {
    return roleService.findAllInstructor().orElseThrow(() -> new InstructorNotFound()).getUsers();
  }

  @GetMapping("/{instructorId}")
  public User findById(@PathVariable Integer instructorId) {
    return userService.findById(instructorId).orElseThrow(() -> new InstructorNotFound());
  }

  @NoArgsConstructor
  private class InstructorNotFound extends RuntimeException {};

  @ControllerAdvice
  private class InstructorNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(InstructorNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String petNotFoundHandler(InstructorNotFound ex) {
      return "Cannot find the instructor that you are looking for";
    }
  }
}
