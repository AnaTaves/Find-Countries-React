import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  border-radius: 5px;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 800px) {
    margin: 0 auto;
    width: 50%;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const Image = styled.img`
  width: 180px;
`;

export const CountryInfo = styled.div`
  width: 180px;
  span {
    font-weight: 400;
  }
`;

export const LinkContainer = styled(Link)`
  padding: 10px;
`;