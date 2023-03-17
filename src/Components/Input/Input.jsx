import React from 'react'
import styles from './Input.module.scss'

const Input = ({type,id,label,setData,value}) => {
  
  return (
    <div className="form-floating mb-3">
            <input type={type} className="form-control" value={value} id={id} placeholder={id}  onChange={(e)=>setData(e.target.value)} required/>
            <label  className={styles.label} htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input


