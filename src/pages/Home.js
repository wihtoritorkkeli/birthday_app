import React from "react";
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="front-page">
            <h1>W &amp; S <br/>Birthday Bash</h1>
            <Link to="/location"><button className="fp-btn">Location Information</button></Link><br/>
            <Link to="sitsit"><button className="fp-btn">Sitsi Stuff</button></Link><br/>
            <Link to="lappi"><button className="fp-btn">Lapin Energiaa</button></Link>
        </div>
    );
}

export default Home;