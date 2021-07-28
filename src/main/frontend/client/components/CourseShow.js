import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import InstructorShow from "./InstructorShow";
import InstructorsList from "./InstructorsList";
import { getData } from "../utils/FetchData/HelperFunctions";

const CourseShow = (props) => {
  const [courseDetail, setCourseDetail] = useState([]);
  const [courseNotFound, setCourseNotFound] = useState(null);
  const [showInstructor, setShowInstructor] = useState(false);

  const getCourse = async () => {
    const courseName = props.match.params.courseName;
    const data = await getData(`/api/v1/courses/${courseName}`);
    setCourseDetail(data);
  };

  useEffect(() => {
    getCourse();
  }, []);

  if (courseNotFound) {
    return <Redirect to={"/404"} />;
  }

  const showCard = (event) => {
    event.preventDefault();
    setShowInstructor(!showInstructor);
  };

  let display = showInstructor ? <InstructorsList /> : "";

  return (
    <>
      <div>
        <div className="courseDiv">
          <h1 className="middle">{courseDetail.name}</h1>
          <h5>{courseDetail.description}</h5>
          <h1 className="middle">
            <img src={courseDetail.imageUrl} />
          </h1>
          <h3>Rating: {courseDetail.rating}</h3>
          <h3>Tutoring price per hour: {courseDetail.price}</h3>
        </div>
        <div onClick={showCard}>
          <button>Find Instructor for this course!</button>
        </div>
      </div>
      <div>{display}</div>
    </>
  );
};

export default CourseShow;
