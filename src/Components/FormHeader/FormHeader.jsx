import React from 'react'
import logo from '../../assets/logo'
import './FormHeader.scss'
const FormHeader = () => {
  return (
   <div className="logo-container">
            <img src={logo} alt="logo-form" />
            <p>Rajalakshmi Agencies</p>
    </div>
  )
}

export default FormHeader