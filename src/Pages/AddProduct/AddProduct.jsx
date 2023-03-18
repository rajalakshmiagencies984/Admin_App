import React,{ useState} from 'react'
import FileInput from '../../Components/FileInput/FileInput'
import './AddProduct.scss'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import FormHeader from '../../Components/FormHeader/FormHeader'
import SelectTag from '../../Components/Select/Select'
import DynamicInput from '../../Components/DynamicInput/DynamicInput'
import { v4 as uuidv4 } from 'uuid';
import SideBar from '../../Components/SideBar/SideBar'
const AddProduct = () => {
    const [name,setName]=useState("")
    const [mrp,setMRP]=useState("")
    const [category,setCategory]=useState("")
    const [image,setImage]=useState("");
    const [gst,setGst]=useState("")
    const [stock,setStock]=useState("")
     const [chemicalName,setChemicalName]=useState("")
    const [percent,setPercent]=useState("")
    const [chemical,setChemical]=useState([])
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
            dataList:[
                'Fungicide', 
                'Insecticide',
                'Herbicide', 
                'Fertilizers', 
                'Seeds'
        ],
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
        },
          {
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
                    setChemical([...chemical,{name:chemicalName,percent:percent,id:uuidv4()}])
                    setChemicalName("")
                    setPercent("")
                },
                value:chemical,
                button:"Add Chemical Composition",
                delete:(e,id)=>{
                    e.preventDefault()
                    const data = chemical.filter(v => v.id!==id);
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
                    const data = products.filter(f=> f.id!=id);
                    setEffects([...data])
                }
            }

        ]

   
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
                            <form className='row'>
                               {inputs.map((i,idx)=>(
                                <div key={uuidv4()} className="col-6">
                                    {i.type=="select" ? <SelectTag key={idx} {...i} /> : i.type=="file" ?<FileInput key={idx} 
                                    {...i} /> : i.type=="dynamic" ? <DynamicInput key={idx} inputs={i} /> : <Input key={idx} {...i} /> }
                                </div>
                               ))}
                              
                               
                                
                               <Button value="Add Product" />
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