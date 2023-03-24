import React from 'react'
import logo from '../../assets/logo'
import './Product_preview.scss'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../Components/SideBar/SideBar'

export default function Productpreview() {
    var title = "SEEDS"
    var description = "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone."
    var composition = "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone."
    const navigate = useNavigate()
    const link = '/home/overview'
    const handleNavigate = () => {
        navigate(`${link}`)
    }
    return (
        <>
        <SideBar/>
        <div className='product-preview-container'>
            <div className="card" onClick={() => handleNavigate(link)}>
                <div className="image">
                    <img className='card-img-top p-1' src={logo} alt="image" />
                </div>
                <h5 className="category">{title}</h5>
                <div className="composition">
                    <h5>Chemical Name</h5>
                    <h5>Price</h5>
                    <h6>MRP</h6>
                </div>
                <div className="stock container">
                    <div className="row">
                        <small className='col-8'>Stock:</small>
                        <small className='col'>GST:</small>
                    </div>
                </div>
                <div className='button-container preview mb-3  m-2 p-2'>
                    <button className="btn btn-sm shadow">Edit</button>
                </div>

            </div>
        </div>
        </>
    )
}
