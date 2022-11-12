import React from 'react'
import {TailSpin} from 'react-loader-spinner'

const Spinner = (message) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <TailSpin
        type = "Circles"
        color = "#000fff"
        height = {50}
        width = {200}
        className = "m-5"
        >
            <p className='text-lg text-center px-2'> </p>


        </TailSpin>
      
    </div>
  )
}

export default Spinner
