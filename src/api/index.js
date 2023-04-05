import axios from "axios";
const API = axios.create({baseURL:'http://localhost:5000/api/'})


export const API_getCategories  = ()=> API.get('/category');

export const API_addNewCategory = (data)=> API.post('/category',data)

export const API_getProducts=()=> API.get('/product')

export const API_addProduct=(data)=>API.post('/product',data)