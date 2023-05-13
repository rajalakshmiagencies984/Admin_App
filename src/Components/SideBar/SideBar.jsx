import React from 'react'
import logo from '../../assets/logo'
import MaterialIcon from 'material-icons-react'
import { useNavigate } from 'react-router-dom'
import './SideBar.scss'
import {removeAdmin} from '../../reducers/features/admin/adminSlice'
import { useDispatch } from 'react-redux'
const SideBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = ()=>{
     localStorage.removeItem("AdminRA")
      dispatch(removeAdmin())
      navigate('/')
  }
  const links =[
    {
      icon:"home",
      title:"Home",
      link:"/home"
    },{
      icon:"category",
      title:"Add category",
      link:"/category/add"
    },
    {
      icon:"admin_panel_settings",
      title:"Add Admin",
      link:"/admin/add"
    },
    {
      icon:"production_quantity_limits",
      title:"Add Product",
      link:"/product/add"
    },
    {
      icon:"production_quantity_limits",
      title:"Orders",
      link:"/orders"
    }

  ]

  const handleNavigate = (link)=>{
    navigate(`${link}`)
  }

  return (
    <div className="sidebar-container">
        <div className="logo-container ">
            <img src={logo} alt="logo-container" />
            <p>Rajalakshmi Agencies</p>
        </div>

        <div className="sidebar-links">
            {links.map((l,i)=>(
              <div className='sidelink mb-2 p-1' key={i}  role="button" onClick={()=>navigate(l.link)}  >
                    <MaterialIcon icon={l.icon}  size={24} color={"#FFF"} />
                    <p>{l.title}</p>
              </div>
            ))}
        </div>

        <div className='logout-container p-1' onClick={handleLogout}>
              <MaterialIcon icon={"logout"} size={24} color={"#FFF"}  />
              Logout

        </div>

    </div>
  )
}

export default SideBar
