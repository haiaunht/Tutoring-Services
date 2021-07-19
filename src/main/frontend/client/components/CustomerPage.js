import React, {useState} from "react";

const CustomerPage = () => {
  const [userCourse, setUserCourse] = useState()



  return (
      <div className="middle">
        <h2>Welcome! <strong>{localStorage.getItem("info")}</strong></h2>
        <h4>Here is your account's summary</h4>
        {/*will list course here???*/}
      </div>
  )
}

export default CustomerPage;