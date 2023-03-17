import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import MatericalIcon from 'material-icons-react'
import Select from '../Select/Select';
import FileInput from '../FileInput/FileInput';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './DynamicInput.module.scss'
const DynamicInput = ({inputs}) => {
   
  
    

  return (
    <div className='card my-3'>
        <div className="card-body">
                <p>{inputs.title}</p>
                <div className={styles.dynamicListContainer}>
                  {inputs.value.map(v=>(
                    <div className={` m-3 ${styles.dynamicList}`}>
                        <div key={uuidv4()}> 
                        {Object.keys(v).map((key, keyIndex)=>(
                               <div key={keyIndex}>
                               {key!=="id" &&
                                 <div className="p-2">
                                   <span className={styles.key}> {key} </span>: {v[key]}
                                 </div>
                                }
                                </div> 
                        ))}
                        <button className={`btn mx-2 btn-sm ${styles.button}`} onClick={(e)=>inputs.delete(e,v.id)}><MatericalIcon icon={"close"} size={24}/> </button>
                    </div>
                    </div>
                  ))}
                </div>
                {inputs.inputs.map((i)=>(
                    <div key={uuidv4()}>
                        {i.type=="select" ? <Select key={i.id} {...i} /> : i.type==="file" ? <FileInput key={i.id} {...i} /> : <Input key={i.id} {...i} /> }
                    </div>
                ))}
                <Button value={inputs.button} handleClick={inputs.setData} />
        </div>
    </div>
  )
}

export default DynamicInput