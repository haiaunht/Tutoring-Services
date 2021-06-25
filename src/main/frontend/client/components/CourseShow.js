import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";

const CourseShow = props => {
  const [courseDetail, setCourseDetail] = useState([])
  const [courseNotFound, setCourseNotFound] = useState(null)

  const getCourse = async () => {
    try {
      const courseName = props.match.params.courseName
      const response = await fetch(`/api/v1/courses/${courseName}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        setCourseNotFound(`${courseName} not found!`)
        throw error
      }
      const responseBody = await response.json()
      setCourseDetail(responseBody)
      console.log(responseBody)
    }
    catch (err) {
      console.log(`Error fetching course: ${courseName}`)
    }
  }

  useEffect(() => {
    getCourse()
  }, [])

  if (courseNotFound) {
    return <Redirect to={"/404"} />
  }

  return (
    <div >
      <div className="courseDiv">
        <h1 className="middle">{courseDetail.name}</h1>
        <h5>{courseDetail.description}</h5>
        <h1 className="middle"><img src={courseDetail.imageUrl} /></h1>
        <h3>Rating: {courseDetail.rating}</h3>
        <h3>Tutoring price per hour: {courseDetail.price}</h3>
      </div>
      <div>
        <button>Find Instructor for this course!</button>
      </div>
    </div>
  )
}

export default CourseShow

