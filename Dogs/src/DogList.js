import React from "react";
import {Link} from "react-router-dom";

function DogList({dogs}) {
    return (
        <div>
            <h2>Dogs for Adoption</h2>
            <div>
                {dogs.map(dog => (
                    <div key={dog.id}> 
                        <img src={`/${dog.src}.jpg`} alt={dog.name} />
                        <h3>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                                {dog.name}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;