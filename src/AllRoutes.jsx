import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import LandingPage from './Pages/LandingPage/LandingPage'
import Home from './Pages/Home/Home'
import AddProduct from './Pages/AddProduct/AddProduct'
import AddAdmin from './Pages/AddAdmin/AddAdmin'
import AddCategory from './Pages/AddCategory/AddCategory'
import Productpreview from './Pages/Product Preview/Product_preview'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product/add' element={<AddProduct />} />
        <Route path='/admin/add' element={<AddAdmin/>} />
        <Route path='/category/add' element={<AddCategory/>} />
        <Route path='/product/add/preview' element={<Productpreview/>} />
    </Routes>
  )
}

export default AllRoutes