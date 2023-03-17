import React from 'react'

const Select = ({dataList,setData,label}) => {
  return (
    <div className='my-3'>
        <select defaultValue={label} className="form-select form-select-md" aria-label="Default select example" onChange={(e)=>setData(e.target.value)} required>
        <option hidden >{label}</option>
        {dataList.map((d,i)=>(
            <option value={d} key={i}>{d}</option>
        ))}
        </select>
    </div>
  )
}

export default Select