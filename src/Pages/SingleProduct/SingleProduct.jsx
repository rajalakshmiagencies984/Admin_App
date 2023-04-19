import React,{useState,useEffect} from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import { setLoading } from '../../reducers/features/loading/loadingSlice'
import { API_deleteProduct } from '../../api'
import { deleteProduct } from '../../reducers/features/products/productSlice'
import { decreaseCategoryCount } from '../../reducers/features/category/categorySlice'
import { useDispatch } from 'react-redux'
import './SingleProduct.scss'
import MaterialIcon from 'material-icons-react'
import Banner from '../../Components/Banner/Banner'
import moment from 'moment/moment'


const SingleProduct = () => {

  const navigate=useNavigate();
  const {id,category}=useParams();  
  const products = useSelector((state)=>(state.product))
  const categories = useSelector((state)=>(state.category))
  const dispatch = useDispatch();
  const handleEdit = (e)=>{
    e.preventDefault();
    navigate(`/product/edit/${id}`)
  }

  const handleDelete =async(e)=>{
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data}=await API_deleteProduct({id});
      dispatch(deleteProduct(Boolean(id)))
      dispatch(decreaseCategoryCount(Object({category,id})))
    } catch (error) {
      
    }
    dispatch(setLoading(false))
  }

  return (
    <> 
    <SideBar />
    <div className='single-product-container'>
      {products.filter(p=> p._id==id).map(p=>(

        <div key={p._id} className='product-container card shadow my-3'>
          <Banner {...p} />

          <div className="icons-container">
              <div role="button" onClick={e=>handleEdit(e)} className='icon-item shadow'>
                <MaterialIcon icon="edit" size={24}  color="#a5e887" />
              </div>
              <div role="button" onClick={e=>handleDelete(e)} className='icon-item shadow'>
                <MaterialIcon icon="delete" size={24} color="#a5e887" />
              </div>
          </div>

       <div className="details-container my-3">

          <div className="card shadow p-2">
                <div className="card-body">
                    <h4>Quantities</h4>
                    <ul className="list-group">
                        {p.prices.map(price=>(
                          <li className='list-group-item' key={price._id}>{price.quantity} - &#8377; {price.price}</li>
                          ))}
                    </ul>
                </div>
          </div>

           <div className="card shadow p-2">
                <div className="card-body">
                    <h4>Chemicals Used</h4>
                    <ul className="list-group">
                        {p.chemicals.map(chemical=>(
                          <li className='list-group-item' key={chemical._id}>{chemical.name} -{chemical.percentage}% </li>
                          ))}
                    </ul>
                </div>
          </div>

          <div className="card shadow p-2">
                <div className="card-body">
                    <h4>Products</h4>
                    <ul className="list-group">
                        {p.products.map(product=>(
                          <li className='list-group-item' key={product._id}>{product.name} </li>
                          ))}
                    </ul>
                </div>
          </div>


          <div className="card shadow p-2">
                <div className="card-body">
                    <h4>Effects</h4>
                    <ul className="list-group">
                        {p.effects.map(effect=>(
                          <li className='list-group-item' key={effect._id}>{effect.point} </li>
                          ))}
                    </ul>
                </div>
          </div>

          <div className="card shadow p-2">
                <div className="card-body">
                    <h4>Stats</h4>
                    <ul className="list-group">
                          <li className="list-group-item">Sold - {p.sold} </li>
                          <li className="list-group-item">In Stock - {p.stock}</li>
                          <li className='list-group-item'>GST - {categories.filter(c=> c.title==category)[0]?.gst} % </li>
                          <li className='list-group-item'>Created On - {moment(p.createdOn).fromNow()}</li>
                    </ul>
                </div>
          </div>
    </div>

    
          
        </div>

      ))}
    </div>
      </>
  )
}

export default SingleProduct