import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "styled-components";

const Container = styled.View``;
const Title = styled.Text`
  width: 170px;
  height: 57px;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`;
const Border = styled.View`
  width: 356px;
  margin: auto;
  height: 152px;
  flex-shrink: 0;
  border-radius: 20px;

  background-color: #7150db;
  display: flex;
  flex-direction: row;
`;
const BorderTitle = styled.Text`
  width: 113px;

  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
const FreeTitle = styled.Text`
  width: 136px;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;
const Orders = styled.Text`
  width: 219px;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
const Promotion = () => {
  return (
    <Container>
      <Title>Promotions</Title>
      <Border>
        <View style={{ gap: 10, padding: 5 }}>
          <BorderTitle>Today’s Offer</BorderTitle>
          <FreeTitle>Free box of Chicken legs</FreeTitle>
          <Orders>On all orders above Rs.100</Orders>
        </View>
        <View>
          <Image
            style={{ position: "relative", bottom: 45, right: 35 }}
            source={require("../images/chicken.png")}
          />
        </View>
      </Border>
    </Container>
  );
};

export default Promotion;
