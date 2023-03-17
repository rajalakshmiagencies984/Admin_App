import React from 'react'
import './LandingPage.scss'
import logo from '../../assets/logo'
const LandingPage = () => {
  return (
    <div className='landing-container'>
        <img src={logo} alt="image" height={48} width={48} />
        <p className='m-3'>Rajalakshmi Agencies</p>
    </div>
  )
}

export default LandingPage