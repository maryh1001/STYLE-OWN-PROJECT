import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
function Navigation() {

    const navigate = useNavigate();

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("/")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("/")}>
                    Login
                </a>
            </li>
        </>
    )



    return (
      <nav>
        <a>Home</a>
        <a>Placeholder</a>
        <a>Placeholder</a>
      </nav>
    )
}

export default Navigation;