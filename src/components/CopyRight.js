import React from "react"; 


function AwesomeCopyRight(props) {
    console.log("this is Copy Right props", props.NasaCopyRight); 
    return(
    <p> {props.NasaCopyRight} </p>
    )
}

export default AwesomeCopyRight; 