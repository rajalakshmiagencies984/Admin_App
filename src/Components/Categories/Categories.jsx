import React from 'react'
import MatericalIcon from 'material-icons-react'
import './Categories.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Categories = () => {
  const category = useSelector((state)=>(state.category))
  const navigate=useNavigate();

  const handleNaviagte = (e,title)=>{
    e.preventDefault();
    navigate(`/products/${title}`)
  }

  return (
    <div className='container category-container'>
        <h2 className='p-2 header-title my-3'>Categories</h2>
        <div className="row p-2" >
            {category.map((c)=>(
              <div key={c._id}  className='col-4 shadow category-list' style={{background:c.background,color:c.color}}>
                
                <div className="icon-top">
                    <div style={{background:c.color,width:"fit-content",borderRadius:"50%",padding:"6px"}}>
                      <MatericalIcon icon="edit" size={24} color={c.background} />
                    </div>
                    <div style={{background:c.color,width:"fit-content",borderRadius:"50%",padding:"6px"}}>
                      <MatericalIcon icon="delete" size={24} color={c.background} />
                    </div>
                </div>

                <div>
                    <img src={c.image} alt="catrgory-image" />
                </div>


                <div className='title my-3'>
                  {c.title}
                </div>

                <div role="button"  onClick={(e)=>handleNaviagte(e,c.title)} style={{background:c.color,color:c.background}} className="category-card-bottom">
                   <div>
                        {c.products.length} Products
                    </div> 
                    <div>
                        <MatericalIcon icon={"chevron_right"} size={26} color={c.background}  />
                    </div>
                </div>

              </div>
            ))}
        </div>
    </div>
  )
}

<div>
  
</div>
export default Categories


