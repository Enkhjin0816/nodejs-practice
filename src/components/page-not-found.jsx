import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Button,
  Input,
  Header,
  Body,
  Footer,
  Row,
  P,
  Column
} from "../styles/style";
import Container from "../styles/Container.styled";
import { LogoDefault, Logo } from "../pictures/pictures";

const Page_not_found = () => {
  return (
    <Container>
      <Column>
        <LogoDefault />
        <P fontSize={"xl"} colors={"green"}>
          Page Not Found \_(o-o )_/
        </P>
      </Column>
    </Container>
  );
};

export default Page_not_found;
