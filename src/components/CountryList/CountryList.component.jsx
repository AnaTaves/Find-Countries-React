import React from "react"
import CountryCard from "../CountryCard/CountryCard.component"
import * as S from './CountryList.styles';

const CountryList = ({country}) =>(
    <S.CountryListContainer>
      {country.map(country =>(
        <CountryCard key = {country.index} country = {country} />
      ))}
    </S.CountryListContainer>
  )


export default CountryList