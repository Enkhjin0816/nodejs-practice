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
import { useState } from "react";

const ForgotPass = () => {
  const {auth} = useFirebase();
  const [email, setEmail] = useState('');
  
  const sendEmail = () => {
    auth
    .sendPasswordResetEmail(email)
    .then(() => {
        let newDiv  = document.createElement("div");
        let text = document.createTextNode('Email sent');
        let currentDiv = document.getElementById('After');
        
        newDiv.appendChild(text);
        currentDiv.appendChild(newDiv);
        console.log('email sent');
    })
    .catch(error => {   
        let errorCode = error.code;
        console.log(errorCode)
    })
}

  return (
    <Container>
      <Header>
        <Button info>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
      </Header>
      <Body ForgotPass>
        <Link to='/'>
          <LogoDefault />
        </Link>
        <Column>
          <P Margin={"0"} Weight={"bold"} colors={"green"} fontSize={"xl"}>
            Нууц үг сэргээх
          </P>
          <P Width={"sm"} fontSize={"sm"}>
            Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
          </P>
          <After id="After">
            <P fontSize={"sm"}>Цахим хаяг</P>
            <Input small type={"email"} placeholder="name@mail.domain" onChange={(event) => setEmail(event.target.value)}/>
          </After>
          <Button onClick={sendEmail} longButton>Илгээх</Button>
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
