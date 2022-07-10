import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Location(){
    return(
        <div className="location-page">
            <div className="homeLink"><Link to="/"><FontAwesomeIcon icon={faHouseChimney} color={'white'} size="2x"/></Link></div>
            <h1 className="locationH1">Usefull location infromation</h1>
        </div>
    );
}

export default Location;