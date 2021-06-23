package com.sangandau.tutoring.repositories;

import com.sangandau.tutoring.models.Category;
import java.util.Optional;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends PagingAndSortingRepository<Category, Integer> {

  Optional<Category> findByCategoryName(String categoryName);
}
