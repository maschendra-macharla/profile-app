import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text',
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <FaIcons.FaTools />,
        className: 'nav-text',
    },
    {
        title: 'Work Experience',
        path: '/experiences',
        icon: <FaIcons.FaBriefcase />,
        className: 'nav-text',
    },
]
