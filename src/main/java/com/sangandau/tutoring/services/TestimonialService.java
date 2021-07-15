package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.Testimonial;
import com.sangandau.tutoring.repositories.TestimonialRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestimonialService {
  private TestimonialRepository  testimonialRepository;

  @Autowired
  public TestimonialService(
      TestimonialRepository testimonialRepository) {
    this.testimonialRepository = testimonialRepository;
  }

  public List<Testimonial> findAll() {
    return (List<Testimonial>) testimonialRepository.findAll();
  }
}
