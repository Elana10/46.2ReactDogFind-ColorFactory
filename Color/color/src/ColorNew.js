import { Link, Navigate} from "react-router-dom";
import React, {useState} from "react"
import Home from "./Home";

function ColorNew({colors, setColors}){
    const INITIAL_STATE = {name : '', number: ''}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleChange = evt => {
        const {name, value} =evt.target;
        setFormData(fData => ({...fData, [name] : value}))
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        colors.push(formData)
        setColors(colors)
        setFormSubmitted(true)
    }

    return (
        <>
            {!formSubmitted ? (
                <>
                    <div>
                        <form onSubmit ={handleSubmit}>
                            <label htmlFor = "name ">Color Name:</label>
                            <input 
                                id = "name"
                                name = "name"
                                value ={formData.name}
                                onChange ={handleChange}    
                            />
                            <label htmlFor = "number">Color Value:</label>
                            <input
                                type ="color"
                                name= "number"
                                id = "number"
                                value= {formData.number}
                                onChange ={handleChange}
                            />
                            <button >Submit!</button>                    
                        </form>
                    </div>  
                    <Link to="/colors" colors = {colors} >Return Home</Link>                
                </>
            ) : (<Home colors={colors}/>)}

        </>
    )
}

export default ColorNew;