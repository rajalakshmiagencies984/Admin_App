import React,{useState} from 'react'
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import FormHeader from '../../Components/FormHeader/FormHeader';
import './Login.scss';

const Login = () => {
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const inputs= [
    {
      type:"text",
      id:"username",
      label:"Username",
      setData:(name)=>{
        setName(name)
      },
      value:name
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
            <Button value="Login" />

             

            </form>
          </div>
           
          </div>
        </div>
    </div>
  )
}

export default Login