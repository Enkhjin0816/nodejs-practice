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
import { auth } from "../firebase";
import { useState } from "react";

const SignUp = () => {
  const { auth } = useFirebase();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
        window.location.href = "http://localhost:3000/home-loggedin";
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <Container>
      <Header>
        <Button info>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
      </Header>
      <Body signUp>
        <Link to='/'>
          <LogoDefault />
        </Link>
        <Column>
          <P Margin={"1"} Weight={"bold"} colors={"green"} fontSize={"xl"}>
            Бүртүүлэх
          </P>
          <After>
            <P fontSize={"sm"}>Цахим хаяг</P>
            <Input
              onChange={(event) => setEmail(event.target.value)}
              small
              type={"email"}
              placeholder="name@mail.domain"
            />
          </After>
          <After>
            <P fontSize={"sm"}>Нууц үг</P>
            <Input
              onChange={(event) => setPass(event.target.value)}
              small
              type={"password"}
              placeholder="••••••••••"
            />
          </After>
          <After>
            <P fontSize={"sm"}>Нууц үгээ давтана уу</P>
            <Input small type={"password"} placeholder="••••••••••" />
          </After>
          <Button onClick={signUp} longButton>
            БҮРТГҮҮЛЭХ
          </Button>
        </Column>
      </Body>
      <Footer>
        <p>Made with ♥️ by Nest Academy</p>
        <p style={{ color: "#CCCCCC" }}>©boginoo.io 2020</p>
      </Footer>
    </Container>
  );
};

export default SignUp;
