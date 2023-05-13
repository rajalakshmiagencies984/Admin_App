import React from 'react'
import './Button.scss'

const Button = ({value,handleClick,disabled}) => {
  const handle =(e)=>{
    e.preventDefault();
    handleClick();
    }
  return (
    <div className="button-container mb-3 ">
            <button  disabled={disabled} className="btn btn-md shadow" onClick={handle} >{value}</button>
    </div>
  )
}

Button.defautProps={
    handleClick:()=>{},
    disabled:false

}

export default Button
