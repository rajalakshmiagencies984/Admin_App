import React,{useState} from 'react'
import './AddProduct.scss'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import FormHeader from '../../Components/FormHeader/FormHeader'
const AddProduct = () => {
    const [name,setName]=useState("")
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
    
    ]
  return (
    <div className="add-product-container">
        <div className="row">
            <div className="col-6">
                <div className="card shadow">
                    <div className="card-body">
                        <FormHeader />
                            <p className="heading text-center">Add New Product</p>
                            <form>
                               {inputs.map((i,idx)=>(
                                    <Input key={idx} {...i} />
                               ))}
                               <Button value="Add Product" />
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct