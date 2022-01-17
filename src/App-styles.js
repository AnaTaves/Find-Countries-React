import styled from "styled-components";
import { ReactComponent as Moon } from "./assets/moon-outline.svg";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const MoonLogo = styled(Moon)`
  width: 20px;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
