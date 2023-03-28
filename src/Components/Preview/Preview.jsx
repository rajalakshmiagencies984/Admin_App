import React from 'react'

import styles from './Preview.module.scss'
const Preview = ({name,image,color,background}) => {
  return (
    
    <div className={styles.categorylist} style={{background}} >
      <div>
        <img src={image} alt="" />
      </div>
      <div className={styles.title} style={{color:color}}>
          {name}
      </div>

    </div>
  )
}

export default Preview