import React from 'react'

interface Props{
    size: string,
    stateSize : string,
    setStateSize : (size : string) => void
}
const CategorySize = ({stateSize, setStateSize, size} : Props) => {
    function handleClick(){
        if(stateSize !== size ){
            setStateSize(size)
        }else if(stateSize == size){
            setStateSize('')
        }
    }
  return (
 <div onClick={handleClick} className={`${stateSize == size && 'bg-black text-white'} py-[10px] hover:bg-black hover:text-white rounded-lg px-[20px] flex justify-center  items-center bg-[#F0F0F0] cursor-pointer`}>
    {size}
  </div>
  )
}

export default CategorySize