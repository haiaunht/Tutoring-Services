import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";

const InstructorShow = props => {
  const [instructor, setInstructor] = useState([])
  const [instructorNotFound, setInstructorNotFound] = useState(null)

  const fetchInstructor = async () => {
    try {
      const instructorId = props.match.params.instructorId
      console.log(instructorId)
      const response = await fetch(`/api/v1/instructors/${instructorId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        setInstructorNotFound(`Cannot find this instructor`)
        throw error;
      }

      const responseBody = await response.json()
      setInstructor(responseBody)

    } catch (error) {
      console.log(`Error in fetch: ${error.message}`);
    }
  }

  useEffect(()=>{
    fetchInstructor()
  }, [])

  if (instructorNotFound) {
    return <Redirect to={"/404"} />
  }

  return (
      <div className="courseDiv">
        <h1  className="middle">Instructor details:</h1>
        <h3>{instructor.firstName} {instructor.lastName}</h3>
        <h3>DO WE WANT OUR PICTURE HERE!</h3>
        <h3>Details: TO BE DISCUSSED IF WE WANT BIO HERE!</h3>
      </div>
  )
}

export default InstructorShow