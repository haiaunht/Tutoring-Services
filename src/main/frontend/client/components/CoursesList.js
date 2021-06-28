import React, { useEffect, useState } from "react";

import CourseCard from "./CourseCard/CourseCard";
import SkeletonCourseCard from "./LoadingSkeleton/SkeletonCourseCard";

const CoursesList = (props) => {
  const [courseType, setCourseType] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllCourseType = async () => {
    try {
      const type = props.match.params.categoryName;
      const response = await fetch(`/api/v1/${type}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setCourseType(responseBody);
      setIsLoading(false);
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAllCourseType();
  }, []);

  const coursesList = isLoading
    ? [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonCourseCard key={n} />)
    : courseType.map((course) => {
        return (
          <CourseCard
            key={course.id}
            id={course.id}
            name={course.name}
            description={course.description}
            imgUrl={course.imageUrl}
            price={course.price}
            rating={course.rating}
            link={`/courses/${course.name}`}
          />
        );
      });

  return (
    <>
      <section className="course section container" id="course">
        <span className="section-subtitle">
          {props.match.params.categoryName}
        </span>
        <h2 className="section-title">Find the right courses for you</h2>
        <div className="course__container grid">{coursesList}</div>
      </section>
    </>
  );
};

export default CoursesList;
