import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios"; 
import Img from "./components/Img.js"
import Explanation from "./components/Explanation"
import Date from "./components/Date.js"

function App() {
const [NasaData, setNasaData] = useState(""); 
const [NasaExplanation, setNasaExplanation] = useState([]); 
const [NasaDate, setNasaDate] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
    .then((element) => {
      console.log(element)
    setNasaData(`${element.data.copyright}`)
    setNasaExplanation(`${element.data.explanation}`)
    setNasaDate(`${element.data.date}`)
    
    })
    .catch(error => {
      return setNasaData("error", error)
    })
  },[]); 

  return (
    <div className="App">
      <div>
        <div>
            {NasaData}
        </div>
        <div> 
            <Img />
        </div>
        <div> 
          {NasaExplanation}
            <Explanation />
        </div>
        <div> 
          {NasaDate}
            <Date /> 
        </div>
      </div>
    </div>
  );
}

export default App;
