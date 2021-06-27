package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Category;
import com.sangandau.tutoring.repositories.CategoryRepository;
import java.util.List;
import javax.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CategorySeeder {

  public void seed (CategoryRepository categoryRepository) {
    List<Category> categoryList = (List<Category>) categoryRepository.findAll();

    if (categoryList.size() == 0) {
      Category front_end = new Category();
      front_end.setCategoryName("Front End Course");
      front_end.setDescription("Front-end languages and frameworks");
      front_end.setImage("https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png");
      categoryRepository.save(front_end);

      Category back_end = new Category();
      back_end.setCategoryName("Back End Course");
      back_end.setDescription("Back-end languages and frameworks");
      back_end.setImage("https://hackr.io/blog/how-to-become-a-backend-developer/thumbnail/large");
      categoryRepository.save(back_end);

      Category db = new Category();
      db.setCategoryName("Database");
      db.setDescription("Database Course");
      db.setImage("https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png");
      categoryRepository.save(db);

      Category algo = new Category();
      algo.setCategoryName("Algorithm and Data Structure");
      algo.setDescription("Course related to Algorithm, data structure, Problem Solving Skills");
      algo.setImage("https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png");
      categoryRepository.save(algo);
    }
  }
}
