import React from 'react'
import './Home.scss'
import SideBar from '../../Components/SideBar/SideBar'
import Categories from '../../Components/Categories/Categories'
const Home = () => {
    
  return (
    <>
    <SideBar />
    <div className='home-container'>
           <Categories />
    </div>
    </>
  )
}

export default Home