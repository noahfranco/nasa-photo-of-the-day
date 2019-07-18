import React from "react"; 
// import App from "./../App"; 

function AwesomeExplanation(props) {
    console.log("this is props", props.NasaExplanation); 
    return(
    <p> {props.NasaExplanation} </p>
    )
}

export default AwesomeExplanation; 