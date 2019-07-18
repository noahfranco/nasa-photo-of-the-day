import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios"; 
import Img from "./components/Img.js"
import Explanation from "./components/Explanation"
import Date from "./components/Date.js"
import CopyRight from "./components/CopyRight.js"
import {TextColor, BackGroundColor } from "./components/styl.js"


function App() {
const [NasaCopyRight, setNasaCopyRight] = useState([]); 
const [NasaImg, setNasaImg] = useState([]); 
const [NasaExplanation, setNasaExplanation] = useState([]); 
const [NasaDate, setNasaDate] = useState([]);


  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
    .then((element) => {
      console.log(element)
    setNasaCopyRight(`${element.data.copyright}`)
    setNasaImg(`${element.data.url}`)
    setNasaExplanation(`${element.data.explanation}`)
    setNasaDate(`${element.data.date}`)
    
    })
    .catch(error => {
      return setNasaCopyRight("error", error)
    })
  },[]); 

  return (
    <div className="App">
      <div>
        <TextColor> 
            <CopyRight NasaCopyRight={NasaCopyRight} />
        </TextColor>  
        <div> 
            <Img NasaImg={NasaImg} />
        </div>
        <TextColor> 
            <Explanation NasaExplanation={NasaExplanation}/>
        </TextColor> 
        <TextColor> 
            <Date NasaDate={NasaDate} /> 
        </TextColor>
      </div>
    </div>
  );
}

export default App;
