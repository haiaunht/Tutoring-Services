import React, { useState, useEffect } from "react";

import CourseCard from "./CourseCard/CourseCard.js";

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch(`/api/v1/categories`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }

      const responseBody = await response.json();
      setCategories(responseBody);
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const listOfCategories = categories.map((category) => {
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
      </section>
    </>
  );
};

export default CategoryList;
