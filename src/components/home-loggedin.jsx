import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Input, Header, Body, Footer, Row, Dropdown, Column } from "../styles/style";
import Container from "../styles/Container.styled";
import { LogoDefault, Logo } from "../pictures/pictures";
import ArrowDown from "../pictures/arrow-down.svg";
import { useState } from "react";
import { useFirebase } from "../firebase";

const Home_loggedin = () => {
  const [toggle, setToggle] = useState(false);
  const {auth} = useFirebase();
  const logOut = () => {
    auth
    .signOut()
    .then(function() {
      window.location.href = "http://localhost:3000";
      console.log('logout success')
    }).catch((error) => {
      let errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  return (
    <Container>
      <Header>
        <Row>
        <Button info>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
        <Column reverse>
          {toggle ? 
            <Dropdown onClick={logOut}>Log out</Dropdown>
          : ''}
          <Button onClick={() => {setToggle(!toggle)}} dropdown>
            Dulguun
            <img style={{ paddingLeft: "10px" }} src={ArrowDown} />
          </Button>
        </Column>
        </Row>
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

export default Home_loggedin;
