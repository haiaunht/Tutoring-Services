import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CourseCard from "./CourseCard/CourseCard";
import SkeletonCourseCard from "./LoadingSkeleton/SkeletonCourseCard";
import { getData } from "../utils/FetchData/HelperFunctions";

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategories = async () => {
    const data = await getData(`/api/v1/categories`);
    setCategories(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getCategories();
  }, []);

  const listOfCategories = isLoading
    ? [...Array(4)].map((_, index) => <SkeletonCourseCard key={index} />)
    : categories.map((category) => {
        return (
          <CourseCard
            key={category.id}
            id={category.id}
            name={category.categoryName}
            description={category.description}
            imgUrl={category.image}
            link={`/${category.categoryName}/courses`}
          />
        );
      });

  return (
    <>
      <section className="course section container" id="course">
        <span className="section-subtitle">Courses</span>
        <h2 className="section-title">Find the right courses for you</h2>
        <div className="course__container grid">{listOfCategories}</div>
        <div style={{ textAlign: "center" }}>
          <Link
            to={"/courses"}
            className="button"
            style={{ color: "var(--white-color)" }}
          >
            View All Courses
          </Link>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
