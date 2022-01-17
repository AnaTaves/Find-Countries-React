import React from "react"
import * as S from "./SearchBox.styles";

const SearchBox = ({placeholder,handleChange}) =>(
    <>
      
   <S.SearchContainer
    className="search"
    type="search"
    placeholder = {placeholder}
    onChange = {handleChange}
    autoFocus />
   
    </>
  )


export default SearchBox;