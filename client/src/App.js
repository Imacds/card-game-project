import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';

import './App.css';

import Game from './Game.js'
import Lobby from './Lobby.js'

function App() {
    
    const dummyServerData = require("./dummyServerData.json");
    
    // State variables
    const [pageState, setPageState] = useState("Lobby");
    const [serverData, setServerData] = useState(dummyServerData);
    
    //Callback used to change page
    function changePageState() {
        if (pageState === "Lobby") {
            setPageState("Game");
        } else {
            setPageState("Lobby");
        }
    }
    
    //Helper function that returns the correct page based on the hook variable
    function getPageFromPageState() {
        switch(pageState) {
            case "Lobby":
                return (
                    <Lobby changePageState={changePageState}/>
                );
             case "Game":
                return (
                    <Game changePageState={changePageState} serverData={serverData}/>
                );
            default:
                return (
                <p>An error was encountered running the state of this app: {pageState}</p>
                );
        }
    }
    
    return getPageFromPageState();
}

export default App;
