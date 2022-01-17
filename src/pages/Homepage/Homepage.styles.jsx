import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 22px;
  }
`;
