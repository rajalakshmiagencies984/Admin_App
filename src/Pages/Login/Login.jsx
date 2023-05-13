import React,{useState} from 'react'
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import FormHeader from '../../Components/FormHeader/FormHeader';
import './Login.scss';
import { API_adminLogin } from '../../api';
import { useDispatch } from 'react-redux';
import {setAdmin} from '../../reducers/features/admin/adminSlice'
import {setLoading} from '../../reducers/features/loading/loadingSlice'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const inputs= [
    {
      type:"text",
      id:"username",
      label:"Email",
      setData:(val)=>{
        setEmail(val)
      },
      value:email
    }
    ,
    {
      type:"password",
      id:"current-password",
      label:"Password",
      setData:(pass)=>{
        setPassword(pass)
      },
      value:password
    }
  ]

  const handleLogin = async()=>{
    dispatch(setLoading(true))
    try {
      const {data}=await API_adminLogin({email,password})
      await localStorage.setItem('AdminRA',JSON.stringify({...data}))
      console.log(data)
      const user = data.user
      dispatch(setAdmin({...user}))
      navigation('/home')
    } catch (error) {
      console.log(error)
    }
    dispatch(setLoading(false))
  }

  return (
    <div className='login-container'>
        <div className="box-outer">
          <div className="box shadow">
          <FormHeader />
          <div className="form-container my-3">
            <form >

            {
              inputs.map((i,idx)=>(
                <Input key={idx} {...i}  />
              ))
            }
            <Button handleClick={()=>handleLogin()} value="Login" />



            </form>
          </div>

          </div>
        </div>
    </div>
  )
}

export default Login
