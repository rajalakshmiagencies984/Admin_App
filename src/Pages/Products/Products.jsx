import React, {useState,useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import SideBar from '../../Components/SideBar/SideBar'
import MatericalIcon from 'material-icons-react'
import './Products.scss'
const Products = () => {
  const {category}=useParams();
  const navigate = useNavigate();
  const products =  useSelector((state)=>(state.product))
  const [product,setProducts]=useState([]);
  useLayoutEffect(()=>{
    const data=products.filter(p=>p.category.toLowerCase()===category.toLocaleLowerCase());
    setProducts([...data])
  },[category])

  const handleNavigate= (e,id)=>{
      e.preventDefault();
      navigate(`/products/${category}/${id}`)
  }


  return (
    <>
      <SideBar />
      <div className='products-container p-2 my-5'>
          <h2>{category}</h2>
          <p className='total-product'>Total Products - {product.length}</p>
          
          <div className='row product-list-container'>
            {product.map(p=>(
              
              <div className='col-3 my-3' key={p._id}>
                  <div className="card shadow product-list-item" >
                          <div className="icon-top">  
                            <div>
                              <MatericalIcon icon={"edit"} size={16} color={"#00aa95"}/>
                            </div>
                            <div>
                              <MatericalIcon icon={"delete"} size={16} color={"#00aa95"}/>
                            </div>
                          </div>

                          <div className="card-img-container">
                            <img src={p.image} className='card-img-top' alt={p.name} />
                          </div>

                          <div className="brand-name p-2">
                            {p.name}
                          </div>

                          <div className="product-details ">
                              <div className="stock">
                                  Stock - {p.stock}
                              </div>
                            
                              <div className="sold">
                                  Sold  - {p.sold || 0}
                              </div>

                              <div className="price">
                                    Price - {Math.floor(p.mrp * (p.mrp + (p.gst/100)))}
                              </div>
                          </div>

                          <div className="product-view" role="button" onClick={(e)=>handleNavigate(e,p._id)}>
                            <div >
                              <MatericalIcon icon="chevron_right" size={24} color="#00aa95" />
                            </div>
                          </div>
                  </div>
                
              </div>
            

            ))}
          </div>

      </div>
    </>
  )
}

export default Products