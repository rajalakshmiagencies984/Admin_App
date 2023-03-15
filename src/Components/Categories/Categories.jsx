import React from 'react'
import img from './img.js'
import './Categories.scss'
 
const Categories = () => {
  const category = [
    {title:"Fungicide",color:"#00aa95"},
    {title:"Insecticide",color:"#00cb75"},
    {title:"Herbicides",color:"#a5e887"},
    {title:"Crop Enhancement",color:"#00aa95"},
    {title:"Fertilizers",color:"#00cb75"},
    {title:"Seeds",color:"#a5e887"}
  ]
  return (
    <div className='category-container row'>
       {category.map((c,i)=>(
        <div key={i} style={{background:c.color}} className="col-sm-12 col-md-6 col-lg-4 category-list shadow mx-4 my-3">
            <div className='image'>
                <img src={img} alt="" />
            </div>
            <div className='title mb-3'>   
                {c.title}
            </div>
        </div>
       ))}
    </div>
  )
}

export default Categories


// fungicide
// insecticide
// herbicides
// crop enhancement
// fertilizers
// seeds