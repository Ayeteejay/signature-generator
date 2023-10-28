import styled from "styled-components";
import Ship from "../images/ship.jpeg";

const Container = styled.div`
  position: relative;
  .gin-title {
    position: relative;
  }
  h1.gin-underlay,
  span.gin-overlay {
    color: var(--smoke);
    font-family: var(--gin-regular);
    font-size: var(--font-extra-large);
    font-weight: 300;
    line-height: 1;
    margin: 0 0 2rem 0;
    z-index: 2;
    position: relative;
  }
  p {
    color: var(--smoke);
    font-family: var(--elza);
    font-size: var(--font-medium);
    line-height: 1.5;
  }
  span.gin-overlay {
    position: absolute;
    inset: 2px auto auto 4px;
    color: var(--bronze);
    font-family: var(--gin-lines);
  }
  .ship-container {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    inset: 0 0 auto auto;
  }
  img.ship {
    opacity: 0.3;
    max-width: 100%;
    transition: all 300ms;
    transform: translate(0, -75px);
    z-index: 1;
  }
  @media screen and (max-width: 900px) {
    img.ship {
      transform: translate(0, 50px);
    }
  }
  @media screen and (max-width: 576px) {
    img.ship {
      display: none;
    }
  }
`;

export default function Hero() {
  return (
    <Container>
      <div className="gin-title">
        <h1 className="gin-underlay">Create your email signature</h1>
        <span className="gin-overlay">Create your email signature</span>
      </div>
      <p>
        This is a demo page showing the capabilities of our email signature
        generator. Want to set this up for your organization? Download the
        bundle today!
      </p>
      <div className="ship-container">
        <div>&nbsp;</div>
        <img className="ship" src={Ship} alt="Lithograph print of ship" />
      </div>
    </Container>
  );
}
