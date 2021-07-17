import React, {useState, useEffect} from "react"
import SignUp from "./SignUp";

const LoggedOut = (props) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${username}/${password}`)

      if (response.ok) {
        props.setLoggedIn(true)
      } else {
        console.log("Invalid username / password")
      }

      const body = await response.json()
      console.log(body)
      props.setUsername(body.fullName)
    } catch (err) {
      console.log("There was a problem")
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchUser()
  }

  return (
      <>
      <form onSubmit={handleSubmit}  className="nav-link"
            activeClassName="active">
        <div className="row align-items-center">
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input onChange={e => setUsername(e.target.value)}
                   name="username"
                   className="form-control form-control-sm input-dark"
                   type="text"
                   placeholder="Username"
                   autoComplete="off"
            />
          </div>
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input onChange={e => setPassword(e.target.value)}
                   name="password"
                   className="form-control form-control-sm input-dark"
                   type="password"
                   placeholder="Password"
            />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success btn-sm">Sign In</button>
          </div>
        </div>
      </form>
      </>
  )
}

export default LoggedOut