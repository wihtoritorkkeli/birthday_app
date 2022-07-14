import React, {useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sitsit(){

    const [saannot, setSaannot] =useState(false);
    const [songs, setSongs] =useState(false);

    return(
        <div>
            <div className="location-page">
                <div className="homeLink"><Link to="/"><FontAwesomeIcon icon={faHouseChimney} color={'white'} size="2x"/></Link></div>
            </div>
            <h1>Sitsi stuff</h1>
            <div className="ylablock" onClick={()=> {setSaannot(!saannot)}}>
                <h2>Rules</h2>
            </div>
            {saannot? (<div className="saannot" onClick={()=>{setSaannot(!saannot)}}>
                <ul>
                    <li>Dress accordingly</li>
                    <li>Arrive early</li>
                    <li>You can only sit with the permission from the toastmasters</li>
                    <li>Toastmasters word is the law: <ul>
                        <li>When a toastmaster speaks, everyone will be quiet and listen</li>
                        </ul>Everyone will obey toastmasters instructions etc.</li>
                    <li>Don't leave the "table" without a permission from toastmasters</li>
                    <li>No talking without the permission from toastmasters</li>
                    <li>Phone can only be used to take pictures, videos, etc. and to follow our sitsi songs</li>
                    <li>Manners maketh man</li>
                    <li>Toasting happens always by toasting to toastmasters</li>
                    <li>When someone challenges you, stand up and sing a song</li>
                    <li>No clapping! Praises will be done by hitting your leg.</li>
                    <li>Punishments:<ul>
                        <li>If you break a rule, you will be punished</li>
                        <li>If you see someone else breaking the rules, tell about it to toastmasters</li>
                        </ul></li>
                    <li>If you want to request a song or an activity, stand up, state your name, state your character &#40; who you dressed as &#41; and then proceed</li>
                </ul>
            </div>): null}
            <div className="ylablock" onClick={()=>{setSongs(!songs)}}>
                <h2>Songs</h2>
            </div>
            {songs? (<div className="songs">
                <h2>songs here</h2>
            </div>):null}
            
        </div>
    );
}

export default Sitsit;