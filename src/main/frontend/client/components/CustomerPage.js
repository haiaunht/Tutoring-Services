import React from "react";

const CustomerPage = () => {
  return (
      <div >
        <h2>Welcome! <strong>{localStorage.getItem("info")}</strong></h2>
        <h4>Here is your account's summary</h4>
        {/*will list course here???*/}
      </div>
  )
}

export default CustomerPage;