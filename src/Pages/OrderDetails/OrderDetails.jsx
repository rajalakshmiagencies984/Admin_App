import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { useNavigate,useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './OrderDetails.scss'
import Button from '../../Components/Button/Button'
import moment from 'moment'

const OrderDetalis = () => {
    const {id}=useParams()
    const navigation  = useNavigate()

    const orders = useSelector((state)=>(state.order))

    const users = useSelector((state)=>(state.user))
    const products = useSelector((state)=>(state.product))
  return (
    <>
        <SideBar />
        <div className="order-details-container my-5">
            {orders.filter(o=> o._id===id).map(o=>{
              const user = users.filter(u=> u._id === o.user)[0]
              const address = user.address.filter(a=> a._id === o.address)[0]

              return (
                <div className='order-item' key={id}>
                  <div className="card shadow">
                    <div className="card-body p-3">
                        <h1>Products</h1>
                        <div>
                          {o.products.map((p,idx)=>{
                            const product = products.filter(p1=>p1._id === p.product_id)[0]
                            return(
                              <div  key={idx}>
                                <div>
                                  {product?.name} - {p.quantity}
                                </div>
                                <div>
                                  {p.quantityOfProducts} * {p.price} = {p.totalAmount}
                                </div>
                                <div>
                                  <Button handleClick={()=>navigation(`/products/${product.category}/${product._id}`)} value="View Product" />
                                </div>
                              </div>
                            )
                          })}
                          <div>Total Amount -{o.totalAmount} </div>
                        </div>

                        <h1>User Details</h1>
                        <div>
                         <strong>Name : </strong> {user.name}
                        </div>
                        <div>
                          <strong>Email : </strong>{user.email}
                        </div>
                        <div>
                         <strong>Phone No:</strong> {user.phone}
                        </div>
                        <div>
                          <strong>Deliver Address :</strong> {address.doorNo}, {address.street}, {address.city}-{address.pinCode}
                        </div>

                        <h1>Order Details</h1>
                        <div>
                          <strong>Ordered on :</strong> {moment(o.orderedOn).fromNow()}

                        </div>
                        <div>
                            <strong>Status:</strong> {o.status}
                        </div>
                        <div>
                            <strong>Mode of Payment :</strong> {o.modeOfPayment}
                        </div>
                        <div>
                           <strong>Paid :</strong> {o.paid ?"Yes":"No"}
                        </div>
                        <div>
                          <strong>Accepted On : {o.acceptedOn==null ?"-":moment(o.acceptedOn).fromNow()}</strong>
                        </div>
                        <div>
                        <strong>Delivered On : {o.deliveredOn==null ?"-":moment(o.deliveredOn).fromNow()}</strong>
                        </div>
                    </div>
                  </div>
                </div>
              )
            }
                )}
        </div>
    </>
  )
}

export default OrderDetalis
