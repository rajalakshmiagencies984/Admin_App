import React from 'react'
import './Order.scss'
import SideBar from '../../Components/SideBar/SideBar'
import OrderDetalis from './OrderDetails/OrderDetalis'

const orderDetails =(props) => {
    <OrderDetalis />
}

const Order = () => {
    
  return (
    <div>
    <SideBar />
        <h1>Orders</h1>
      <div className="container mt-5">
        <div className="d-flex justify-content-center row">
            <div className="col-md-10">
                    <div className="table-responsive table-borderless">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-center">
                                    </th>
                                    <th>Order #</th>
                                    <th>Customer name</th>
                                    <th>status</th>
                                    <th>Total</th>
                                    <th>Created</th> 
                                    <th>Details</th>                               </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr className="cell-1">
                                    <td className="text-center">
                                    </td>
                                    <td>#SO-13487</td>
                                    <td>Gasper Antunes</td>
                                    <td><span className="badge badge-success">Fullfilled</span></td>
                                    <td>2674.00</td>
                                    <td>Today</td>
                                    <td><input type="button" value="Click" style={{background:"green",borderRadius:10}} onClick={orderDetails()} /></td>
                                </tr>                               
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Order
