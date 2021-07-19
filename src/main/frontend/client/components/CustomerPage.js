import React, {useEffect, useState} from "react";
import CourseCard from "./CourseCard/CourseCard";

const CustomerPage = (props) => {
  const [userCourse, setUserCourse] = useState([])

  const fetchCoursesOfUser = async () => {
    try {

      console.log(props.userWithId)
      const response = await fetch(`/api/v1/user-course/${props.userWithId}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }

      const body = await response.json()
      console.log(body)
      setUserCourse(body)
    } catch {
      console.log("There was a problem")
    }
  }

  useEffect(() => {
    fetchCoursesOfUser()
  }, [])

  const coursesPerUser = userCourse.map(course => {
    return (
        <CourseCard
          key={course.key}
          id={course.id}
          name={course.name}
          imgUrl={course.imageUrl}
          link={`/courses/${course.name}`}
        />
    )
  })

  let display = ""
  if (userCourse.length !== 0) {
    display = <div>
        <h2>Welcome! <strong>{localStorage.getItem("info")}</strong></h2>
    <h4>Here is your course that you are taking with AStudy</h4></div>
  } else {
    display = <div>
      <h2>Welcome! <strong>{localStorage.getItem("info")}</strong></h2>
      <h4>You have not sign up for any course. It is a good time to explore!</h4></div>
  }

  return (
      <>
      <section className="course section container" id="course">
      <div className="middle">
        {display}
        <div className="course__container grid">{coursesPerUser}</div>
      </div>
      </section>
      </>
  )
}

export default CustomerPage;