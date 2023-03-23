import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import './OverviewPage.scss'

export default function OverviewPage() {
    return (
        <>
            <SideBar />
            <div className='overview-container'>
                <p className='header'>Overview</p>
            </div>
        </>

    )
}
