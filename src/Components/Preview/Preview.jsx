import React from 'react'
import styles from './Preview.module.scss'
const Preview = ({name,image,color,background}) => {
  return (
    
    <div className={styles.categorylist} style={{background,color}} >
      <div>
        <img src={image} alt="" height={200} width={200} />
      </div>
      <div className={styles.title}>
          {name}
      </div>

    </div>
  )
}

export default Preview