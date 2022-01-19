import React, { useState, useEffect } from "react";

import SearchBox from "../../components/SearchBox/SearchBox.component";
import SelectOption from "../../components/SelectOption/SelectOption.component";
import CountryList from '../../components/CountryList/CountryList.component';

import * as S from "./Homepage.styles";

const Homepage = () => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");

  //Exhibits the countries on the search box
  const filteredCountries = country.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const newData = await response.json();
      setCountry(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  //Exhibits the region chosen on the SelectOption
  const fetchRegion = async (region) => {
    if(!region) return 
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const newData = await response.json();
    await setCountry(newData);
  };

  return (
    <>
      <S.NavContainer>
        <SearchBox
          placeholder="Search Country..."
          handleChange={handleChange}
        />
        <SelectOption fetchRegion={fetchRegion} />
      </S.NavContainer>
      <CountryList country={filteredCountries} />
    </>
  );
};

export default Homepage;
