import React, { useContext } from 'react'
import { Playcontext } from '../Context/Playcontext'

const Songitem = ({image,name,desc,id}) => {

  const  {playWithId} = useContext(Playcontext)
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} />
      <p className='font-bold mt-2 mb-1' >{name}</p>
    <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default Songitem
