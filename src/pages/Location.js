import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

function ParkMap(){
    return(
        <GoogleMap
        zoom={14}
        center={{lat: 60.174004, lng: 24.936622}}
        mapContainerClassName ="map-container" 
        >
            <Marker position={{lat: 60.174004, lng: 24.936622}}/>
        </GoogleMap>
    );
}

function WcMap(){
    return(
        <GoogleMap
        zoom={13.6}
        center={{lat: 60.174004, lng: 24.936622}}
        mapContainerClassName ="map-container" 
        >
            <Marker position={{lat: 60.171176, lng: 24.9385349}}/>
            <Marker position={{lat: 60.1732594,lng: 24.9305878}}/>
        </GoogleMap>
    );
}

function StoreMap(){
    return(
        <GoogleMap
        zoom={14}
        center={{lat: 60.17284662897772, lng: 24.938055768542068}}
        mapContainerClassName ="map-container" 
        >
            <Marker position={{lat: 60.171544530416774, lng: 24.938152328050922}}/>
            <Marker position={{lat: 60.17054123896248,lng: 24.93878532932703}}/>
        </GoogleMap>
    );
}

function AlkoMap(){
    return(
        <GoogleMap
        zoom={13.6}
        center={{lat: 60.17284662897772, lng: 24.938055768542068}}
        mapContainerClassName ="map-container" 
        >
            <Marker position={{lat: 60.17050918246206, lng: 24.938495650931884}}/>
            <Marker position={{lat: 60.17073866162546, lng: 24.935073152506856}}/>
        </GoogleMap>
    );
}


function Location(){
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyBjF2TZFDSuZ2qvlbePOJ4qJKpxQ6p2mtw",});
    if (!isLoaded) return <div>Loading...</div>
    return(
        <div className="location-page">
            <div className="homeLink"><Link to="/"><FontAwesomeIcon icon={faHouseChimney} color={'white'} size="2x"/></Link></div>
            <h1 className="locationH1">Usefull location infromation</h1>
            <div className="locationBox">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2 className="locationName">Töölönlahden tapahtumapuisto</h2>
                                <p className="infotext">We'll meet somewhere infront of Oodi -library</p>
                            </td>
                            <td>
                                <ParkMap/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="locationBox">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2 className="locationName">Public Bathrooms</h2>
                                <p className="infotext">Option 1: Central Metro station<br/>Option 2: Museokatu 3</p>
                            </td>
                            <td>
                                <WcMap/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="locationBox">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2 className="locationName">Grocery Stores</h2>
                                <p className="infotext">Option 1: K-Market Postitalo <br/>&#40;6-30am-11pm&#41;<br/>Option 2: S-Market Sokos <br/>&#40;24/7&#41; </p>
                            </td>
                            <td>
                                <StoreMap/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="locationBox">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h2 className="locationName">Alko</h2>
                                <p className="infotext">Option 1: Salomonkatu 1 <br/>Option 2: Mannerheimintie 9</p>
                            </td>
                            <td>
                                <AlkoMap/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Location;