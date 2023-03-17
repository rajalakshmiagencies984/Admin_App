import React from 'react'
import logo from '../../assets/logo'
import MaterialIcon from 'material-icons-react'
import './SideBar.scss'

const SideBar = () => {
  const links =[
    {
      icon:"home",
      title:"Home",
      link:"/home"
    },{
      
    }
  ]
  return (
    <div className="sidebar-container">
        <div className="logo-container ">
            <img src={logo} alt="logo-container" />
            <p>Rajalakshmi Agencies</p>
        </div>

        <div className="sidebar-links ">
            {links.map((l,i)=>(
              <div className='sidelink my-3' key={i}  >
                <MaterialIcon icon={l.icon} color={"#00cb75"} />
                <p>{l.title}</p>
              </div>
            ))}
        </div>
        
    </div>
  )
}

export default SideBar