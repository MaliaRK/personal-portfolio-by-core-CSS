'use client'
import React from 'react'

interface Iprops {
    text: string;
    className?: string | number
}
const Button = (props: Iprops) => {
  return (
    <div>
        <button className='bg-gradient-to-r from-blue-600 to-blue-400 text-white
         rounded py-1 px-4 font-semibold hover:scale-105 duration-150'>
        {props.text}
        </button>
    </div>
  )
}

export default Button



export const TagBtn = (props: Iprops) => {
  return (
    <div>
      <button className='border border-white rounded-full py-1 px-2 font-thin text-sm m-2'>
      {props.text}
      </button>
    </div>
  )
} 