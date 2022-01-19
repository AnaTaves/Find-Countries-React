import React from "react";

import * as S from './CountryInfo.styles';

const CountryInfo = ({country}) =>(
    <div>
    <S.HomePageLink to='/'>Homepage</S.HomePageLink>
    <S.CountryInfoContainer>
      <S.FlagContainer alt='flag' src={country.flags.png} />
      <S.CountryDetails>
        <h1>{country.name.common}</h1>
        <div>
        <h5>Official name: <span>{country.name.official}</span></h5>
        <h5>Population: <span>{country.population}</span></h5>
        <h5>Region: <span>{country.region}</span></h5>
        <h5>Sub Region: <span>{country.subregion}</span></h5>
        <h5>Capital: <span>{country.capital}</span></h5>
        <h5>Top Level Domain: <span>{country.tld}</span></h5>
        <h5>Timezone: <span>{country.timezones}</span></h5>
        </div>
      </S.CountryDetails>
   </S.CountryInfoContainer>
    </div>
  )
  
  export default CountryInfo;

  /**<div>
        </div> */