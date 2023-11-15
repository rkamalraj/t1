
import React from 'react'
import {useState} from 'react'

const container = () => {
  const [name,setName ]=useState
  const namechenging = () => {
  const chengingName =["Partha", "Sarathy", "Dinesh", "Kamal"]
  const nameMathad=[Math.floor(Math.random()*chengingName.length)]
  setName(chengingName[nameMathad])
}
  
  return (
    <div>
    <p>Hii{name}</p>
    <button onClick={namechenging}>check mee</button>
    </div>
  )
}


export default app