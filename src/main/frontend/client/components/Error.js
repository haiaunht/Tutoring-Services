import React from "react"
import _ from "lodash"

const Error = props => {
  const errors = Object.keys(props.errors)
  if (errors.length > 0) {
    let index = 0

    // const errorList = errors.map(error => {
    //   index++
    //   return (
    //     <li key={index}>
    //       {_.capitalize(error)}: {props.errors[error]}
    //     </li>
    //   )
    // })
    return (
      <div className="error alert">
        <ul className="error">{props.errors}</ul>
      </div>
    )
  } else {
    return ""
  }
}

export default Error
