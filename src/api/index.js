import axios from "axios";
const API = axios.create({baseURL:'http://localhost:5000/api/'})


export const API_getCategories  = ()=> API.get('/category');

export const API_addNewCategory = (data)=> API.post('/category',data)

export const API_editCategory =(data)=>API.patch(`/category/${data.id}`,data);

export const API_deleteCategory = (data)=>API.delete('/category',data)


export const API_getProducts=()=> API.get('/product')

export const API_addProduct=(data)=>API.post('/product',data)

export const API_editProduct =(data)=>API.patch(`/product/${data.id}`,data)

export const API_deleteProduct =(data)=>API.delete('/product',data) 
