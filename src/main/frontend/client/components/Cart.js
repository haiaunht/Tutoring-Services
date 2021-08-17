import React, {useState, useEffect} from "react"
import CartItemCard from "./CourseCard/CartItemCard";

const Cart = (props) => {
  const [cartDetails, setCartDetails] = useState([])
  const [userWithId, setUserWithId] = useState(localStorage.getItem("userId"));
  const [paid, setPaid] = useState(false)

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

  const addToUserCourse = async (item) => {
    let userId = item.user.id
    let courseId = item.course.id
    try {
      const response = await fetch(`/api/v1/user-course/${userId}/paid/${courseId}`, {
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

  const checkout = () => {
    console.log(paid)
    cartDetails.map(item => addToUserCourse(item))
    cartDetails.map(item => remove(item.id))
    setPaid(true)
  }

  let display = (paid || cartDetails.length === 0) ?
      (<h2>Your cart is empty!</h2>) :
      (<div>
        <h1>Your cart:</h1>
        {cartDetailsList}
        <div id="total">
          <h2 >Your total is: ${sum.toFixed(2)}</h2>
          <button onClick={checkout}>Place Order</button>
        </div>

      </div>)

  return (
      <>
        <h1> --</h1>
        <h1> --</h1>
        <h1> --</h1>
        <h1> --</h1>
        {display}
      </>
  )
}

export default Cart