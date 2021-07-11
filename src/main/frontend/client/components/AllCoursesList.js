import React, { useState, useEffect } from "react";

import CourseCard from "./CourseCard/CourseCard";
import SkeletonCourseCard from "./LoadingSkeleton/SkeletonCourseCard";
import Helper from "../utils/Helper";

const AllCoursesList = (props) => {
  const [allCourses, setAllCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllCourse = async () => {
    const data = await Helper.getData(`/api/v1/courses`);
    setAllCourses(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAllCourse();
  }, []);

  const coursesList = isLoading
    ? [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonCourseCard key={n} />)
    : allCourses.map((course) => {
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
        <span className="section-subtitle">Courses</span>
        <h2 className="section-title">Find the right courses for you</h2>
        <div className="course__container grid">{coursesList}</div>
      </section>
    </>
  );
};

export default AllCoursesList;
