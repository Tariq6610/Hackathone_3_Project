import React from 'react'

interface Props{
  availbleType : string,
  stateCategory: string,
  setStateCategory : (category : string) => void
}

const Categories = ({availbleType, stateCategory, setStateCategory} : Props) => {
  function handleClick(){
    if(stateCategory !== availbleType ){
      setStateCategory(availbleType)
    }else if(stateCategory == availbleType){
      setStateCategory('')
    }
  }
  return (
    <div onClick={handleClick} className={`${stateCategory == availbleType && 'bg-slate-200'} flex items-center hover:bg-slate-200 cursor-pointer py-2 justify-between w-full `}>
    <p>{availbleType}</p>
    <img className={`${availbleType == stateCategory && 'rotate-90 transition-transform duration-150'}`} src="/home/bracket.png" alt="" />
  </div>
  )
}

export default Categories