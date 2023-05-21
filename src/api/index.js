import axios from "axios";
const API = axios.create({baseURL:'https://rs-server-18ld.onrender.com/api/'})


export const API_getCategories  = ()=> API.get('/category');

export const API_addNewCategory = (data)=> API.post('/category',data)

export const API_editCategory =(data)=>API.patch(`/category/${data.id}`,data);

export const API_deleteCategory = (data)=>API.delete('/category',data)

export const API_getUsers =()=>API.get('/user')

export const API_getProducts=()=> API.get('/product')

export const API_addProduct=(data)=>API.post('/product',data)

export const API_editProduct =(data)=>API.patch(`/product/${data.id}`,data)

export const API_deleteProduct =(data)=>API.delete('/product',data)

export const API_getOrders = ()=>API.get('/order')

export const API_acceptOrder = (data)=>API.post('/order/accept',data)

export const API_rejectOrder =(data)=>API.post('/order/reject',data)


export const API_deliverOrder =(data)=>API.post('/order/delivery',data)


export const API_newAdmin =(data)=>API.post('/admin/register',data)

export const API_adminLogin =(data)=>API.post('/admin/login',data)

//
