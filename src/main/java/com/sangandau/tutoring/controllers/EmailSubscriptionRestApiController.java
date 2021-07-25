package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.EmailSubscription;
import com.sangandau.tutoring.services.EmailSubscriptionService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/subscription")
public class EmailSubscriptionRestApiController {

  private final EmailSubscriptionService emailSubscriptionService;

  @PostMapping
  public ResponseEntity<Map<String, String>> saveNewEmail(@Valid @RequestBody EmailSubscription newEmail, BindingResult bindingResult) {
    Map<String, String> errors = new HashMap<>();

    if (bindingResult.hasErrors()) {
      List<ObjectError> errorObjects = bindingResult.getAllErrors();
      errorObjects.forEach(error -> {
        errors.put(error.getCodes()[0].split("\\.")[2], error.getDefaultMessage());
      });
      return new ResponseEntity<>(errors,
          HttpStatus.UNPROCESSABLE_ENTITY);
    }

    return emailSubscriptionService.saveNewEmailSubscription(newEmail);
  }
}
