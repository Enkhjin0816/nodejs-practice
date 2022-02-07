import styled from "styled-components";

const FontSizes = {
  sm: "16px",
  md: "18px",
  lg: "20px",
  xl: "32px"
};

const Width = {
  sm: "300px",
  lg: "260px"
};

const Colors = {
  green: "#02B589",
  grey: "#808080"
};

const Weights = {
  normal: "400",
  bold: "700"
};

const Margins = {
  none: "0",
  "0": "24%",
  "1": "34%",
  "2": "35%"
};

const Button = styled.button`
  background-color: ${(props) =>
    props.info || props.lined || props.dropdown ? "white" : "#02B589"};
  border-radius: 20px;
  font-size: 1em;
  margin: ${(props) => (props.lined ? "none" : "1em")};
  padding: ${(props) => (props.lined ? "0px" : "12px")}
    ${(props) => (props.longButton ? "130px" : props.lined ? "none" : "50px")};
  border: none;
  color: ${(props) =>
    props.info || props.lined
      ? "#02B589"
      : props.dropdown
      ? "black"
      : "#FFFFFF"};
  text-decoration: ${(props) => (props.lined ? "underline" : "none")};
  font-size: ${(props) => (props.lined ? FontSizes["md"] : FontSizes["lg"])};
  font-weight: ${(props) => (props.lined ? "400" : "700")};
  cursor: pointer;
`;

const Dropdown = styled.div`
    background-color: ${Colors['green']};
    height: 50px;
    border-radius: 30px;
    color: white;
    font-size: 20px;
    cursor: pointer; 
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
  height: 45px;
  width: ${(props) => (props.small ? "380px" : "580px")};
  border-radius: 30px;
  border: 3px solid #f0f0f0;
  box-shadow: 0px 0px 10px #f0f0f0;
  padding-left: 20px;
  font-size: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 20%;
`;

const Body = styled.body`
  transform: translate(
    0px,
    ${(props) =>
      props.shortened
        ? "10%"
        : props.login || props.signUp
        ? "0%"
        : props.ForgotPass
        ? "20%"
        : "50%"}
  );
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Footer = styled.footer`
  margin-top: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => (props.Width ? Width[props.Width] : "fit-content")};
`;

const Results = styled.div`
  transform: translate(-80%, 0%);
  height: 230px;
  width: fit-content;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: space-between;
`;

const After = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-between;
  margin-top: 30px;
`;

const P = styled.text`
  font-size: ${(props) =>
    props.fontSize ? FontSizes[props.fontSize] : FontSizes.lg};
  color: ${(props) =>
    props.default
      ? Colors.grey
      : props.colors
      ? Colors[props.colors]
      : "black"};
  padding-right: ${props => props.ml ? "-20%" : "20px"};
  margin-left: ${(props) =>
    props.Margin
      ? Margins[props.Margin]
      : props.Width
      ? "80px"
      : props.ml
      ? "100%"
      : "25px"};
  margin-top: ${(props) =>
    props.Margin ? "30px" : props.Width ? "30px" : "-5px"};
  margin-bottom: ${(props) =>
    props.Margin ? "10px" : props.Width ? "10px" : "5px"};
  font-weight: ${(props) =>
    props.Weight ? Weights[props.Weight] : Weights.normal};
  width: ${(props) => (props.Width ? Width[props.Width] : "fit-content")};
  text-align: center;
`;

const Column = styled.div`
  display: flex;
  heigth: fit-content;
  width: fit-content;
  flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 790px;
  border: none;
  border-bottom: 1px solid #e2e2e2;
  margin-top: 40px;
  padding: 10px;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export {
  Button,
  Input,
  Header,
  Body,
  Footer,
  Row,
  Results,
  P,
  After,
  Column,
  Box,
  Dropdown
};
