import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Input, Header, Body, Footer, Row } from "../styles/style";
import Container from "../styles/Container.styled";
import { LogoDefault, Logo } from "../pictures/pictures";

const Home = () => {
  return (
    <Container>
      <Header>
        <Button info>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
        <Link to="/login">
          <Button>НЭВТРЭХ</Button>
        </Link>
      </Header>
      <Body>
        <LogoDefault />
        <Row>
          <Input placeholder="https://www.web-huudas.mn" />
          <Link to="/shortened">
            <Button>БОГИНОСГОХ</Button>
          </Link>
        </Row>
      </Body>
      <Footer>
        <p>Made with ♥️ by Nest Academy</p>
        <p style={{ color: "#CCCCCC" }}>©boginoo.io 2020</p>
      </Footer>
    </Container>
  );
};

export default Home;
