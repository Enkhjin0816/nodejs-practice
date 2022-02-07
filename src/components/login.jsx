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
import { useFirebase } from "../firebase";
import firebase from "firebase/compat/app";
import { useState } from "react";

const Login = () => {
  const { auth } = useFirebase();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const login = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
        window.location.href = "http://localhost:3001/home-loggedin";
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  return (
    <Container id={"cont"}>
      <Header>
        <Button info>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
      </Header>
      <Body login>
        <LogoDefault />
        <Column>
          <P Margin={"2"} Weight={"bold"} colors={"green"} fontSize={"xl"}>
            Нэвтрэх
          </P>
          <After>
            <P fontSize={"sm"}>Цахим хаяг</P>
            <Input
              small
              type={"email"}
              placeholder="name@mail.domain"
              onChange={(event) => setEmail(event.target.value)}
            />
          </After>
          <After>
            <P fontSize={"sm"}>Нууц үг</P>
            <Input
              small
              type={"password"}
              placeholder="••••••••••"
              onChange={(event) => setPass(event.target.value)}
            />
          </After>
          <Row>
            <Row Width={"lg"}>
              <input type="checkbox" />
              <P fontSize={"sm"}>Намайг сана</P>
            </Row>
            <Link to="/forgotPass">
              <Button lined>Нууц үгээ мартсан</Button>
            </Link>
          </Row>
          <Button onClick={login} longButton>
            НЭВТРЭХ
          </Button>
          <Link style={{ marginLeft: "15%" }} to="/signUp">
            <Button lined>Шинэ хэрэглэгч бол энд дарна уу?</Button>
          </Link>
        </Column>
      </Body>
      <Footer>
        <p>Made with ♥️ by Nest Academy</p>
        <p style={{ color: "#CCCCCC" }}>©boginoo.io 2020</p>
      </Footer>
    </Container>
  );
};

export default Login;
