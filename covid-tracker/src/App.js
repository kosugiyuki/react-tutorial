import { useState } from "react"
import {Route, Routes, BrowserRouter, useRoutes} from "react-router-dom"
import countriesJson from "./contries.json"
import './App.css';
import TopPage from './pages/TopPage';

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecoverd: "",
    totalRecoverd: "",
    newDeaths: ""
  });

  const fetchCountryData = () => {
      fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => {
        console.log(data[data.length - 1]);
        console.log(data[data.length - 2]);
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered,
          newDeaths: data[data.length - 1].Deaths - data[data.length - 2].Deaths
        });
      });
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={
          <TopPage countriesJson={countriesJson}
          setCountry={setCountry} fetchCountryData={fetchCountryData} countryData={countryData}/>
        }>
        </Route>
        <Route exact path = "/world" element={
          <p>ワールド</p>
          }>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
