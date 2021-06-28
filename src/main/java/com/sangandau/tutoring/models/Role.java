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
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Getter
@Setter
@NoArgsConstructor
public class Role {
  @Id
  @SequenceGenerator(name="role_generator", sequenceName="roles_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="role_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @NotBlank
  @Column(name = "name")
  private String name;

  @NotBlank
  @Column(name = "description")
  private String description;

  @OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
  @JsonIgnoreProperties("role")
  private List<User> users = new ArrayList<>();

}
