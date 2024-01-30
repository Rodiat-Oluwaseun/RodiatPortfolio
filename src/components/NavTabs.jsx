import React from 'react';
import logo from '../Images/rodiatlogo.png';
import { NavLink } from 'react-router-dom';
import {FaBars ,FaTimes} from 'react-icons/fa';





const NavTabs = () =>{
  return(
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#9f4e9a] text-gray-300'>
      <div>
        <img src={logo} alt="Log Image"  style={{width:'50px'}}/>
      </div>
      <div>
        <ul>
        <li>
          <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        </li>
          <li><NavLink
          to="projectpage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Page
        </NavLink>
          </li>
          <li>
          <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
          </li>
        </ul>
      </div>
          {/* handbugger-menu */}
          <div className='hidden'>
            <FaBars />
          </div>
          {/* Mobile -menu */}
          <div>
          <ul>
        <li>
          <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
        </li>
          <li><NavLink
          to="projectpage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Page
        </NavLink>
          </li>
          <li>
          <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
          </li>
        </ul>
          </div>
    </div>
  )
}


export default NavTabs;