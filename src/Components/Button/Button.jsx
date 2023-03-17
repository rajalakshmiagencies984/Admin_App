import React from 'react'
import './Button.scss'

const Button = ({value,handleClick}) => {
  const handle =(e)=>{
    e.preventDefault();
    handleClick();
    }
  return (
    <div className="button-container mb-3 ">
            <button className="btn btn-md shadow" onClick={handle} >{value}</button>
    </div>
  )
}

Button.defautProps={
    handleClick:()=>{}
}

export default Button