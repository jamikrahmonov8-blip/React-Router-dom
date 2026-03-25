import React from 'react'
import err from "./assets/error.svg"
function Error() {
  return (
    <div className='flex justify-center items-center w-[100%] h-[100vh]'><img src={err} alt="" height={200}/></div>
  )
}

export default Error