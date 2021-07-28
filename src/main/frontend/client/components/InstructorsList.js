import React, { useState, useEffect } from "react";
import { getData } from "../utils/FetchData/HelperFunctions";
import InstructorCard from "./CourseCard/InstructorCard";

const InstructorsList = (props) => {
  const [instructorsList, setInstructorsList] = useState([]);

  const fetchAllInstructors = async () => {
    const data = await getData(`/api/v1/instructors`);
    setInstructorsList(data);
  };

  useEffect(() => {
    fetchAllInstructors();
  }, []);

  const listOfInstructors = instructorsList.map((each) => {
    return (
      <InstructorCard
        key={each.id}
        id={each.id}
        fullName={each.fullName}
        email={each.email}
        phone={each.phone}
        role={each.role.name}
        link={`/instructors/${each.id}`}
      />
    );
  });

  return (
    <section className="course section container" id="course">
      <span className="section-subtitle">Our Instructors</span>
      <h2 className="section-title">Find the right instructor for you</h2>
      <div className="course__container grid">{listOfInstructors}</div>
    </section>
  );
};

export default InstructorsList;
