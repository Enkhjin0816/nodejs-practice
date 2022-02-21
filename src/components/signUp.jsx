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
  Column,
  Error
} from "../styles/style";
import Container from "../styles/Container.styled";
import { LogoDefault, Logo } from "../pictures/pictures";
import { useFirebase } from "../firebase";
import { useState } from "react";
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Имайл хаяг биш байна!').required('Имайл хаягаа оруулна уу!'),
  password: yup.string().required('Нууц үг хийх шаардлагатай!').min(6, 'Нууц үг дор хаяж 6 оронтой байх шаардлагатай!'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Нууц үг тохирох ёстой!')
})

const SignUp = () => {
  const { auth } = useFirebase();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");

  const signUp = () => {
      auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
        window.location.href = "http://localhost:3000/home-loggedin";
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode.match());
      });
  };

  const checkValid = () => {
    schema.strict().validate({
      email: email,
      password: pass,
      passwordConfirmation: passConf
    }).then((valid) => {
      signUp();
    })
    .catch((errors) => {
      const newDiv = document.createElement("div");
      const newContent = document.createTextNode(errors.toString().split(':').slice(1));
      newDiv.appendChild(newContent);
      const currentDiv = document.getElementById("div1");
      var elm = newDiv;
      (currentDiv).prepend(elm);
      setTimeout(function() {
          elm.remove();
      }, 3000);
    })
  }

  

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
            <Input onChange={(event) => setPassConf(event.target.value)} small type={"password"} placeholder="••••••••••" />
          </After>
          <Error id="div1"></Error>
          <Button onClick={checkValid} longButton>
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
