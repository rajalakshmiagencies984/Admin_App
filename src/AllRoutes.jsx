import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import LandingPage from './Pages/LandingPage/LandingPage'
import Home from './Pages/Home/Home'
import AddProduct from './Pages/AddProduct/AddProduct'
import AddAdmin from './Pages/AddAdmin/AddAdmin'
import AddCategory from './Pages/AddCategory/AddCategory'
import Productpreview from './Pages/Product Preview/Product_preview'
import OverviewPage from './Pages/OverviewProduct/OverviewPage'
import SingleProduct from './Pages/SingleProduct/SingleProduct'
import Products from './Pages/Products/Products'
import EditCategory from './Pages/EditCategory/EditCategory'
import EditProduct from './Pages/EditProduct/EditProduct'
import Loading from './Pages/Loading/Loading'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/loading' element={<Loading/>} />
        <Route path='/product/add' element={<AddProduct />} />
        <Route path='/product/edit/:id' element={<EditProduct/>} />
        <Route path='/admin/add' element={<AddAdmin/>} />
        <Route path='/category/add' element={<AddCategory/>} />
        <Route path='/category/edit/:id' element={<EditCategory/>} />
        <Route path='/home/products' element={<Productpreview/>} />
        <Route path='/home/overview' element={<OverviewPage/>}/>
        <Route path='/products/:category' element={<Products/>} />
        <Route path='/products/:category/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default AllRoutes