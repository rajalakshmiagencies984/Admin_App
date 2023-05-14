import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './features/category/categorySlice'
import productSlice from './features/products/productSlice'
import loadingSlice from './features/loading/loadingSlice'
import orderSlice from './features/orders/orderSlice'
import userSlice from './features/users/userSlice'
import adminSlice from './features/admin/adminSlice'
export default configureStore({
  reducer: {
      category:categorySlice,
      product:productSlice,
      loading:loadingSlice,
      order:orderSlice,
      user:userSlice,
      admin:adminSlice
  },
})
