import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const navbarStyle = {
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        border: "2px solid black"


    }
    return (
        <div style={navbarStyle}>
            
            <Link to = "/"><p>Trending</p></Link>
            <Link to = "/categories"><p>Categories</p></Link>
            

            <Link to = "/search"><p>Search</p></Link>
            
        </div>
    )
}
