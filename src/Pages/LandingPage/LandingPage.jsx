import React from 'react'
import './LandingPage.scss'
import img  from '../../assets/logo.png'
const LandingPage = () => {
  return (
    <div className='landing-container'>
        <img src={img} alt="image" height={48} width={48} />
        <p className='m-3'>Rajalakshmi Agencies</p>
    </div>
  )
}

export default LandingPage