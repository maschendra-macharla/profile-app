import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData, ReactConcepts } from './SidebarData';
import { IconContext } from 'react-icons'
import './Navbar.css';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: 'red' }}>
                <div className='navbar'>
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineMenuUnfold onClick={showSidebar} />
                    </Link>
                    <div className='header-title'>
                        <div>
                            <h2>Profile-App</h2>
                        </div>
                        {/* <div style={{ float: "right" }}>
                            <img src="Dlogo.png" alt="Logog" width={300} height={70} />
                        </div> */}
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars' >
                                <AiIcons.AiOutlineMenuFold />
                            </Link>
                        </li>
                        {SidebarData?.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
