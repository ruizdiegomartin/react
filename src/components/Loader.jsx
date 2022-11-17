import React from 'react'

export default function Loader({status}) {

  return (
    <>
      { (status) && 
      <div className='loading-wrapper'> 
        <div className='loading-circle'></div>
      </div>}
    </>
  )
}

