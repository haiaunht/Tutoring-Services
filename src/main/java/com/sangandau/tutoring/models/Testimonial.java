package com.sangandau.tutoring.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "testimonials")
@Getter
@Setter
@NoArgsConstructor
public class Testimonial {
  @Id
  @SequenceGenerator(name="testimonial_generator", sequenceName="testimonials_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="testimonial_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @NotBlank
  @Column(name="name")
  private String name;

  @NotBlank
  @Column(name = "image_url")
  private String imageUrl;

  @NotBlank
  @Column(name="description")
  private String description;

  @NotBlank
  @Column(name="job")
  private String job;
}
