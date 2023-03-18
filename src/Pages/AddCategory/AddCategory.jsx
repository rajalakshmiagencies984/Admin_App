import React,{useState} from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import FormHeader from '../../Components/FormHeader/FormHeader'
import './AddCategory.scss'
const AddCategory = () => {
    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    const [background,setBackground]=useState("")
    const [color,setColor]=useState("")

    const inputs=[
        {
            type:"text",
            id:"category-name",
            label:"Category Name",
            setData:(val)=>{
                setName(val);
            },
            value:name
        },
        {
            type:"text",
            id:"image",
            label:"Image",
            setData:(val)=>{
                setImage(val)
            },
            value:image
        },{
            type:"text",
            id:"background-color",
            label:"Background Color",
            setData:(val)=>{
                setBackground(val)
            },
            value:background
        },{
            type:"text",
            id:"color",
            label:"Color",
            setData:(val)=>{
                setColor(val)
            },
            value:color
        }
    ]
  return (
    <>
    <SideBar />
    <div className='add-category-container'>
        <div className="box-outer">
          <div className="box shadow">
          <FormHeader />
          <p className="text-center heading">Create New Category</p>
          <div className="form-container my-3">
            <form >
             {inputs.map((i,idx)=>(
                <Input key={idx} {...i} />
             ))}
            <Button value="Create Category" />
            </form>
          </div>
           
          </div>
        </div>
    </div>
    </>
  )
}

export default AddCategory