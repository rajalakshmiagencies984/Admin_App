import axios from "axios";
const API = axios.create({baseURL:'http://localhost:5000/'})


export const getAllCategories  = async()=>await API.get('/category');

export const addNewCategory = async(data)=>await API.post('/category',data)

