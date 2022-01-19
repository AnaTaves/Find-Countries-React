import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CountryInfoContainer = styled.main`
display:flex;
justify-content:space-evenly;
align-items:center;
margin-top:40px;
@media screen and (max-width:800px){
flex-direction:column;
}
`;

export const CountryDetails = styled.article`
span{
font-weight: 400;
 }
div{
display:grid;
grid-template-columns: repeat(2,1fr);
grid-gap:5px;
@media screen and (max-width:800px){
  grid-template-columns:1fr;
}
  }
h1{
  letter-spacing:1px;
}
`;

export const FlagContainer = styled.img`
width:320px;
`;

export const HomePageLink = styled(Link)`
display:inline-flex;
justify-content:flex-start;
border: none;
border-radius:20px;
padding:10px;
`;