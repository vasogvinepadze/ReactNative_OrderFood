import React from "react";
import { styled } from "styled-components";
import Categories from "../organisms/Categories";
import Promotion from "../organisms/Promotion";
import Popular from "../organisms/Popular";

const Container = styled.ScrollView``;
const Con = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
`;
const Main = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 35px;
`;
const MenuTitle = styled.Text`
  width: 106px;
  height: 57px;
  color: #000;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
`;
const Img = styled.Image``;
const HomeScreen = () => {
  return (
    <Con>
      <Container>
        <Main>
          <MenuTitle>Menu</MenuTitle>
          <Img source={require("../images/person.png")} />
        </Main>
        <Categories />
        <Promotion />
        <Popular />
      </Container>
    </Con>
  );
};

export default HomeScreen;
