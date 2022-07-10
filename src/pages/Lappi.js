import React from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

function Lappi(){
    return(
        <div>
            <div className="location-page">
                <div className="homeLink"><Link to="/"><FontAwesomeIcon icon={faHouseChimney} color={'white'} size="2x"/></Link></div>
            </div>
            <h1>Lapin energiaa!</h1>
        </div>
    );
}

export default Lappi;
