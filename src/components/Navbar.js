import { Link, useLocation } from "react-router-dom";

import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [showSideBar, setShowSideBar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "HOME",
            path: "/",
            icon: faHome
        },
        {
            name: "RECIPES",
            path: "/recipes",
            icon: faList
        },
        {
            name: "SETTINGS",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar() {
        setShowSideBar(false)
    }

    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo"><span>Grab</span>-A-<span>Bite</span></a>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className={location.pathname === link.path ? "navbar-link active" : "navbar-link"} to={link.path} key={link.name}>{link.name}</Link>
                    ))}

                </div>
                <div onClick={() => setShowSideBar(true)} className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSideBar && <Sidebar close={closeSidebar} links={links} />}

        </>
    )
}