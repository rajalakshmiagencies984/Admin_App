import React, {useState,useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import SideBar from '../../Components/SideBar/SideBar'

import './Products.scss'
const Products = () => {
  const {category}=useParams();
  const navigate = useNavigate();
  const products =  useSelector((state)=>(state.product))
  

  const handleNavigate= (e,id)=>{
      e.preventDefault();
      navigate(`/products/${category}/${id}`)
  }


  return (
    <>
      <SideBar />
      <div className='products-container p-2 my-5'>
          <h2>{category}</h2>
          <p className='total-product'>Total Products - {products.filter(p=> p.category==category).length}</p>
          
          <div className='product-list-container'>
            {products.filter(p=> p.category==category).map(p=>(
             
                <div className="product-list-item shadow card mb-3" key={p._id}>
                    <div className="img-container">
                      <img src={p.image} className='card-img-top' alt={p.name} />
                    </div>
                  <div className="card-body ">
                    <h3 className="card-title ">{p.name}</h3>
                    <button className='btn view-btn' onClick={(e)=>handleNavigate(e,p._id)}>View</button>
                  
                </div>
              </div>
            ))}
          </div>

      </div>
    </>
  )
}

export default Products