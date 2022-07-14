import React, {useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Helan from "./songs/Helan";
import Aqua from "./songs/Aqua";
import Sailor from "./songs/Sailor";
import Beers from "./songs/Beers";
import Ants from "./songs/Ants";


function Sitsit(){

    const [saannot, setSaannot] =useState(false);
    const [songs, setSongs] =useState(false);
    const [helan , setHelan] =useState(false);
    const [aqua, setAqua] = useState(false);
    const [sailor, setSailor] = useState(false);
    const [beers, setBeers] = useState(false);
    const [ants, setAnts] = useState(false);

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
                        <li>Everyone will obey toastmasters instructions etc.</li>
                        </ul></li>
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
                <div className="songList" onClick={()=>{setHelan(!helan)}}><p>45. Helan Gård</p></div>
                {helan?(<div onClick={()=>{setHelan(!helan)}} className="song"><Helan/></div>):null}
                <div className="songList" onClick={()=>{setAqua(!aqua)}}><p>107. Aqua vera</p></div>
                {aqua? (<div onClick={()=> {setAqua(!aqua)}} className="song"><Aqua/></div>):null}
                <div className="songList" onClick={()=>{setSailor(!sailor)}}><p>Drunken Sailor</p></div>
                {sailor? (<div onClick={()=> {setSailor(!sailor)}} className="song"><Sailor/></div>):null}
                <div className="songList" onClick={()=>{setBeers(!beers)}}><p>99 bottles of beer</p></div>
                {beers? (<div onClick={()=> {setBeers(!beers)}} className="song"><Beers/></div>):null}
                <div className="songList" onClick={()=>{setAnts(!ants)}}><p>Ants go marching</p></div>
                {ants? (<div onClick={()=> {setAnts(!ants)}} className="song"><Ants/></div>):null}
            </div>):null}
            
        </div>
    );
}

export default Sitsit;