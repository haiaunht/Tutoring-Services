package com.sangandau.tutoring.services;

import com.sangandau.tutoring.models.Category;
import com.sangandau.tutoring.repositories.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
  private CategoryRepository categoryRepository;

  @Autowired
  public CategoryService(CategoryRepository categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  public List<Category> findAll() {
    return (List<Category>) categoryRepository.findAll();
  }

  public Optional<Category> findByCategory(String categoryName) {
    return (Optional<Category>) categoryRepository.findByCategoryName(categoryName);
  }
}
