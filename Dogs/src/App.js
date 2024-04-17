import './App.css';
import React, { useState, useEffect} from "react";
import axios from "axios"; 
import {BrowserRouter} from "react-router-dom";

import RouteList from "./RouteList";
import Nav from './Nav';

function App() {
    const [dogs, setDogs] = useState({
      data: null,
      isLoading: true
    });

    useEffect(() => {
      async function loadDogs(){
        const response = await axios.get("http://localhost:5001/dogs")
        setDogs({
          data: response.data,
          isLoading: false
        })
      }
      loadDogs()
    }, [])

    if (dogs.isLoading) {
      return <h1>Loading...</h1>
    }
    if (dogs.isLoading) {
      return <h1>Loading...</h1>
    }

  return (
    <BrowserRouter>
      <Nav dogs = {dogs.data}/>
      <div>
        <RouteList dogs ={dogs.data}/>
      </div>

    </BrowserRouter>
  );
}

export default App;
