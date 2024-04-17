import React from "react";
import {useParams} from "react-router-dom";

function FilterDogDetails({dogs}){
    const {name} = useParams();
    if (name){
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        )
        return (
            <div>
                <img src= {`/${currentDog.src}.jpg`}/>
                <h2>{currentDog.name}</h2>
                <h3>{currentDog.age} years old</h3>
                <ul>
                    {currentDog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))

                    }
                </ul>
            </div>
        )
    }
}

export default FilterDogDetails;