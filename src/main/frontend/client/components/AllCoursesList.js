import React, {useState, useEffect} from "react";
import CourseTile from "./CourseTile";

const AllCoursesList = props => {
  const [allCourses, setAllCourses] = useState([])

  const fetchAllCourse = async () => {
    try {
      const type = props.match.params.categoryName
      console.log(type)
      const response = await fetch(`/api/v1/courses`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setAllCourses(responseBody)
      console.log(responseBody)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchAllCourse()
  }, [])

  const courseList = allCourses.map( course => {
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
        {courseList}
      </>
  )
}

export default AllCoursesList