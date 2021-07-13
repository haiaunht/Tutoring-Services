import React, { useEffect, useState } from "react";

import CourseCard from "./CourseCard/CourseCard";
import SkeletonCourseCard from "./LoadingSkeleton/SkeletonCourseCard";
import { getData } from "../utils/HelperFunctions";

const CoursesList = (props) => {
  const [courseType, setCourseType] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllCourseType = async () => {
    const type = props.match.params.categoryName;
    const data = await getData(`/api/v1/${type}`);
    setCourseType(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAllCourseType();
  }, []);

  const coursesList = isLoading
    ? [...Array(8)].map((_, index) => <SkeletonCourseCard key={index} />)
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
