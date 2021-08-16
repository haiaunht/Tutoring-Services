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
    let formPayload = item
    formPayload.courseId = courseDetail.id
    formPayload.userId = 3

    try {
      const response = await fetch("/api/v1/cartItems", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json; charset=UTF-8"
        }),
        body: JSON.stringify(formPayload)
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

  const addToCart = (event) => {
    event.preventDefault()
    //push to api @posting
    item.user = user
    item.course = courseDetail
    item.quantity = 1
    const itemObj = {...item, user: {id: Integer.parseInt(userWithId)}, course: {id:courseDetail.id}}
    console.log(item)
    addCourseToCart(itemObj)
  }

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
        <form onSubmit={addToCart}>
          <button>Add To Cart</button>
        </form>
      </div>
      <div>{display}</div>
    </>
  );
};

export default CourseShow;
