import React from "react";
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="margin-zero">
            <div className="heroBanner">
                <h1>Welcome to <br/>W &amp; S birthday party app!</h1>
                <p className="valueProp">From here you can find all the information you need</p>
            </div>
            <div className="container">
                <Link to="/location" className="link"><div className="linkBox" id="location">
                    <h2>Location information</h2>
                </div></Link>
                <Link to="/sitsit" className="link"><div className="linkBox" id="sitsit">
                    <h2>Sitsit</h2>
                </div></Link>
                <Link to="/location" className="link"><div className="linkBox" id="lappi">
                    <h2>Lapin Energiaa</h2>
                </div></Link>
            </div>
        </div>
    );
}

export default Home;