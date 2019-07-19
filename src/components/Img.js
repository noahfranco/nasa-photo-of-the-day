import React from "react"; 

function AwesomeImg(props) {
    console.log("props in Img", props.NasaImg)
    return (

       <img src= {props.NasaImg} /> 
    )
    
}

export default AwesomeImg; 
