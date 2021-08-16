package com.sangandau.tutoring.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users_courses")
@Getter
@Setter
@NoArgsConstructor
public class User_Course {
  @Id
  @SequenceGenerator(name="compose_generator", sequenceName="users_courses_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="compose_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;


  @ManyToOne
  @JoinColumn(name = "course_id")
  private Course course;

}
