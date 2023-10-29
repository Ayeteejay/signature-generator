import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Grit from "../images/grit.jpg";

const Container = styled.div`
  padding: 0 5rem;
  margin: 0;
  background: url(${Grit}) no-repeat center center / cover;
  @media screen and (max-width: 576px) {
    padding: 0 2rem;
  }
`;

const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  transition: all 600ms;
  @media screen and (max-width: 999px) {
    max-width: 700px;
  }
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}
