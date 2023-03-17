import React,{useState,createContext, useContext} from 'react'
import ReactImageFileToBase64 from "react-file-image-to-base64";
import styles from './FileInput.module.scss'
import MaterialIcon from 'material-icons-react';
import './FileInput.css'
import { upload } from '@testing-library/user-event/dist/upload';

const Uploaded = createContext();
const FileInput = ({setData}) => {
    
const [upload,setUpload]=useState(true)
  const handleOnCompleted = files => {
       
        setData(files[0].base64_file)
        setUpload(false)
    
  };
  return (
    
    <div>
       
        <Uploaded.Provider value={{upload:upload}} >
      <ReactImageFileToBase64   onCompleted={handleOnCompleted}  CustomisedButton={CustomisedButton} />
     </Uploaded.Provider>
     
    </div>
  )
}

export default FileInput


export const CustomisedButton =({triggerInput})=>{
    
    const value = React.useContext(Uploaded);  
  
    
    return(
         <div className="form-floating mb-3">
            
            
            
             {value.upload===true? 
            <button type="button" className="btn btn-outline-secondary upload-btn py-3 w-100 d-flex justify-content-start align-items-center gap-3"  onClick={triggerInput} ><MaterialIcon icon={"image"} size={24}/>Upload Product image</button>
           :
             <button type="button" className="btn btn-outline-secondary py-3 w-100 d-flex justify-content-start align-items-center gap-3" ><MaterialIcon icon={"done"} size={24} color="green" /> <span className='fw-bold text-success'> Uploaded</span>
            </button> }
    
    </div>
    )
}