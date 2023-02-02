import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import pics from "../assets/Bool-logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={pics} />
      </Wrapper>
      <Buttons to="/">Upload Books</Buttons>
      <Menu>
        <FiMenu />
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media screen and (max-width: 500px) {
    width: 475px;
  }
`;
const Wrapper = styled.div`
  height: 60px;
  width: 80px;
  /* background-color: black; */
  display: flex;
  margin-left: 30px;

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 40px;
    display: flex;
    margin-left: 20px;
  }
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Buttons = styled(Link)`
  width: 200px;
  height: 50px;
  background-color: crimson;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 360ms;
  font-size: 20px;
  font-weight: 600;
  color: white;

  :hover {
    transform: scale(0.98);
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Menu = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
    font-size: 30px;
    margin-right: 15px;
  }
`;
