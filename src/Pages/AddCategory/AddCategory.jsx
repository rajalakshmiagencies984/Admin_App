import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SideBar from '../../Components/SideBar/SideBar'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import FormHeader from '../../Components/FormHeader/FormHeader'
import FileInput from '../../Components/FileInput/FileInput'
import Preview from '../../Components/Preview/Preview'
import {v4 as uuidv4} from  'uuid'
import './AddCategory.scss'
import { addNewCategory } from '../../reducers/categorySlice'
const AddCategory = () => {
    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    const [background,setBackground]=useState("#00aa95")
    const [color,setColor]=useState("#FFFFFF")
    const [preview,setPreview]=useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handlePreview = ()=>{
        setPreview(!preview)
    }

    const handleSubmit =async()=>{
        try {
            await dispatch(addNewCategory(Object({name,image,background,color})))
            navigate('/home')
        } catch (error) {
            alert("Error");
        }
       
    }


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
            type:"file",
            id:"image",
            label:"Image",
            setData:(val)=>{
                setImage(val)
            },
            value:image
        },{
            type:"color",
            id:"background-color",
            label:"Background Color",
            setData:(val)=>{
                setBackground(val)
            },
            value:background
        },{
            type:"color",
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
          {preview ? 
          <>
            <Preview name={name} image={image} background={background} color={color}  /> 
            <div className='row'>
                    <div className="col-6">
                        <Button handleClick={handleSubmit} value="Create Category" />
                    </div>
                    <div className="col-6">
                        <Button handleClick={handlePreview} value="Edit" />
                    </div>
                </div>
            </>
            :
          <div className="form-container my-3">
            <form >
             {inputs.map((i,idx)=>(
                <div key={idx}>
                   {i.type==="file" ?<FileInput  {...i} />  : <Input {...i} /> }
                </div>
             ))}
             
            <Button handleClick={handlePreview} value="Preview" /> 
           
           
            </form>
          </div>
}
          </div>
        </div>
    </div>
    </>
  )
}

export default AddCategory