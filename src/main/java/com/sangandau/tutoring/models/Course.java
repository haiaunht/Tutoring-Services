package com.sangandau.tutoring.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "courses")
@Getter
@Setter
@NoArgsConstructor
public class Course {
  @Id
  @SequenceGenerator(name="course_generator", sequenceName="courses_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="course_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @NotBlank
  @Column(name = "name")
  private String name;

  @NotBlank
  @Column(name = "description")
  private String description;

  @NotBlank
  @Column(name = "image_url")
  private String imageUrl;

  @Column(name = "rating")
  private Double rating;

  @Column(name = "price")
  private Double price;

  @ManyToOne
  @JoinColumn(name = "category_id")
  @JsonBackReference
  private Category category;

  @ManyToMany(mappedBy="courses")
  @JsonBackReference
  @JsonIgnoreProperties("courses")
  private Set<User> users;

  @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
  @JsonBackReference
  @JsonIgnoreProperties("course")
  private List<CartItem> cartItems = new ArrayList<>();

  public Course(Integer id) {
    this.id = id;
  }
}
