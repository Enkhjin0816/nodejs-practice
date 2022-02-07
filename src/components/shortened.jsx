import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Button,
  Input,
  Header,
  Body,
  Footer,
  Row,
  Results,
  P,
  After
} from "../styles/style";
import Container from "../styles/Container.styled";
import { LogoDefault, Logo } from "../pictures/pictures";

const Shortened = () => {
  return (
    <Container>
      <Header>
        <Button info>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
        <Link to="/login">
          <Button>НЭВТРЭХ</Button>
        </Link>
      </Header>
      <Body shortened>
        <LogoDefault />
        <Row>
          <Input placeholder="https://www.web-huudas.mn" />
          <Button>БОГИНОСГОХ</Button>
        </Row>
        <Results>
          <After>
            <P fontSize={"sm"} default>
              Өгөгдсөн холбоос:
            </P>
            <P>https://www.web-huudas.mn</P>
          </After>
          <After>
            <P fontSize={"sm"} default>
              Богино холбоос:
            </P>
            <Row>
              <P>shortly.io/wbmn12</P>
              <Button lined>Хуулж авах</Button>
            </Row>
          </After>
        </Results>
      </Body>
      <Footer>
        <p>Made with ♥️ by Nest Academy</p>
        <p style={{ color: "#CCCCCC" }}>©boginoo.io 2020</p>
      </Footer>
    </Container>
  );
};

export default Shortened;
