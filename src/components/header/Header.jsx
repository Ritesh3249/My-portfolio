import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/ritesh.png'
import HeaderSocials from './HeaderSocials'
function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ritesh gupta</h1>  
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
<HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header
