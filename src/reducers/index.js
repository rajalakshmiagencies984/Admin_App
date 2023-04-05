import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './features/category/categorySlice'
import productSlice from './features/products/productSlice'

export default configureStore({
  reducer: {
      category:categorySlice,
      product:productSlice
  },
  
})