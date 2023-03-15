import React from 'react'
import './Button.scss'

const Button = ({value,handleClick}) => {
  return (
    <div className="button-container mb-3">
                <button className="btn btn-md" onClick={handleClick} >{value}</button>
    </div>
  )
}

Button.defautProps={
    handleClick:()=>{}
}

export default Button