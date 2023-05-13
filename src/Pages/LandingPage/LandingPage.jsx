import React,{useEffect} from 'react'
import './LandingPage.scss'
import logo from '../../assets/logo'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const getToken = async()=>{
      let token =await localStorage.getItem('AdminRA')
      if(!token){
          navigate('/login')
      }else{
        navigate('/home')
      }
    }
      setTimeout(()=>{
        getToken()
      },3000)
  },[navigate])
  return (
    <div className='landing-container'>
        <img src={logo} alt="logo-landing" height={48} width={48} />
        <p className='m-3'>Rajalakshmi Agencies</p>
    </div>
  )
}

export default LandingPage
