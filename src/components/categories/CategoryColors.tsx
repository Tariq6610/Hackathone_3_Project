"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface Props{
  color: string,
  setStateColor: (color:string)=>void,
  StateColor : string
}

const CategoryColors = ({color, setStateColor, StateColor}:Props) => {
    const clr = color.toLowerCase()
    function handleClick(){
      if(StateColor !== color){
        setStateColor(color)
      }else if(StateColor == color){
        setStateColor("")
      }
    }
  return (
    <div
      onClick={handleClick}
      className={cn(
        "text-blue-700 border border-black flex justify-center items-center w-[32px] h-[32px] rounded-full",
        clr !== "white" && clr !== "black" ? `bg-${clr}-400` : `bg-${clr}`
      )}
    >
      {StateColor == color && <FaCheck />}
    </div>
  );
}

export default CategoryColors;