import React, {useEffect, useState} from "react";
import "./App.css";

import axios from "./axios"; 

const [NasaData, setNasaData] = useState([]); 

useEffect(() => {
  axios
  .get("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY")
  .then((element) => {
  return element.data.links 
  })
}, []); 

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
