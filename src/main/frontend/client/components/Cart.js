import React, {useState, useEffect} from "react"
import CartItemCard from "./CourseCard/CartItemCard";

const Cart = (props) => {
  console.log("At cart")

  const [cartDetails, setCartDetails] = useState([])
  const [userWithId, setUserWithId] = useState(localStorage.getItem("userId"));
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

  return (
      <>
        <h1> --</h1>
        <h1> --</h1>
        <h1> --</h1>
        <h1> --</h1>

        <h1>Your cart:</h1>
        {cartDetailsList}

      </>
  )
}

export default Cart