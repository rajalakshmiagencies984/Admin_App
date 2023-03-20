import React from 'react'
import logo from '../../assets/logo'
import './Product_preview.css'

export default function Productpreview() {
    var title = "SEEDS"
    var description = "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone."
    var composition = "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone."
    return (
        <div>
            <div className="card view mt-5 p-2" >
                <div className="image mt-2">
                    <img className='card-img-top p-1' src={logo} alt="image" />
                </div>
                <h5 className="card-title mt-3">{title}</h5>
                <div className="composition p-2">
                    <h5>Chemical Composition:</h5>
                    <div className="text p-2">
                        {composition}
                    </div>
                </div>
                <div className="description p-2">
                    <h5>Description:</h5>
                    <div className="text p-2">
                        {description}
                    </div>
                </div>
                <div className='button-container preview mb-3  m-2 p-2'>
                    <button className="btn btn-md shadow">Add</button>
                    <button className="btn btn-md shadow">Edit</button>
                    <button className="btn btn-md shadow">Delete</button>
                </div>

            </div>
        </div>
    )
}
