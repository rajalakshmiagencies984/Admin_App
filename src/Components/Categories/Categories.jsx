import React from 'react'
import img from './img.js'
import './Categories.scss'
import { useSelector } from 'react-redux'
const Categories = () => {
  const category = useSelector((state)=>(state.category))
  return (
    <div className='container category-container'>
        <h2 className='p-2 header-title my-3'>Categories</h2>
        <div className="row p-2">
            {category.map((c,i)=>(
              <div key={i} className='col-4 category-list' style={{background:c.background,color:c.color}}>
                <div>
                <img src={img} alt="catrgory-image" />
                </div>
                <div className='title my-3'>
                  {c.title}
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Categories


