import styled from "styled-components";
import VSSL from "../images/vssl-logo.svg";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 0 0 15rem 0;
  @media screen and (max-width: 576px) {
    margin: 0 0 7rem 0;
  }
`;

const Logo = styled.img`
  transition: all 300ms;
  position: absolute;
  width: 275px;
  inset: -25px auto auto 0;
  @media screen and (max-width: 576px) {
    width: 125px;
    inset: -10px auto auto 0;
  }
`;

export default function Header() {
  return (
    <Navigation>
      <Logo src={VSSL} />
    </Navigation>
  );
}
