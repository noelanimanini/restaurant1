import React from 'react'
import "./Landing.css"
import logo from '../images/alohakitchenlogo.png'

export default function landing() {

  
  return (
    <div >
      <div className="NavBar">
          <div id="NavBarChild">
            <div>
              CATERING
            </div>
            <div>
              MENU
            </div>
            <div>
              CONTACT
            </div>
          </div>
      </div>
    <div className='landingParent' id="landingParentOverlay">
      <div className="logoParent">
        <img className="logoChild" src={logo} alt="aloha-kitchen-logo"/>
        <div className="alohaAddress">
        10408 SILVERDALE WAY NW, SILVERDALE, WA 98383
        </div>
      </div>
    </div>
    </div>
  )
}
