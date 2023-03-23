import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import './OverviewPage.scss'
import img from '../../assets/logo'

export default function OverviewPage() {
    return (
        <>
            <SideBar />
            <div className='overview-container'>
                <p className='page-title'>Overview</p>
                <div className="wave">
                    <div className="col-md-6">
                    <h2 className='chem-name'>Seeds <br /> Swiss Chard</h2>
                    </div>
                    <div className="col-md-6">
                    <img src={img} alt="product image" className='chem-img' />
                    </div>
                </div>
                <div className="info container">
                    <h1>General Info</h1>
                    <h3>Crop Protection</h3>
                    <p>
                        Benmain belongs to benzimidazole group. <br />
                        Benmain is a systemic fungicide with protective and curative action. It is absorbed through the roots and green tissues, with translocation acropetally. <br />
                        Benmain is available in the pack sizes of 100g, 250g, 500g and 1kg.
                    </p>
                </div>
            </div>
        </>

    )
}
