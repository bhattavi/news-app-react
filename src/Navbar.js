import React from 'react'

export default function Navbar() {
    const navbarStyle = {
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        border: "2px solid black"
        

    }
    return (
        <div style={navbarStyle}>
            <p>Trending</p>
            <p>Categories</p>
            <p>Search</p>
        </div>
    )
}
