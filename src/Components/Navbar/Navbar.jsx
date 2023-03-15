import React from 'react'
import MaterialIcon from 'material-icons-react';
import SideBarLinks from '../SideBarLinks/SideBarLinks';
import './Navbar.scss'

import logo from '../../assets/logo.png'
const Navbar = () => {
    
  return (
    <nav className='navbar'>
        <div className='brand-container'>
            <div className='logo-container'>
                <img src={logo} />
            </div>
            <div className='brand-name'>
                Rajalakshmi Agencies
            </div>
        </div>
        <div className="right-container">
        <button className="btn btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><MaterialIcon icon={"menu"} size={26} color='white'/></ button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Profile</h5>
                <button type="button " className="btn-close btn btn-md" data-bs-dismiss="offcanvas" aria-label="Close"><MaterialIcon icon={"close"} size={24} color='white'/></button>
            </div>
            <div className="offcanvas-body">
                <div className="profile">
                    <div className='logo-round shadow'>
                        K
                    </div>
                    <div className='user-name'>
                        Karthikeyan R
                    </div>
                </div>
                
                <div className="logout-btn my-3">
                    <button className='btn p-2'>Logout</button>
                </div>
                <div>
                    <SideBarLinks />
                </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar