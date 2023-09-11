import React from 'react'

export const Car = (props) => {
    console.log(props)
  return (
    <div>
    <p>My car brand is {props.brand} and color is {props.color}</p>
    </div>
  )
}
