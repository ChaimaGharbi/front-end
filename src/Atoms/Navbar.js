import React from 'react'
import './Navbar.css'
import image1 from '../assets/image-1.png'
import image2 from '../assets/image-2.png'
import image3 from '../assets/image-3.png'
import image4 from '../assets/image-4.png'
export default function Navbar() {
  return (
    <nav>
        <ul className="liste">
            <li className="items"><img src={image1} alt="image-1" /></li>
            <li className="items"><img src={image2} alt="image-2" /></li>
            <li className="items"><img src={image3} alt="image-3" /></li>
            <li className="items"><img src={image4} alt="image-4" /></li>
        </ul>
        <div className="logo">Logo</div>
    </nav>
  )
}
