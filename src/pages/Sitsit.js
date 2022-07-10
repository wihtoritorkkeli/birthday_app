import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sitsit(){
    return(
        <div>
            <div className="location-page">
                <div className="homeLink"><Link to="/"><FontAwesomeIcon icon={faHouseChimney} color={'white'} size="2x"/></Link></div>
            </div>
            <h1>Sitsi stuff</h1>
        </div>
    );
}

export default Sitsit;