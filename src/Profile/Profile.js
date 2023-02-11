import React from 'react'
import './Profile.css'
import Chat from '../assets/chat.png'

export default function Profile() {
  return (
    <div className='profil'>
        <ul className="liste-profil">
            <li className="item-profil"><img src={Chat} alt="chat" /></li>
            <li className="item-profil">Name</li>
            <li className="item-profil">Email</li>
            <li className="item-profil">Description</li>
        </ul>
    </div>
  )
}
