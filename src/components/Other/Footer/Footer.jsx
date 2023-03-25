import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
         <Link className="link" to={"about"}>
          About
        </Link>
        <Link className="link" to={"contact"}>
          Contact
        </Link>
    </footer>
  )
}

export default Footer