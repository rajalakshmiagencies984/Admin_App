import React,{useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import AllRoutes from './AllRoutes'
import { API_getCategories,API_getProducts } from './api'
import {getCategories} from './reducers/features/category/categorySlice'
import { getProducts } from './reducers/features/products/productSlice'
const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
      const getCategoryData = async()=>{
          try {
            const {data}=await API_getCategories();
            dispatch(getCategories(Object(data)))
          } catch (error) {
            console.log("error",error)
          }
      }
      getCategoryData();

      const getProductData =async()=>{
          try {
            const {data} = await API_getProducts();
            dispatch(getProducts(Object(data)))
          } catch (error) {
            console.log("error",error)
          }
      }
      getProductData()
  },[])
  return (
   
      <Router>
        <AllRoutes />
      </Router>
   
  )
}

export default App