import React, { useState, useEffect } from "react";

import CourseCard from "./CourseCard/CourseCard";
import SkeletonCourseCard from "./LoadingSkeleton/SkeletonCourseCard";
import { getData } from "../utils/FetchData/HelperFunctions";
import Pagination from "./Pagination/Pagination";

const AllCoursesList = (props) => {
  const [allCourses, setAllCourses] = useState([]);
  const [totalCourses, setTotalCourses] = useState([]);
  const [coursesPerPage, setCoursesPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("selectedPage") || 1
  );
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchAllCourse = async (currentPage) => {
    currentPage -= 1;
    const data = await getData(
      `/api/v1/courses?page=${currentPage}&size=${coursesPerPage}`
    );

    setIsLoading(false);
    !data &&
      setError(
        "We're Sorry.\n We are unable to complete your request at this time.\n Please try again or come back later."
      );
    setAllCourses(data.content);
    setTotalPages(data.totalPages);
    setCurrentPage(data.number + 1);
    setTotalCourses(data.totalElements);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAllCourse(currentPage);
    localStorage.setItem("selectedPage", currentPage);
  }, [currentPage]);

  const coursesList = isLoading
    ? [...Array(8)].map((_, index) => <SkeletonCourseCard key={index} />)
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

  const pagination = isLoading ? (
    ""
  ) : error ? (
    ""
  ) : (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      changePage={setCurrentPage}
    />
  );

  const contentDisplayed = error ? (
    <span className="section-subtitle" style={{ whiteSpace: "pre" }}>
      {error}
    </span>
  ) : (
    <>
      <span className="section-subtitle">Courses</span>
      <h2 className="section-title">Find the right courses for you</h2>
      <div className="pagination" style={{ display: "flex" }}>
        {pagination}
      </div>
      <div className="course__container grid">{coursesList}</div>
      <div className="pagination" style={{ display: "flex" }}>
        {pagination}
      </div>
    </>
  );

  return (
    <>
      <section className="course section container" id="course">
        {contentDisplayed}
      </section>
    </>
  );
};

export default AllCoursesList;
