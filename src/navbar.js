import React from "react";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './App.css';

export default function Navbar() {
    return (
    <header className="header">
      <div id="nav">
      <div id="logo">
      <TravelExploreIcon  fontSize="large"/>
        </div>
        <span id="title">Travel Journal</span>
      </div>
    </header>
    )
}