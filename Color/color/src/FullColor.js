import React from "react";
import { useParams, Link } from "react-router-dom";


function FullColor({colors}){
    const {color} =useParams();

    const chosenColor = colors.find( c=> c.name === color)

    return (
        <>
            <div style={{ backgroundColor: chosenColor.number }}>
                Your Chosen Color is {chosenColor.name}! It is lovely! 
            </div>
            <Link to="/colors" colors ={colors}>Return Home</Link>        
        </>
    )
}

export default FullColor;