import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'
import UserImage from '../assets/me.jpeg'


import Logo from '../assets/stache_logo.svg'


const Nav = () => {
    return (
      <nav>
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="stacheCTA">
          <ul className="navLinks">
            <li>Manage Spaces</li>
            <li>Bookings</li>
            <li>Messages</li>
          </ul>
          <Link to="/"><button>Add A Space</button></Link>
          <div className="stacheUser">
            <img className="user" src={UserImage} />
            <span>Meloyski &nbsp;<FontAwesomeIcon icon={faAngleDown} color="#3a3f5b"/></span>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
