import React, {useState, useEffect} from "react"
import CartItemCard from "./CourseCard/CartItemCard";

const Cart = (props) => {
  const [cartDetails, setCartDetails] = useState([])
  const [userWithId, setUserWithId] = useState(localStorage.getItem("userId"));

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

  const [itemToRemove, setItemToRemove] = useState({
    user: "",
    course: "",
    quantity: 1
  })
  const [doneDelete, setDoneDelete] = useState(false)

  const removeCartItem = async (itemCartId) => {
    try {
      const response = await fetch(`/api/v1/cartItems/${userWithId}/removeFromCart/${itemCartId}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "text/html"
        }),
        body: JSON.stringify(itemToRemove)
      })
      setDoneDelete(true)

    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const remove = (cartItemId) => {
    console.log("remove this course: " + cartItemId)
    removeCartItem(cartItemId)
  }

  if (doneDelete) {
    window.location.reload(true);
  }

  console.log(cartDetails)
  const cartDetailsList = cartDetails.map(item => {
    return (
        <CartItemCard
          key={item.id}
          id={item.id}
          user={item.user}
          course={item.course}
          quantity={item.quantity}
          remove={remove}
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