import React, { useEffect, useState } from 'react'
import './Orders.scss'
import SideBar from '../../Components/SideBar/SideBar'
import { useSelector,useDispatch } from 'react-redux'
import Button from '../../Components/Button/Button'
import OrderTable from '../../Components/OrderTable/OrderTable'
import { useNavigate } from 'react-router-dom'
const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const orders = useSelector((state)=>(state.order))
  const users = useSelector((state)=>(state.user))
  const [all,setAll]=useState(true)
  const [accept,setAccepted]=useState(false)
  const [delivered,setDelivered]=useState(false)
  useEffect(()=>{
    if(all==true){
      setAccepted(false)
      setDelivered(false)
    }
  },[all])
  useEffect(()=>{
    if(accept==true){
      setAll(false)
      setDelivered(false)
    }
  },[accept])
  useEffect(()=>{
    if(delivered==true){
      setAccepted(false)
      setAll(false)
    }
  },[delivered])
  return (
    <>
      <SideBar />
      <div className="orders-container">
          <h1 className='m-5'>Orders</h1>

          <div className="order-buttons">
            <div>
              <Button disabled={all} handleClick={()=>setAll(true)} value="New Orders"/>
            </div>
            <div>
              <Button disabled={accept} handleClick={()=>setAccepted(true)} value="Accepted Orders"/>
            </div>
            <div>
              <Button  disabled={delivered} handleClick={()=>setDelivered(true)} value="Delivered Orders"/>
            </div>
          </div>

          <div className="table-container">
            {all ? <OrderTable orders={orders.filter(o=>o.status=="ordered")} users={users}   mode="New" /> :
            accept ? <OrderTable orders={orders.filter(o=>o.status=="accepted")} users={users} mode="Accepted" /> : <OrderTable orders={orders.filter(o=>o.status=="delivered")} users={users} mode="Delivered"/>
            }
          </div>
      </div>
    </>
  )
}

export default Order
