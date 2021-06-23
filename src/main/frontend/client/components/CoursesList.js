import React, {useEffect, useState} from "react";
import CourseTile from "./CourseTile";

const CoursesList = props => {
  const [courseType, setCourseType] = useState([])

  const fetchAllCourseType = async () => {
    try {
      const type = props.match.params.categoryName
      console.log(type)
      const response = await fetch(`/api/v1/${type}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setCourseType(responseBody)
      console.log(responseBody)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchAllCourseType()
  }, [])

  const coursesList = courseType.map(course => {
    return (
        <CourseTile
          key={course.id}
          id={course.id}
          name={course.name}
          description={course.description}
          image={course.imageUrl}
        />
    )
  })

  return (
      <>
        <h1>The list for {props.match.params.categoryName}</h1>
        {coursesList}
      </>
  )
}

export default CoursesList