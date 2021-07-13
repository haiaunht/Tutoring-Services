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
      for (int i = 0; i < 100; i++) {
      // ======  front-end and framework ========

        Course javascript = new Course();
        javascript.setName("JavaScript -" + i);
        javascript.setDescription("JavaScript (often shortened to JS) is a lightweight, "
            + "interpreted, object-oriented language with first-class functions, "
            + "and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.");
        javascript.setImageUrl(
            "https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg");
        javascript.setRating(4.7);
        javascript.setPrice(19.99);
        javascript.setCategory(categoryList.get(0));
        courseRepository.save(javascript);

        Course react = new Course();
        react.setName("React.js -"+ i);
        react.setDescription(
            "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library "
                + "for building user interfaces or UI components. "
                + "It is maintained by Facebook and a community of individual developers and companies. "
                + "React can be used as a base in the development of single-page or mobile applications.");
        react.setImageUrl(
            "https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png");
        react.setRating(5.0);
        react.setPrice(14.99);
        react.setCategory(categoryList.get(0));
        courseRepository.save(react);

        Course html = new Course();
        html.setName("HTML -"+ i);
        html.setDescription(
            "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. ... "
                + "HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. "
                + "HTML elements are the building blocks of HTML pages.");
        html.setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69me2nODDGqx754YnzMBECfFldsFrmgo4FH6eOHvEn7DIJgnA8QtoQi9zexnOCaWwULY&usqp=CAU");
        html.setRating(4.9);
        html.setPrice(9.99);
        html.setCategory(categoryList.get(0));
        courseRepository.save(html);

        Course css = new Course();
        css.setName("CSS  -"+ i);
        css.setDescription(
            "Stands for \"Cascading Style Sheet.\" Cascading style sheets are used to format the layout of Web pages. "
                + "They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.");
        css.setImageUrl(
            "https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg");
        css.setRating(4.9);
        css.setPrice(9.99);
        css.setCategory(categoryList.get(0));
        courseRepository.save(css);

      // =======  Back end and framework ========
      Course java = new Course();
      java.setName("Java  -"+ i);
      java.setDescription("Java is an object-oriented programming language that produces software for multiple platforms. "
          + "When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS), "
          + "including Windows, Linux and Mac OS.");

      java.setImageUrl("https://www.trycatchclasses.com/wp-content/uploads/2020/02/Java.jpg");
      java.setRating(5.0);
      java.setPrice(19.99);
      java.setCategory(categoryList.get(1));
      courseRepository.save(java);

      Course spring = new Course();
      spring.setName("Spring boot  -" + i);
      spring.setDescription("Spring Boot is a brand new framework from the team at Pivotal, designed to simplify the bootstrapping and development of a new Spring application. "
          + "The framework takes an opinionated approach to configuration, freeing developers from the need to define boilerplate configuration");
      spring.setImageUrl("https://meterpreter.org/wp-content/uploads/2017/10/Spring_framework-1.png");
      spring.setRating(4.6);
      spring.setPrice(24.99);
      spring.setCategory(categoryList.get(1));
      courseRepository.save(spring);

      Course node = new Course();
      node.setName("Node.js  -" + i);
      node.setDescription("Node. js (Node) is an open source development platform for executing JavaScript code server-side. "
          + "Node is useful for developing applications that require a persistent connection from the browser to the server and is "
          + "often used for real-time applications such as chat, news feeds and web push notifications.");
      node.setImageUrl("https://www.fastcomet.com/blog/wp-content/uploads/2021/03/10-nodejs-frameworks-in-2021.png");
      node.setRating(4.7);
      node.setPrice(12.99);
      node.setCategory(categoryList.get(1));
      courseRepository.save(node);

      // ======== Database ============
      Course postgre = new Course();
      postgre.setName("PostgreSQL  -"+ i);
      postgre.setDescription("PostgreSQL is a powerful, open source object-relational database system that uses and extends the "
          + "SQL language combined with many features that safely store and scale the most complicated data workloads.");
      postgre.setImageUrl("https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/gBt888ghf7zub4iHh2WGmgyM/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882");
      postgre.setRating(5.0);
      postgre.setPrice(15.99);
      postgre.setCategory(categoryList.get(2));
      courseRepository.save(postgre);

        Course mySQL = new Course();
        mySQL.setName("MySQL  -"+ i);
        mySQL.setDescription("MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter, and 'SQL', the abbreviation for Structured Query Language.");
        mySQL.setImageUrl("http://fullstacksdeveloper.com/images/mysql3.png");
        mySQL.setRating(3.0);
        mySQL.setPrice(15.99);
        mySQL.setCategory(categoryList.get(2));
        courseRepository.save(mySQL);

        Course mongoDB = new Course();
        mongoDB.setName("MongoDB  -"+ i);
        mongoDB.setDescription("MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.");
        mongoDB.setImageUrl("data:image/jpeg;base64,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");
        mongoDB.setRating(1.0);
        mongoDB.setPrice(15.99);
        mongoDB.setCategory(categoryList.get(2));
        courseRepository.save(mongoDB);

        //======= Algo and Data structure =======
        Course algo_java = new Course();
        algo_java.setName("Deep dive using Java  -"+ i);
        algo_java.setDescription(
            "Learn about Arrays, Linked Lists, Trees, Hashtables, Stacks, Queues, Heaps, Sort algorithms and Search algorithms");
        algo_java.setImageUrl(
            "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/8AGRyV4sRLmW4HoSN9W4");
        algo_java.setRating(5.0);
        algo_java.setPrice(19.99);
        algo_java.setCategory(categoryList.get(3));
        courseRepository.save(algo_java);

        Course java_js_master = new Course();
        java_js_master.setName("JavaScript Algorithms and Data Structures Masterclass  -"+ i);
        java_js_master.setDescription(
            "Learn JavaScript from scratch, build front-end & back-end applications with JavaScript, Vue, Node, Express & MySQL");
        java_js_master.setImageUrl(
            "https://static.skillshare.com/uploads/video/thumbnails/399e0307a2ac7ed614e32439584f7543/original");
        java_js_master.setRating(4.4);
        java_js_master.setPrice(12.99);
        java_js_master.setCategory(categoryList.get(3));
        courseRepository.save(java_js_master);
      }
    }
  }
}
