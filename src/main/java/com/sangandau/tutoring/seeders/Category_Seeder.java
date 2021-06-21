package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Category;
import com.sangandau.tutoring.repositories.CategoryRepository;
import java.util.List;
import javax.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Category_Seeder implements CommandLineRunner {
  private CategoryRepository categoryRepository;

  @Autowired
  public Category_Seeder(CategoryRepository categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    List<Category> categoryList = (List<Category>) categoryRepository.findAll();

    if (categoryList.size() == 0) {
      Category front_end = new Category();
      front_end.setCategoryName("Front End Course");
      front_end.setDescription("Front-end languages and frameworks");
      categoryRepository.save(front_end);

      Category back_end = new Category();
      back_end.setCategoryName("Back End Course");
      back_end.setDescription("Back-end languages and frameworks");
      categoryRepository.save(back_end);

      Category db = new Category();
      db.setCategoryName("Database");
      db.setDescription("Database Course");
      categoryRepository.save(db);

      Category algo = new Category();
      algo.setCategoryName("Algorithm and Data Structure");
      algo.setDescription("Course related to Algorithm, data structure, Problem Solving Skills");
      categoryRepository.save(algo);
    }
  }
}
