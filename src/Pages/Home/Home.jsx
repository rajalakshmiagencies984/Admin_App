import React from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Categories from '../../Components/Categories/Categories'
const Home = () => {
    
  return (
    <div className='home-container'>
        <Navbar />
        <div className="main my-3">
            <Categories />
        </div>
    </div>
  )
}

export default Home