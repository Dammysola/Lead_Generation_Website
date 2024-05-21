import React from 'react'
import Style from './Header.module.css'
import logo from '../../assets/leadGen.png'



const Header = () => {
  return (
    <div id={Style.header_WrapDiv} >
      <div id={Style.ImgDiv}>
        <img src={logo} alt="" />
      </div>
        <div id={Style.textDiv}>
            <p>Industries</p>
            <p>Pricing</p>
            <p>Process</p>
            <p>CRM</p>
        </div>
        <p>CRM Login</p>
        
    </div>
  )
}

export default Header