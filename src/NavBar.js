import React, { useState } from "react";
import './App.css';
import hamburger from './images/hamburger.png'
import {Link} from 'react-router-dom';

function NavBar(){
    const [navOn, setNavOn] = useState(false);
    
    const handleClick = event => {
        setNavOn(current => !current);
    };

    return(<div className="App-header">
        <p><Link to="/" className="header-text"><b>W &amp; S Birthday Bash</b></Link> <span className="hide-on-default"><Link to="/location" className="navLink">Location</Link> <Link to="/sitsit" className="navLink">Sitsit</Link></span><img src={hamburger} className="hamburger" onClick={handleClick}></img></p>
        {navOn && (<div>
                <p className="navLink"><Link to="/location" className="navLink">Location</Link></p>
                <p className="navLink"><Link to="/sitsit" className="navLink">Sitsit</Link></p>
        </div>)}        
    </div>);
}

export default NavBar;