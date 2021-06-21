package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.User_Course;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface User_Course_Repository extends PagingAndSortingRepository<User_Course, Integer> {

}
