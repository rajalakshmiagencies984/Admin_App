import React from 'react'
import SideBar from '../../../Components/SideBar/SideBar'
import './OrderDetails.scss'

const OrderDetalis = () => {
  return (
    <div>
        <SideBar />
        <h1>Order Details</h1>
        <div style={{marginLeft:100}} className="container-fluid">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <h2 className="h5 mb-0"><a href="#" className="text-muted"></a> Order #16123222</h2>
                </div>
                <div className="row">
                    <div className="col-lg-8">

                    <div className="card mb-4">
                        <div className="card-body">
                        <div className="mb-3 d-flex justify-content-between">
                            <div>
                            <span className="me-3">22-11-2021</span>
                            <span className="me-3">#16123222</span>
                            <span className="me-3">Visa -1234</span>
                            <span className="badge rounded-pill bg-info">SHIPPING</span>
                            </div>
                        </div>
                        <table className="table table-borderless">
                            <tbody>
                            <tr>
                                <td>
                                <div className="d-flex mb-2">
                                    <div className="flex-shrink-0">
                                    <img src="https://www.bootdey.com/image/280x280/87CEFA/000000" alt="" width="35" className="img-fluid"/>
                                    </div>
                                    <div className="flex-lg-grow-1 ms-3">
                                    <h6 className="small mb-0"><a href="#" className="text-reset">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</a></h6>
                                    <span className="small">Color: Black</span>
                                    </div>
                                </div>
                                </td>
                                <td>1</td>
                                <td className="text-end">$79.99</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="2">Subtotal</td>
                                <td className="text-end">$159,98</td>
                            </tr>
                            <tr>
                                <td colspan="2">Shipping</td>
                                <td className="text-end">$20.00</td>
                            </tr>
                            <tr>
                                <td colspan="2">Discount (Code: NEWYEAR)</td>
                                <td className="text-danger text-end">-$10.00</td>
                            </tr>
                            <tr className="fw-bold">
                                <td colspan="2">TOTAL</td>
                                <td className="text-end">$169,98</td>
                            </tr>
                            </tfoot>
                        </table>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                            <h3 className="h6">Payment Method</h3>
                            <p>Visa -1234 <br/>
                            Total: $169,98 <span className="badge bg-success rounded-pill">PAID</span></p>
                            </div>
                            <div className="col-lg-6">
                            <h3 className="h6">Billing address</h3>
                            <div>
                                <strong>John Doe</strong><br/>
                                1355 Market St, Suite 900<br/>
                                San Francisco, CA 94103<br/>
                                <abbr title="Phone">P:</abbr> (123) 456-7890
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    
                    <div className="card mb-4">
                        <div className="card-body">
                        <h3 className="h6">Customer Details</h3>
                        <p>Phone : 123456789</p>
                        <p>Email : abc@gmail.com</p>
                        <p>Aadhar : 1212 4554 7878 8989</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderDetalis
