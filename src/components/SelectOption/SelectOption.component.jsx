import React from "react";

import * as S from "./SelectOption.styles";

const SelectOption = ({ fetchRegion }) => (
  <>
    <S.SelectContainer name="regions" onChange={(e) => fetchRegion(e.target.value)}>
      <option value="">Filter By Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </S.SelectContainer>
    
  </>
);

export default SelectOption;