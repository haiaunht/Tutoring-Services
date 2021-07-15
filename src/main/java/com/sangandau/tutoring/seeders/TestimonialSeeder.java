package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Testimonial;
import com.sangandau.tutoring.repositories.TestimonialRepository;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class TestimonialSeeder {
  public void seed(TestimonialRepository testimonialRepository) {
    List<Testimonial> testimonials = (List<Testimonial>) testimonialRepository.findAll();

    if (testimonials.size() == 0) {
      Testimonial testimonial1 = new Testimonial();
      testimonial1.setName("Nancy Drunk");
      testimonial1.setDescription(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident "
          + "ad, fugit exercitationem, molestiae error laudantium ipsum sint "
          + "accusamus saepe assumenda pariatur quis fugiat, ducimus ullam "
          + "tempora facilis!");
      testimonial1.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-AYLf7E-yebvUh-dfvl7mMVZQlRrEt7xJ6Q&usqp=CAU");
      testimonial1.setJob("Web Developer");
      testimonialRepository.save(testimonial1);

      Testimonial testimonial2 = new Testimonial();
      testimonial2.setName("Linda Sleepy");
      testimonial2.setDescription(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident "
          + "ad, fugit exercitationem, molestiae error laudantium ipsum sint "
          + "accusamus saepe assumenda pariatur quis fugiat.");
      testimonial2.setImageUrl("https://bccimmigration.com/wp-content/uploads/2017/04/Dana-Rifai-Square-Portrait-300x300.jpg");
      testimonial2.setJob("Backend Developer");
      testimonialRepository.save(testimonial2);

      Testimonial testimonial3 = new Testimonial();
      testimonial3.setName("William Sneaker");
      testimonial3.setDescription(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident "
          + "ad, fugit exercitationem, molestiae error laudantium ipsum sint "
          + "tempora facilis!");
      testimonial3.setImageUrl("https://lonestarcares.org/wp-content/uploads/2020/11/Devillier_Corey-Square-Photo.jpg");
      testimonial3.setJob("Database Specialist");
      testimonialRepository.save(testimonial3);

      Testimonial testimonial4 = new Testimonial();
      testimonial4.setName("Peter Pepper");
      testimonial4.setDescription(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident "
          + "ad, fugit exercitationem, molestiae error laudantium ipsum sint "
          + "accusamus saepe assumenda pariatur quis fugiat, ducimus ullam "
          + "tempora facilis!");
      testimonial4.setImageUrl("https://www.americandatabank.com/wp-content/uploads/2018/10/portrait-square-03.jpg");
      testimonial4.setJob("Software Developer");
      testimonialRepository.save(testimonial4);

    }
  }
}
