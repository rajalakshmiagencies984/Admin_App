import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import './SingleProduct.scss'

const SingleProduct = () => {

  const navigate=useNavigate();
  const {id,category}=useParams();
  const products = useSelector((state)=>(state.product))

  const [product,setProduct]=useState(null)

  useEffect(()=>{
      const product = products.filter(p=> p._id===id)
      setProduct(...product)  
  },[category,id])


  
  return (
    <div className='single-product-container'>
        {product!==null && 
        <>
          <div className="banner">
              <div className="product-image">
                  <img src={product.image} alt="product" />
              </div>
              <div className="product-banner">
                <div className="product-name">
                  {product.name}
                </div>
                <div className='product-category'>
                  {category}
                </div>
              </div>
          </div>
          <div className="container">
          <div className="row my-3">
            <div className="col-6">
                <div className="card shadow">
                    <div className="card-body">

                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="card shadow">
                    <div className="card-body">

                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
        }
    </div>
  )
}

export default SingleProduct