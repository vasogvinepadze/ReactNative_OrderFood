import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styled } from "styled-components";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as ROUTES from "../../constants/routes";
import { item } from "../organisms/Context";

const Container = styled.ScrollView`
  background-color: #6644ab;
`;
const Main = styled.View`
  background-color: #6644ab;
  height: 466px;
  align-items: center;
  justify-content: center;
`;

const ContentPlace = styled.View`
  height: 470px;

  border-top-left-radius: 50px;
  background: #fff;
`;

const Rate = styled.View`
  width: 100px;
  height: 52px;
  border-radius: 40px;
  background: #6644ab;
  margin: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const RateNumber = styled.Text`
  width: 45px;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;
const Price = styled.View`
  margin: 40px;
`;
const PriceText = styled.Text`
  width: 78px;
  height: 46px;
  color: #caaa38;
  text-align: right;
  font-size: 24px;
  font-weight: 700;
`;

const Description = styled.View`
  width: 356px;
  height: 71px;
  margin-left: 35px;
  gap: 10px;
`;
const DescTitle = styled.Text`
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
`;
const DescriptionTitle = styled.Text`
  color: #767676;
  font-size: 22px;
  font-weight: 300;
`;

const Add = styled.View`
  margin: 35px;
  width: 110px;
  height: 20px;
`;
const AddOn = styled.Text`
  color: #7b7b7b;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

const AddToCart = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;

const CardDetails = ({ route, navigation }) => {
  const { myBag, setMyBag } = useContext(item);
  const content = route.params.data;
  console.log(content);
  const data = [
    {
      id: 0,
      imgUrl: require("../images/pl.png"),
    },
    {
      id: 1,
      imgUrl: require("../images/cola.png"),
    },
    {
      id: 2,
      imgUrl: require("../images/free.png"),
    },
  ];

  return (
    <Container>
      <Main>
        <View
          style={{
            height: 350,
            width: 355,
            borderRadius: 350,
            backgroundColor: "#462B9C",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image style={{ height: 150, width: 150 }} source={content.imgUrl} />
        </View>
      </Main>
      <ContentPlace>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Rate>
            <Entypo name="star" size={24} color="yellow" />
            <RateNumber>{content.rate}</RateNumber>
          </Rate>
          <Price>
            <PriceText>{content.price}$</PriceText>
          </Price>
        </View>
        <Description>
          <DescTitle>{content.title}</DescTitle>
          <DescriptionTitle>{content.desc}</DescriptionTitle>
        </Description>
        <Add>
          <AddOn>Add Ons</AddOn>
        </Add>
        <View>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    backgroundColor: "#eee",
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 30,
                  }}
                >
                  <Image source={item.imgUrl} />
                  <AntDesign
                    style={{
                      position: "absolute",
                      bottom: -5,
                      right: -15,
                      width: 28,
                      height: 28,
                    }}
                    name="pluscircle"
                    size={24}
                    color="green"
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setMyBag([...myBag, content]);
            navigation.navigate(ROUTES.CART);
          }}
          style={{
            width: 353,
            height: 64,
            borderRadius: 25,
            backgroundColor: "#6644AB",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginHorizontal: 35,
          }}
        >
          <AddToCart>Add to Carts</AddToCart>
        </TouchableOpacity>
      </ContentPlace>
    </Container>
  );
};

export default CardDetails;
