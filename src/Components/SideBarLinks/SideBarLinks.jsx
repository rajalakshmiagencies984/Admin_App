import React from 'react'
import MaterialIcon from 'material-icons-react'
import './SideBarLinks.scss'
const SideBarLinks = () => {
    const links =[
        {title:"Create Admin",link:"/",logo:"admin_panel_settings"},
        {title:"Add Category",link:"/",logo:"category"},
        {title:"Add Product",link:"/",logo:"add_business"}
    ]
    const handleNavigate =(link)=>{

    }
  return (
    <div className='side-bar-container my-5'>
        {links.map((l,i)=>(
          <div role="button"  className='side-bar my-3' onClick={e=>handleNavigate(l.link)} key={i}>
            <div className="icon">
                <MaterialIcon icon={l.logo} size={24} color="black" />
            </div>
            <div className="title">
                {l.title}
            </div>
         </div>
        ))}
    </div>
  )
}

export default SideBarLinks