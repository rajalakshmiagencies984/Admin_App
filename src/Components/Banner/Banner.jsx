import React from 'react'
import './Banner.scss'
const Banner = ({image,name,category}) => {
  return (
    <div className="banner-container">
        <div className="img-container">
            <img src={image} alt="" />
        </div>
        <div className='content-container'>
            <div>
                {name}
            </div>
            <div>
                {category}
            </div>
        </div>
    </div>
  )
}

export default Banner