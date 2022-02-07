import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Button,
  Input,
  Header,
  Body,
  Footer,
  Row,
  After,
  P,
  Column
} from "../styles/style";
import Container from "../styles/Container.styled";
import { LogoDefault, Logo } from "../pictures/pictures";

const ForgotPass = () => {
  return (
    <Container>
      <Header>
        <Button info>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
      </Header>
      <Body ForgotPass>
        <LogoDefault />
        <Column>
          <P Margin={"0"} Weight={"bold"} colors={"green"} fontSize={"xl"}>
            Нууц үг сэргээх
          </P>
          <P Width={"sm"} fontSize={"sm"}>
            Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
          </P>
          <After>
            <P fontSize={"sm"}>Цахим хаяг</P>
            <Input small type={"email"} placeholder="name@mail.domain" />
          </After>
          <Button longButton>Илгээх</Button>
        </Column>
      </Body>
      <Footer>
        <p>Made with ♥️ by Nest Academy</p>
        <p style={{ color: "#CCCCCC" }}>©boginoo.io 2020</p>
      </Footer>
    </Container>
  );
};

export default ForgotPass;
