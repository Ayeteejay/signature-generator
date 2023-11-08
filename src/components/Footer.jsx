import styled from "styled-components";

const Navigation = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding:3rem 0 4rem 0;
  p {
    color: var(--slate);
    font-family: var(--elza);
    font-size: var(--font-small);
    text-align: center;    
    line-height: 1.75;
  }
  a{
    color: var(--bronze);
    transition: all 300ms;
    text-decoration: none;
  }
  a:hover{    
    color: var(--slate);
  }
`;

const getCurrentYear = () => new Date().getFullYear();

export default function Footer() {
  return (
    <Navigation>      
      <p>Notice — We do not keep your information.<br/>If you have any questions regarding the generator please contact us here at <a href="mailto:ahoy@vsslagency.com">ahoy@vsslagency.com</a><br/>&#169; {getCurrentYear()} VSSL Agency. All rights reserved. <a href="https://vsslagency.com/privacy/" target="_blank" rel="noreferrer">Privacy Policy</a> / <a href="https://vsslagency.com/terms-of-use/" target="_blank" rel="noreferrer">Terms of Use</a>
      </p>
    </Navigation>
  );
}
