import React,{ useState} from 'react'
import FileInput from '../../Components/FileInput/FileInput'
import './AddProduct.scss'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import FormHeader from '../../Components/FormHeader/FormHeader'
import SelectTag from '../../Components/Select/Select'
import DynamicInput from '../../Components/DynamicInput/DynamicInput'
import { v4 as uuidv4 } from 'uuid';
import { API_addProduct } from '../../api'
import { useSelector,useDispatch } from 'react-redux'
import SideBar from '../../Components/SideBar/SideBar'
import { addCategoryCount } from '../../reducers/features/category/categorySlice'
import { addProduct } from '../../reducers/features/products/productSlice'
import { useNavigate } from 'react-router-dom'


const AddProduct = () => {

    const categorys = useSelector((state)=>(state.category));
    const dispatch = useDispatch();
    const navigate=useNavigate();

    //state
    const [name,setName]=useState("")
    const [mrp,setMRP]=useState("")
    const [category,setCategory]=useState("")
    const [image,setImage]=useState("");
    const [gst,setGst]=useState("")
    const [stock,setStock]=useState("")
    const [chemicalName,setChemicalName]=useState("")
    const [percent,setPercent]=useState("")
    const [chemicals,setChemical]=useState([])
    const [crop,setCrop]=useState("")
    const [products,setProducts]=useState([])
    const [point,setPoint]=useState("")
    const [effects,setEffects]=useState([])
    

    const inputs =[
        {
            type:"text",
            id:"product-name",
            label:"Product Name",
            setData:(val)=>{
                setName(val)
            },
            value:name
        },
        {
            type:"number",
            id:"mrp-rate",
            label:"MRP RATE",
            setData:(val)=>{
                
                setMRP(val)
            },
            value:mrp
        },
        {
            type:"file",
            id:"image",
            label:"Image",
            setData:(val)=>{
                    setImage(val)
            },
            value:""
        },
        {
            type:"select",
            id:"category",
            label:"Category",
            setData:(val)=>{
                setCategory(val)
            },
            dataList:categorys.map(c=> c.title),

        value:category
        },
        {
            type:"number",
            id:"gst",
            label:"GST Percentage",
            setData:(val)=>{
                setGst(parseInt(val));
            },
            value:gst
        },{
            type:"number",
            id:"stock",
            label:"Stock",
            setData:(val)=>{
                setStock(val)
            },
            value:stock
        },{
                type:"dynamic",
                title:"Chemical Composition",
                inputs:[
                    {
                        type:"text",
                        id:"Chemical Name",
                        label:"Chemical Name",
                        setData:(val)=>{
                            setChemicalName(val)
                        },
                        value:chemicalName,
                    },
                    {
                        type:"number",
                        id:"Chemical Percentage",
                        label:"Chemical Percantage",
                        setData:(val)=>{
                            setPercent(val);
                        },
                        value:percent
                    }
                ],
                setData:()=>{
                    setChemical([...chemicals,{name:chemicalName,percentage:percent,id:uuidv4()}])
                    setChemicalName("")
                    setPercent("")
                },
                value:chemicals,
                button:"Add Chemical Composition",
                delete:(e,id)=>{
                    e.preventDefault()
                    const data = chemicals.filter(v => v.id!==id);
                    setChemical([...data])
                }
            },
         
            {
                type:"dynamic",
                title:"Crops can be use with this products",
                inputs:[
                    {
                        type:"text",
                        id:"product",
                        label:"Crops Name",
                        setData:(val)=>{
                            setCrop(val)
                        },
                        value:crop
                    }
                ],
                setData:()=>{
                    setProducts([...products,{name:crop,id:uuidv4()}])
                    setCrop("")
                },
                value:products,
                button:"Add Product",
                delete:(e,id)=>{
                    e.preventDefault();
                    const data=products.filter(f=>f.id!==id)
                    setProducts([...data])
                }

            },
            {
                type:"dynamic",
                title:"Effects of this product",
                inputs:[
                    {
                        type:"text",
                        id:"point",
                        label:"Effect",
                        setData:(val)=>{
                            setPoint(val)
                        },
                        value:point
                    }
                ],
                setData:()=>{
                    setEffects([...effects,{point:point,id:uuidv4()}])
                    setPoint("");
                },
                value:effects,
                button:"Add Point",
                delete:(e,id)=>{
                    e.preventDefault();
                    const data = products.filter(f=> f.id!==id);
                    setEffects([...data])
                }
            }
        ]

        const handleSubmit = async()=>{ 
            let obj={
                name,
                mrp,
                stock,
                image,
                category,
                gst,
                chemicals,
                products,
                effects
            }
            try {
                const {data}=await API_addProduct(obj);
                const {_id,category}=data
                dispatch(addProduct(Object(data)))
                const addCategoryCountObject = {_id,title:category}
                dispatch(addCategoryCount(Object(addCategoryCountObject)))
                navigate('/home');
            } catch (error) {
                console.log("error")
                console.log(error)
            }
        }
   
  return (
    <>
    <SideBar />
    <div className="add-product-container ">
        <div className="row m-3">
            <div className="col-12 ">
                <div className="card shadow mb-3">
                    <div className="card-body">
                        <FormHeader />
                            <p className="heading text-center">Add New Product</p>
                               
                                <form >
                                    {inputs.map((i,idx)=>(
                                        <div key={idx}>
                                            {i.type==="select" ? <SelectTag  {...i} /> : i.type==="file" ?<FileInput 
                                            {...i} /> : i.type==="dynamic" ? <DynamicInput inputs={i} /> : <Input  {...i} /> }
                                        </div>
                                    ))}
                                    <Button handleClick={handleSubmit} value="Create Product" />
                                </form>

                    </div>
                </div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default AddProduct