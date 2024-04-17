import React from "react";
import { Link } from "react-router-dom"; 

function Home({colors}){

    return (
        <>
            <div>
                <h1>Welocome to the color factory.</h1>
                <Link to={'/colors/new'}>Add a color</Link>            
            </div>       
            <div>
                <h2>Select a color.</h2>
                <ul>
                    {colors.map(c => (
                        <li> 
                            <Link to={`/colors/${c.name}`}>{c.name}</Link>
                        </li>
                    ))}                    
                </ul>
            </div> 
        </>

    )
}

export default Home;