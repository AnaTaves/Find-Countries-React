import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CountryInfo from '../../components/CountryInfo/CountryInfo.component'

const Country = () => {
  const [countryInfo,setCountryInfo] = useState([])
const { name } = useParams()

useEffect(() =>
{
const fetchCountryInfo = async() => { 
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const newData = await(response.json());
  setCountryInfo(newData); 
}
fetchCountryInfo()

},[name])

  return(
    <div>
      {countryInfo.map(country =>(
        <CountryInfo key = {country.index} country = {country} />
      ))}
   </div>
  )
};

export default Country;
