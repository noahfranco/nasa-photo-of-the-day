import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios"; 
import Img from "./components/Img.js"
import Explanation from "./components/Explanation"
import Date from "./components/Date.js"

function App() {
const [NasaData, setNasaData] = useState(""); 

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
    .then((element) => {
      console.log(element)
    return setNasaData(element.data.copyright)
    })
    .catch(error => {
      return setNasaData("error", error)
    })
  },[]); 

  return (
    <div className="App">
      <div>
        <Img NasaData={NasaData} /> 
        {NasaData}
        <Explanation NasaData={NasaData} />
        {/* <Date NasaData={NasaData} />  */}
      </div>
    </div>
  );
}

export default App;
