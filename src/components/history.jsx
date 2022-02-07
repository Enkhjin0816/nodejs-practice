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
  After,
  Box
} from "../styles/style";
import Container from "../styles/Container.styled";
import { LogoDefault, Logo } from "../pictures/pictures";
import ArrowDown from "../pictures/arrow-down.svg";

const History = () => {
  return (
    <Container>
      <Header>
        <Button info>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
        <Button dropdown>
          Dulguun
          <img style={{ paddingLeft: "10px" }} src={ArrowDown} />
        </Button>
      </Header>
      <Body shortened>
        <LogoDefault />
        <Row>
          <Input placeholder="https://www.web-huudas.mn" />
          <Button>БОГИНОСГОХ</Button>
        </Row>
        <P fontSize={"xl"} colors={"green"} Weight={"bold"} Margin={"none"} ml>
          Түүх
        </P>
        <Box>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Өгөгдсөн холбоос:
            </P>
            <P>https://www.web-huudas.mn</P>
          </After>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Богино холбоос:
            </P>
            <Row>
              <P>shortly.io/wbmn12</P>
              <Button lined>Хуулж авах</Button>
            </Row>
          </After>
        </Box>
        <Box>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Өгөгдсөн холбоос:
            </P>
            <P>https://www.web-huudas.mn</P>
          </After>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Богино холбоос:
            </P>
            <Row>
              <P>shortly.io/wbmn12</P>
              <Button lined>Хуулж авах</Button>
            </Row>
          </After>
        </Box>
        <Box>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Өгөгдсөн холбоос:
            </P>
            <P>https://www.web-huudas.mn</P>
          </After>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Богино холбоос:
            </P>
            <Row>
              <P>shortly.io/wbmn12</P>
              <Button lined>Хуулж авах</Button>
            </Row>
          </After>
        </Box>
        <Box>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Өгөгдсөн холбоос:
            </P>
            <P>https://www.web-huudas.mn</P>
          </After>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Богино холбоос:
            </P>
            <Row>
              <P>shortly.io/wbmn12</P>
              <Button lined>Хуулж авах</Button>
            </Row>
          </After>
        </Box>
        <Box>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Өгөгдсөн холбоос:
            </P>
            <P>https://www.web-huudas.mn</P>
          </After>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Богино холбоос:
            </P>
            <Row>
              <P>shortly.io/wbmn12</P>
              <Button lined>Хуулж авах</Button>
            </Row>
          </After>
        </Box>
        <Box>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Өгөгдсөн холбоос:
            </P>
            <P>https://www.web-huudas.mn</P>
          </After>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Богино холбоос:
            </P>
            <Row>
              <P>shortly.io/wbmn12</P>
              <Button lined>Хуулж авах</Button>
            </Row>
          </After>
        </Box>
        <Box>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Өгөгдсөн холбоос:
            </P>
            <P>https://www.web-huudas.mn</P>
          </After>
          <After Margin={"none"}>
            <P fontSize={"sm"} default>
              Богино холбоос:
            </P>
            <Row>
              <P>shortly.io/wbmn12</P>
              <Button lined>Хуулж авах</Button>
            </Row>
          </After>
        </Box>
      </Body>
      <Footer Margin={"3"}>
        <p>Made with ♥️ by Nest Academy</p>
        <p style={{ color: "#CCCCCC" }}>©boginoo.io 2020</p>
      </Footer>
    </Container>
  );
};

export default History;
