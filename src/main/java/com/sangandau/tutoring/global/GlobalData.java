package com.sangandau.tutoring.global;


import com.sangandau.tutoring.models.Course;
import java.util.ArrayList;
import java.util.List;

public class GlobalData {
  public static List<Course> cart;
  static {
    cart = new ArrayList<Course>();
  }
}
