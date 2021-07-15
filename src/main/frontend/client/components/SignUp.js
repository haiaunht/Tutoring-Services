import React, {useState, useEffect} from "react";

const SignUp = props => {
  const [userRegister, setUserRegister] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: ""
  })

  const addNewRegistration = async () => {
    try {
      const response = await fetch("/api/v1/new-user", {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json"
          }),
          body: JSON.stringify(userRegister)
      })

      if (response.ok) {
        console.log("New user added successfully!")
      }

    } catch (err) {
      console.error("Error in post new user!")
    }
  }

  const handleChange = event => {
    setUserRegister({
      ...userRegister,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log("here")
  }

  return (
      <div className="container py-md-5">
        <div className="row align-items-center">
          <div className="col-lg-7 py-3 py-md-5">
            <h1 className="display-3">Want to become a great software developer?</h1>
          </div>
          <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstname" className="text-muted mb-1">
                  <small>First name</small>
                </label>
                <input onChange={handleChange}
                    id="firstname"
                    name="firstname"
                    className="form-control"
                    type="text"
                    placeholder="Your first name"
                    autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastname" className="text-muted mb-1">
                  <small>Last name</small>
                </label>
                <input onChange={handleChange}
                    id="lastname"
                    name="lastname"
                    className="form-control"
                    type="text"
                    placeholder="Your last name"
                    autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="username" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <input onChange={handleChange}
                    id="username"
                    name="username"
                    className="form-control"
                    type="text"
                    placeholder="Pick a username"
                    autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <input onChange={handleChange}
                    id="email"
                    name="email"
                    className="form-control"
                    type="text"
                    placeholder="you@example.com"
                    autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input onChange={handleChange}
                    id="password"
                    name="password"
                    className="form-control"
                    type="password"
                    placeholder="Create a password"
                />
              </div>
              <input
                  type="submit"
                  className="py-3 mt-4 btn btn-lg btn-success btn-block"
                  value = "Sign Up"
              />
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignUp