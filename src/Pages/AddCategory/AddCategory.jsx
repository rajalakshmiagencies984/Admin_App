import React,{useState} from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import FormHeader from '../../Components/FormHeader/FormHeader'
import FileInput from '../../Components/FileInput/FileInput'
import Preview from '../../Components/Preview/Preview'
import './AddCategory.scss'

const AddCategory = () => {
    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    const [background,setBackground]=useState("#00aa95")
    const [color,setColor]=useState("#FFFFFF")
    const [preview,setPreview]=useState(false)

    const handlePreview = ()=>{
        setPreview(!preview)
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
                        <Button value="Create Category" />
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
                <>
                   {i.type==="file" ?<FileInput key={idx} {...i} />  : <Input key={idx} {...i} /> }
                </>
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