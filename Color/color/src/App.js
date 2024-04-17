import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Home"
import FullColor from './FullColor';
import ColorNew from './ColorNew';

function App() {
  const [colors, setColors] = useState(
    [ {name: 'red', number : 'rgb(255,0,0)'} ,
      {name: 'blue', number: 'rgb(0,0,255)'},
      {name: 'green', number: 'rgb(0,255,0)'}
    ])

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path = "/colors" element ={<Home colors={colors}/>} />
          <Route path = "/colors/new" element ={<ColorNew colors={colors} setColors={setColors}/>} />
          <Route path = "/colors/:color" element = {<FullColor colors={colors}/>}/>
          <Route path = "/*" element ={<Navigate to="/colors" colors = {colors}/>} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
