import React, {useState, useEffect} from "react"
import CartItemCard from "./CourseCard/CartItemCard";
import {sumBy} from "lodash/math";

const Cart = (props) => {
  console.log("At cart")

  const [cartDetails, setCartDetails] = useState([])
  const [userWithId, setUserWithId] = useState(localStorage.getItem("userId"));
  const [total, setTotal] = useState(null)
  console.log(userWithId)

  const getCartItem = async () => {
    try {
      const response = await fetch(`/api/v1/cartItems/${userWithId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const fetchedData = await response.json()
      setCartDetails(fetchedData)
    } catch (err) {
      console.log(`Error fetching cart ${err.message}`)
    }
  }

  useEffect(() => {
    getCartItem()
  }, [])

  console.log(cartDetails)
  const cartDetailsList = cartDetails.map(item => {
    return (
        <CartItemCard
          key={item.id}
          id={item.id}
          user={item.user}
          course={item.course}
          quantity={item.quantity}
        />
    )
  })

  let sum = cartDetails.reduce(function (prev, current) {
    return prev + current.course.price
  }, 0)
  console.log(sum)

  return (
      <>
        <h1> --</h1>
        <h1> --</h1>
        <h1> --</h1>
        <h1> --</h1>

        <h1>Your cart:</h1>
        {cartDetailsList}
        <h2>Your total is: ${sum.toFixed(2)}</h2>
        <button>Check Out</button>

      </>
  )
}

export default Cart