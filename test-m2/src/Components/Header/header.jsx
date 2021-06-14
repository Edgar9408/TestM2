import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <Link to={`/`} style={{ textDecoration: "none" }}>
            <div className="Tittle">
                Test M2
            </div>
        </Link>
    )
}

export default Header
