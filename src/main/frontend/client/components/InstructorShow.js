import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { getData } from "../utils/FetchData/HelperFunctions";

const InstructorShow = (props) => {
  const [instructor, setInstructor] = useState([]);
  const [instructorNotFound, setInstructorNotFound] = useState(null);

  const fetchInstructor = async () => {
    const instructorId = props.match.params.instructorId;
    const data = await getData(`/api/v1/instructors/${instructorId}`);
    setInstructor(data);
  };

  useEffect(() => {
    fetchInstructor();
  }, []);

  if (instructorNotFound) {
    return <Redirect to={"/404"} />;
  }

  return (
    <div className="courseDiv">
      <h1 className="middle">Instructor details:</h1>
      <h3>{instructor.fullName}</h3>
      <h3>DO WE WANT OUR PICTURE HERE!</h3>
      <h3>Details: TO BE DISCUSSED IF WE WANT BIO HERE!</h3>
    </div>
  );
};

export default InstructorShow;
