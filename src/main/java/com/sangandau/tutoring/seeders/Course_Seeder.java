package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Category;
import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.repositories.CategoryRepository;
import com.sangandau.tutoring.repositories.CourseRepository;
import java.util.List;
import org.hibernate.internal.build.AllowPrintStacktrace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Course_Seeder implements CommandLineRunner {
  private CourseRepository courseRepository;
  private CategoryRepository categoryRepository;

  @Autowired
  public Course_Seeder(CourseRepository courseRepository,
      CategoryRepository categoryRepository) {
    this.courseRepository = courseRepository;
    this.categoryRepository = categoryRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    List<Course> courseList = (List<Course>) courseRepository.findAll();
    List<Category> categoryList = (List<Category>) categoryRepository.findAll();

    if (courseList.size() == 0) {
      // ======  front-end and framework ========
      Course javascript = new Course();
      javascript.setName("JavaScript");
      javascript.setDescription("JavaScript (often shortened to JS) is a lightweight, "
          + "interpreted, object-oriented language with first-class functions, "
          + "and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.");
      javascript.setImageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png");
      javascript.setRating(4.7);
      javascript.setPrice(19.99);
      javascript.setCategory(categoryList.get(0));
      courseRepository.save(javascript);

      Course react = new Course();
      react.setName("React.js");
      react.setDescription("React (also known as React.js or ReactJS) is an open-source front-end JavaScript library "
          + "for building user interfaces or UI components. "
          + "It is maintained by Facebook and a community of individual developers and companies. "
          + "React can be used as a base in the development of single-page or mobile applications.");
      react.setImageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png");
      react.setRating(5.0);
      react.setPrice(14.99);
      react.setCategory(categoryList.get(0));
      courseRepository.save(react);

      Course html = new Course();
      html.setName("HTML");
      html.setDescription("The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. ... "
          + "HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. "
          + "HTML elements are the building blocks of HTML pages.");
      html.setImageUrl("https://freeiconshop.com/wp-content/uploads/edd/html-flat.png");
      html.setRating(4.9);
      html.setPrice(9.99);
      html.setCategory(categoryList.get(0));
      courseRepository.save(html);

      Course css = new Course();
      css.setName("CSS");
      css.setDescription("Stands for \"Cascading Style Sheet.\" Cascading style sheets are used to format the layout of Web pages. "
          + "They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.");
      css.setImageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png");
      css.setRating(4.9);
      css.setPrice(9.99);
      css.setCategory(categoryList.get(0));
      courseRepository.save(css);


      // =======  Back end and framework ========
      Course java = new Course();
      java.setName("Java");
      java.setDescription("Java is an object-oriented programming language that produces software for multiple platforms. "
          + "When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS), "
          + "including Windows, Linux and Mac OS.");
      java.setImageUrl("data:image/png;base64,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");
      java.setRating(5.0);
      java.setPrice(19.99);
      java.setCategory(categoryList.get(1));
      courseRepository.save(java);

      Course spring = new Course();
      spring.setName("Spring boot");
      spring.setDescription("Spring Boot is a brand new framework from the team at Pivotal, designed to simplify the bootstrapping and development of a new Spring application. "
          + "The framework takes an opinionated approach to configuration, freeing developers from the need to define boilerplate configuration");
      spring.setImageUrl("https://blogs.ashrithgn.com/content/images/2019/11/th.jpg");
      spring.setRating(4.6);
      spring.setPrice(24.99);
      spring.setCategory(categoryList.get(1));
      courseRepository.save(spring);

      Course node = new Course();
      node.setName("Node.js");
      node.setDescription("Node. js (Node) is an open source development platform for executing JavaScript code server-side. "
          + "Node is useful for developing applications that require a persistent connection from the browser to the server and is "
          + "often used for real-time applications such as chat, news feeds and web push notifications.");
      node.setImageUrl("https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg");
      node.setRating(4.7);
      node.setPrice(12.99);
      node.setCategory(categoryList.get(1));
      courseRepository.save(node);

      // ======== Database ============
      Course postgre = new Course();
      postgre.setName("PostgreSQL");
      postgre.setDescription("PostgreSQL is a powerful, open source object-relational database system that uses and extends the "
          + "SQL language combined with many features that safely store and scale the most complicated data workloads.");
      postgre.setRating(5.0);
      postgre.setPrice(15.99);
      postgre.setCategory(categoryList.get(2));
      courseRepository.save(postgre);

      //======= Algo and Data structure =======
      Course algo_java = new Course();
      algo_java.setName("Deep dive using Java");
      algo_java.setDescription("Learn about Arrays, Linked Lists, Trees, Hashtables, Stacks, Queues, Heaps, Sort algorithms and Search algorithms");
      algo_java.setImageUrl("https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/8AGRyV4sRLmW4HoSN9W4");
      algo_java.setRating(5.0);
      algo_java.setPrice(19.99);
      algo_java.setCategory(categoryList.get(3));
      courseRepository.save(algo_java);


      Course java_js_master = new Course();
      java_js_master.setName("JavaScript Algorithms and Data Structures Masterclass");
      java_js_master.setDescription("Learn JavaScript from scratch, build front-end & back-end applications with JavaScript, Vue, Node, Express & MySQL");
      java_js_master.setImageUrl("https://static.skillshare.com/uploads/video/thumbnails/399e0307a2ac7ed614e32439584f7543/original");
      java_js_master.setRating(4.4);
      java_js_master.setPrice(12.99);
      java_js_master.setCategory(categoryList.get(3));
      courseRepository.save(java_js_master);
    }
  }
}
