import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import InstructorShow from "./InstructorShow";
import InstructorsList from "./InstructorsList";
import { getData } from "../utils/FetchData/HelperFunctions";
import Integer from "lodash/string";

const CourseShow = (props) => {
  const [courseDetail, setCourseDetail] = useState([]);
  const [courseNotFound, setCourseNotFound] = useState(null);
  const [showInstructor, setShowInstructor] = useState(false);
  const [userWithId, setUserWithId] = useState(localStorage.getItem("userId"));
  const [user, setUser] = useState([])
  const [successful, setSuccessful] = useState(false)
  let [currentCount, setCurrentCount] = useState(localStorage.getItem("cartCount"))
  console.log(currentCount)

  const getUser = async () => {
    const data = await getData(`/api/v1/users/${userWithId}`)
    setUser(data)
  }

  const getCourse = async () => {
    const courseName = props.match.params.courseName;
    const data = await getData(`/api/v1/courses/${courseName}`);
    setCourseDetail(data);
  };

  useEffect(() => {
    getCourse();
    getUser();
  }, []);

  if (courseNotFound) {
    return <Redirect to={"/404"} />;
  }

  const showCard = (event) => {
    event.preventDefault();
    setShowInstructor(!showInstructor);
  };

  const [item, setItem] = useState({
    user: "",
    course: "",
    quantity: 1
  })

  const addCourseToCart = async (item) => {
    try {
      const response = await fetch("/api/v1/cartItems/add", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "text/html"
        }),
        body: JSON.stringify(item)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        if (body) {
          console.log("Successful add item to cart")
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const addCourse = async () => {
    console.log(courseDetail.id)
    const userId = Integer.parseInt(userWithId)
    try {
      const response = await fetch(`/api/v1/cartItems/${userId}/addToCart/${courseDetail.id}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "text/html"
        }),
        body: JSON.stringify(item)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        if (body) {
          console.log("Successful add item to cart")
          const increaseCount = Integer.parseInt(currentCount)+1
          localStorage.setItem("cartCount", increaseCount)
        }
      }
      console.log(localStorage.getItem("cartCount"))
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const addToCart = (event) => {
    event.preventDefault()
    item.user = user
    item.course = courseDetail
    item.quantity = 1
    const itemObj = {...item, user: {id: Integer.parseInt(userWithId)}, course: {id:courseDetail.id}}
    addCourse()
    currentCount = Integer.parseInt(currentCount)+1
    localStorage.setItem("cartCount", currentCount)
    setSuccessful(true)
  }

  if (successful) {
    window.location.reload(true)
  }

  let display = showInstructor ? <InstructorsList /> : "";
  let notify = (successful) ? "Your course is added to cart!" : ""

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
        <form onSubmit={addToCart}>
          <button>Add To Cart</button>
        </form>
        {notify}
      </div>
      <div>{display}</div>
    </>
  );
};

export default CourseShow;
