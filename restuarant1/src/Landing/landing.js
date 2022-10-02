import React from 'react'
import "./Landing.css"
import logo from '../images/alohakitchenlogo.png'

export default function landing() {
  return (
    <div className='landingParent'>
      <div className="logoParent">
        <img className="logoChild" src={logo}/>
      </div>
    </div>
  )
}
