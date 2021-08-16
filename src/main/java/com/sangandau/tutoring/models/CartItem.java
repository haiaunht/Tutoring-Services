package com.sangandau.tutoring.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cart_items")
@Getter
@Setter
@NoArgsConstructor
public class CartItem {
  @Id
  @SequenceGenerator(name="cart_generator", sequenceName="cart_items_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="cart_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @ManyToOne
  @JoinColumn(name = "user_id")
//  @JsonBackReference
  private User user;


  @ManyToOne
  @JoinColumn(name = "course_id")
//  @JsonBackReference
  private Course course;

  private Integer quantity;
}
