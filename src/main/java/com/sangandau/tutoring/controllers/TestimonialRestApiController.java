package com.sangandau.tutoring.controllers;

import com.sangandau.tutoring.models.Testimonial;
import com.sangandau.tutoring.services.TestimonialService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class TestimonialRestApiController {
  private TestimonialService testimonialService;

  @Autowired
  public TestimonialRestApiController(
      TestimonialService testimonialService) {
    this.testimonialService = testimonialService;
  }

  @GetMapping("/testimonials")
  public List<Testimonial> findAll() {
    return testimonialService.findAll();
  }
}
