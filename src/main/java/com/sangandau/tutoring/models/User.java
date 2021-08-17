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
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {
  @Id
  @SequenceGenerator(name="user_generator", sequenceName="users_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="user_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @NotBlank
  @Column(name="full_name")
  private String fullName;

  @NotBlank
  @Column(name="email")
  private String email;

  @Column(name="phone")
  private String phone;

  @NotBlank
  @Column(name = "username")
  private String username;

  @NotBlank
  @Column(name = "password")
  private String password;

  @ManyToOne
  @JoinColumn(name = "role_id")
  private Role role;


  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(
      name="users_courses",
//      name="cart_items",
      joinColumns = {
          @JoinColumn(name="user_id", nullable=false)
      },
      inverseJoinColumns = {
          @JoinColumn(name="course_id", nullable=false)
      }
  )
  @JsonIgnoreProperties("users")
  @JsonBackReference
  private Set<Course> courses;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  @JsonBackReference
  @JsonIgnoreProperties("user")
  private List<CartItem> cartItems = new ArrayList<>();

  public User(Integer id) {
    this.id = id;
  }
}
