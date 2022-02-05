import './App.css';
import Sidebar from "./component/Sidebar"
import Main from "./component/Main"
import Auth from "./component/Auth/Auth"
import { io } from "socket.io-client";
import React, { useState, useEffect } from 'react';
import { dividerClasses } from '@mui/material';
import socketAPI from "./helps/socketAPI"

const sessionId = "acd1f1454"

function App() {
  useEffect(() => {    
    const socket = socketAPI;  

    
  });
  return (
    <div className="app">
      {!sessionId ? 
        <div className="appSkype">
          <Sidebar />
          <Main />
        </div> : 
        <Auth />}
    </div>
  )  
  }
  


export default App;
