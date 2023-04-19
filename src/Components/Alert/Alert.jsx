import React from 'react'
import './Alert.scss'
import { useSelector } from 'react-redux'


const Alert = () => {
  const alerts = useSelector((state=>(state.alert)))

  return (
    <div className="alert-wrapper">
            {alerts?.map((alert) => (
            <div key={alert._id} className={`text-light alert alert-${alert.type} bg-${alert.type} border border-${alert.type}`}>
                {alert.message}
            </div>
            ))}
        </div>
  )
}

export default Alert