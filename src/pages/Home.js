import React from "react";
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="margin-zero">
            <div className="heroBanner">
                <h1>Welcome to <br/>W &amp; S birthday party app!</h1>
                <p className="valueProp">Find all the information needed to have a great time</p>
            </div>
            <div className="basicInfo">
                <h2>Warm welcome to the party!</h2>
                <p>Hope you packed enough energy and liquids with you, because tonight is going to be a long night</p>
                <p>Here's a quick review of tonights intinirary:</p>
                <ul className="alignLeft">
                    <li>Fashion Show and introductions</li>
                    <li>Birthday Sitsit &#40;Including Oscar Awards&#41;</li>
                    <li>Other fun activities</li>
                </ul>
                <br/>
                <h3>Check usefull links from below:</h3>
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