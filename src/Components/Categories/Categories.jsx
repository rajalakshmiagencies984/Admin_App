import React from 'react'
import img from './img.js'
import './Categories.scss'
 
const Categories = () => {
  const category = [
    {title:"Fungicide",background:"#00aa95",color:"#FFFFFF"},
    {title:"Insecticide",background:"#00cb75",color:"#FFFFFF"},
    {title:"Herbicides",background:"#a5e887",color:"#FFFFFF"},
    {title:"Crop Enhancement",background:"#00aa95",color:"#FFFFFF"},
    {title:"Fertilizers",background:"#00cb75",color:"#FFFFFF"},
    {title:"Seeds",background:"#a5e887",color:"#FFFFFF"}
  ]
  return (
    <div className='container category-container'>
        <h2 className='p-2 header-title my-3'>Categories</h2>
        <div className="row p-2">
            {category.map((c,i)=>(
              <div key={i} className='col-4 category-list' style={{background:c.background,color:c.color}}>
                <div>
                <img src={img} alt="image" />
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


