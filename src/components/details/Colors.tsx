"use client"
import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface Props{
  color: string,
  setStateColor: (color:string)=>void,
  StateColor : string
}

const Colors = ({color, setStateColor, StateColor}:Props) => {
    const clr = color.toLowerCase()
  return (
   <div onClick={()=> setStateColor(color)} className={`text-blue-700 border border-black flex justify-center items-center w-[32px] h-[32px] rounded-full ${color !== `White` && color !== `Black` ? `bg-${clr}-400` : `bg-${clr}`}`}>
     {StateColor == color && <FaCheck />}
   </div>
  )
}

export default Colors