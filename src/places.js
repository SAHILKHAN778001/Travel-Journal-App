import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Places(props) {
    return (  
       <div className="places">
       <img className="img1" src={`${props.imageUrl}`} alt="" />
       <div id="location">
        <div id="deatails">
       <span id="iconl"><LocationOnIcon/></span> 
       <h3 id="country">{props.location}</h3>
    <a href={`${props.googleMapsUrl}`} id="map">View on Google Maps</a>
        </div>
       <h1 id="name">{props.title}</h1>
       <span id="start">{props.startDate} - </span><span id="end">{props.endDate}</span>
         <p id="description">
        {props.description}
         </p>
       </div>
       </div>
       
    )
}

