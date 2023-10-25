import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import * as ROUTES from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";

const Container = styled.SafeAreaView`
  background-color: #6644ab;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const Main = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 350px;
  background: #fff;
  width: 302px;
  height: 350px;
`;

const Img = styled.Image``;

const TitleWrapper = styled.View`
  width: 247px;
  height: 209px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
`;

const Started = styled.View`
  width: 221px;
  height: 60px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.85);
  align-items: center;
  justify-content: center;
`;
const StartedTitle = styled.Text`
  width: 171px;
  height: 30px;
  color: #6644ab;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;

const SplashScreen = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate(ROUTES.TABS_NAVIGATOR);
    }, 2000);
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Main>
          <Img source={require("../images/food.png")} />
        </Main>
      </ImageContainer>
      <TitleWrapper>
        <Title>ENJOY YOUR FOOD</Title>
      </TitleWrapper>
      <Started>
        <StartedTitle>Welcome</StartedTitle>
      </Started>
    </Container>
  );
};

export default SplashScreen;
