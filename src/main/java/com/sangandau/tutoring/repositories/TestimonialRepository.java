package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.Testimonial;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestimonialRepository extends PagingAndSortingRepository<Testimonial, Integer> {

}
