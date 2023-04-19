import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './features/category/categorySlice'
import productSlice from './features/products/productSlice'
import loadingSlice from './features/loading/loadingSlice'
import alertSlice from './features/alert/alertSlice'

export default configureStore({
  reducer: {
      category:categorySlice,
      product:productSlice,
      loading:loadingSlice,
      alert:alertSlice
  },
})