package com.sangandau.tutoring.seeders;

import com.sangandau.tutoring.models.Category;
import com.sangandau.tutoring.models.Course;
import com.sangandau.tutoring.repositories.CategoryRepository;
import com.sangandau.tutoring.repositories.CourseRepository;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class CourseSeeder {
  public void seed(CategoryRepository categoryRepository, CourseRepository courseRepository) {
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

      java.setImageUrl("https://www.trycatchclasses.com/wp-content/uploads/2020/02/Java.jpg");
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
      postgre.setImageUrl("https://www.zdnet.com/a/hub/i/r/2018/04/19/092cbf81-acac-4f3a-91a1-5a26abc1721f/thumbnail/770x578/5d78c50199e6a9242367b37892be8057/postgresql-logo.png");
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
