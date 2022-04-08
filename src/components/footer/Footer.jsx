import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">RITESH</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><AiOutlineFacebook/></a>
        <a href="https://instagran.com"><BsInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; RITESH. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
