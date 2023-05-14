import React,{ useEffect, useState} from 'react'
import FileInput from '../../Components/FileInput/FileInput'
import './EditProduct.scss'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import FormHeader from '../../Components/FormHeader/FormHeader'
import SelectTag from '../../Components/Select/Select'
import DynamicInput from '../../Components/DynamicInput/DynamicInput'
import { v4 as uuidv4 } from 'uuid';
import { API_editProduct } from '../../api'
import { useSelector,useDispatch } from 'react-redux'
import SideBar from '../../Components/SideBar/SideBar'
import { editProduct } from '../../reducers/features/products/productSlice'

import { useNavigate,useParams } from 'react-router-dom'
import { setLoading } from '../../reducers/features/loading/loadingSlice'


const EditProduct = () => {

    const categorys = useSelector((state)=>(state.category));
    const reduxProducts = useSelector((state)=>(state.product))
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const {id}=useParams();

    //state
    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [image,setImage]=useState("");
    const [stock,setStock]=useState("")
    const [chemicalName,setChemicalName]=useState("")
    const [percent,setPercent]=useState("")
    const [chemicals,setChemical]=useState([])
    const [crop,setCrop]=useState("")
    const [products,setProducts]=useState([])
    const [point,setPoint]=useState("")
    const [effects,setEffects]=useState([])
    const [quantity,setQuantity]=useState("");
    const [price,setPrice]=useState("");
    const [prices,setPrices]=useState([]);

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
                title:"Different Quantities",
                inputs:[
                    {
                        type:"text",
                        id:"qunatity",
                        label:"Quantity",
                        setData:(val)=>{
                            setQuantity(val)
                        },
                        value:quantity
                    },
                    {
                        type:"number",
                        id:"price",
                        label:"Price",
                        setData:(val)=>{
                            setPrice(val)
                        },
                        value:price
                    }
                ],
                setData:()=>{
                    setPrices([...prices,{quantity,price,id:uuidv4()}])
                    setQuantity("")
                    setPrice("")
                },
                value:prices,
                button:"Add Quantity",
                delete:(e,id)=>{
                    e.preventDefault();
                    const data = prices.filter(p=> p.id!==id)
                    setPrices([...data])
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
            dispatch(setLoading(true))
            let obj={
                name,
                stock,
                image,
                category,
                prices,
                chemicals,
                products,
                effects
            }
            try {
                const {data}=await API_editProduct(obj);
                dispatch(editProduct(Object(data)))
                navigate(`/product/${data.category}/${data._id}`);
            } catch (error) {
                console.log("error")
                console.log(error)
            }
            dispatch(setLoading(false))
        }

        useEffect(()=>{
            dispatch(setLoading(true))
            const filter_product = reduxProducts.filter(rp=> rp._id===id);
            let data=filter_product[0];
            setName(data.name);
            setStock(data.stock)
            setImage(data.image)
            setCategory(data.category)
            setPrices(data.prices)
            setChemical(data.chemicals)
            setProducts(data.products)
            setEffects(data.effects)
            dispatch(setLoading(false))
        },[id])

  return (
    <>
    <SideBar />
    <div className="add-product-container ">
        <div className="row m-3">
            <div className="col-12 ">
                <div className="card shadow mb-3">
                    <div className="card-body">
                        <FormHeader />
                            <p className="heading text-center">Edit {name}</p>

                                <form >
                                    {inputs.map((i,idx)=>(
                                        <div key={idx}>
                                            {i.type==="select" ? <SelectTag  {...i} /> : i.type==="file" ?<FileInput
                                            {...i} /> : i.type==="dynamic" ? <DynamicInput inputs={i} /> : <Input  {...i} /> }
                                        </div>
                                    ))}
                                    <Button handleClick={handleSubmit} value={`Edit ${name}`} />
                                </form>

                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default EditProduct
