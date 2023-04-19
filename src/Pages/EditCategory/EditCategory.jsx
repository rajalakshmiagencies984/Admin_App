import React,{useEffect, useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import SideBar from '../../Components/SideBar/SideBar'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import FormHeader from '../../Components/FormHeader/FormHeader'
import FileInput from '../../Components/FileInput/FileInput'
import Preview from '../../Components/Preview/Preview'
import { setLoading } from '../../reducers/features/loading/loadingSlice'
import './EditCategory.scss'
import { API_editCategory } from '../../api'
import { editCategory } from '../../reducers/features/category/categorySlice'



const EditCategory = () => {
    const {id}=useParams();
    const category = useSelector((state)=>(state.category))
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [background,setBackground]=useState("")
    const [color,setColor]=useState("")
    const [preview,setPreview]=useState(false)
    const [gst,setGst]=useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePreview = ()=>{
        setPreview(!preview)
    }
    const handleSubmit =async()=>{
        try {
            const {data} = await API_editCategory({id,gst,image,background,color});
            dispatch(editCategory(Object(data)))
            navigate('/home')
        } catch (error) {
            console.log(error)
            alert("Error");
        }
    }
    useEffect(()=>{
        dispatch(setLoading(true))
        const data = category.filter(c=> c._id===id);
        let values=data[0];
        setTitle(values.title)
        setGst(values.gst)
        setImage(values.image);
        setBackground(values.background)
        setColor(values.color)
        dispatch(setLoading(false))
    },[id])
    const inputs=[
       
        {
            type:"number",
            id:"gst-percent-category",
            label:"GST",
            setData:(val)=>{
                setGst(val)
            },
            value:gst
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
          <p className="text-center heading">Edit {title}</p>
          {preview ? 
          <>
            <Preview name={title} image={image} background={background} color={color}  /> 
            <div className='row'>
                    <div className="col-6">
                        <Button handleClick={handleSubmit} value={`Edit ${title}`} />
                    </div>
                    <div className="col-6">
                        <Button handleClick={handlePreview} value="Go Back" />
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

export default EditCategory