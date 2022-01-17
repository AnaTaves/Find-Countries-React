import styled from "styled-components";

export const CountryListContainer = styled.main`
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;