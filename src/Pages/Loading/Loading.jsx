import React from 'react'
import loading from '../../assets/loading.gif'
import './Loading.scss'
import { useSelector } from 'react-redux'
const Loading = () => {
  const loadingstate = useSelector((state)=>(state.loading))
  
  return (
    <>
    {loadingstate.loading==true &&
    <div className='loading-container'>
      <div className="loader shadow">
           <img src={loading} />
           <p className='loading'>Loading ...</p>
      </div>
    </div>
}
    </>
  )
}

export default Loading