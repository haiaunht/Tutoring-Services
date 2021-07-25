package com.sangandau.tutoring.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class EmailAlreadyExistsException extends RuntimeException {
  public EmailAlreadyExistsException(String msg) {super(msg);}
}
