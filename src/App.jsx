import React,{useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import AllRoutes from './AllRoutes'
import { API_getCategories,API_getProducts } from './api'
import {getCategories} from './reducers/features/category/categorySlice'
import { getProducts } from './reducers/features/products/productSlice'
import Loading from './Pages/Loading/Loading'
import { setLoading } from './reducers/features/loading/loadingSlice'
import Alert  from './Components/Alert/Alert'
import { addAlert,deleteAlert } from './reducers/features/alert/alertSlice'
import {v4 as uuidv4} from 'uuid'
const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
      const getCategoryData = async()=>{
          dispatch(setLoading(Boolean(true)))
          try {
            
            const {data}=await API_getCategories();
            dispatch(getCategories(Object(data)))
          } catch (error) {
            console.log("error",error)
          }
          dispatch(setLoading(Boolean(false)))
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
      const _id = uuidv4()
      dispatch(addAlert(Object({type:"info",message:"Hello",_id})));
      setTimeout(()=>{
          dispatch(deleteAlert(_id))
      },3000)
    
  },[])
  return (
      <>
      <Loading />
      <Alert/>
      <Router>
        <AllRoutes />
      </Router>
    </>
   
  )
}

export default App