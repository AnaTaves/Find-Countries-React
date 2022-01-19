import React from "react";

import * as S from  './CountryCard.styles';

const CountryCard = ({country}) =>(
    <S.CountryCardContainer>

    <S.Image
    alt="countryFlag"
    src={country.flags.png}/>

    <S.CountryInfo>
     <h3>{country.name.common}</h3>
     <h5>Population: <span>{country.population}</span></h5>
     <h5>Region: <span>{country.region}</span></h5>
     <h5>Capital: <span>{country.capital}</span></h5>
     <S.LinkContainer to= {`/country/${country.name.common}`}>Learn More</S.LinkContainer>
    </S.CountryInfo>
     
   
     
    </S.CountryCardContainer>
  )


export default CountryCard;