import React from 'react'
import img from '../../assets/logo.png'
import './FormHeader.scss'
const FormHeader = () => {
  return (
   <div className="logo-container">
            <img src={img} alt="logo-form" />
            <p>Rajalakshmi Agencies</p>
    </div>
  )
}

export default FormHeader