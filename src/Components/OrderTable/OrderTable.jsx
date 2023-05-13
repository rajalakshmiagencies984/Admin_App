import React from 'react'
import Button from '../../Components/Button/Button'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import {setOrders} from '../../reducers/features/orders/orderSlice'
import { API_acceptOrder,API_rejectOrder,API_deliverOrder,API_getOrders } from '../../api'
import { useNavigate } from 'react-router-dom'
import { setLoading } from '../../reducers/features/loading/loadingSlice'
const OrderTable = ({orders,users,mode}) => {
    const navigation = useNavigate()
    const dispatch = useDispatch();


    const acceptOrder = async(id)=>{
      dispatch(setLoading(true))
      try {
        await API_acceptOrder({id})
        const {data} = await API_getOrders()
        dispatch(setOrders(data))
      } catch (error) {
        console.log(error)
      }
      dispatch(setLoading(false))
    }

    const rejectOrder = async(id)=>{
      dispatch(setLoading(true))
      try {
        await API_rejectOrder({id})
        const {data} = await API_getOrders()
        dispatch(setOrders(data))
      } catch (error) {
        console.log(error)
      }
      dispatch(setLoading(false))
    }
    const deliverOrder = async(id)=>{
      dispatch(setLoading(true))
      try {
        await API_deliverOrder({id})
        const {data} = await API_getOrders()
        dispatch(setOrders(data))
      } catch (error) {
        console.log(error)
      }
      dispatch(setLoading(false))
    }

  return (
    <div className="table-responsive">
    <table className="table table-hover">
    <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User Name</th>
          <th scope='col'>Email</th>
          <th scope="col">Phone number</th>
          <th scope="col">Total No Of products</th>
          <th scope="col">Status</th>
          <th scope='col'>Total Amount</th>
          <th scope='col'>Mode of Payment</th>
          <th scope='col'>Ordered On</th>
          {mode=="New" && <>
          <th scope='col'>Accept Order</th>
          <th scope='col'>Reject Order</th>
    </>}
        {
            mode=="Accepted" &&<>
                <th scope="col">Accepted On</th>
                <th scope="col">Set Delivered</th>
            </>
        }
        {
            mode=="Delivered" &&<>
                <th scope="col">Delivered On</th>
            </>
        }
          <th scope='col'>View Order</th>

        </tr>
      </thead>
      <tbody>
        {orders.map((o,idx)=>{
          const user = users.filter(u=> u._id==o.user)[0]

          return(
            <tr key={o._id}>
              <td>{idx}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{o.products.length}</td>
              <td>{o.status}</td>
              <td>{o.totalAmount}</td>
              <td>{o.modeOfPayment}</td>
              <td>{moment(o.orderedOn).fromNow()}</td>
              {mode=="New" &&<>
              <td><Button handleClick={()=>acceptOrder(o._id)} value="Accept"/></td>
              <td><Button  handleClick={()=>rejectOrder(o_id)} value="Reject"/></td>
              </>}
              {
                mode=="Accepted" &&<>
                    <td>{moment(o.acceptedOn).fromNow()}</td>
                    <td><Button  handleClick={()=>deliverOrder(o._id)} value="delivered"/></td>
                </>
              }
              {
                mode=="Delivered" && <>
                    <td>{moment(o.deliveredOn).fromNow()}</td>
                </>
              }
              <td><Button handleClick={()=>navigation(`/order/${o._id}`)} value="View"/></td>
            </tr>
          )
        })}
  </tbody>
    </table>
  </div>
  )
}

export default OrderTable
