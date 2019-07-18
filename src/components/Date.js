import React from "react"; 
// import App from "./../App"; 

function AwesomeDate(props) {
    console.log("This is date props", props.NasaDate)
    return(
        <p> {props.NasaDate} </p>
    )
}

export default AwesomeDate; 