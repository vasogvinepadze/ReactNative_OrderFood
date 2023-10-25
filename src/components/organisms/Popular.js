import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import * as ROUTES from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";
const Container = styled.View``;

const Title = styled.Text`
  width: 130px;
  height: 57px;
  margin-top: 30px;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`;

const OrderFood = styled.View`
  width: 134px;
  height: 222px;
  background-color: #ebe8e8;
  flex-shrink: 0;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  left: 20px;
  border: 1px;
`;

const FoodTitle = styled.Text`
  width: 124px;
  height: 57px;
  flex-shrink: 0;
  padding-top: 5px;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

const Price = styled.Text`
  width: 92px;
  height: 26px;
  flex-shrink: 0;

  color: #caaa38;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-align: left;
`;

const PriceCont = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Popular = () => {
  const nav = useNavigation();
  const data = [
    {
      id: 0,
      title: "Broken Mush Pizza",
      price: 100,
      rate: 4.8,
      desc: "Crispy seasoned chicken breast, cheese, piled onto soft rolls with onion, avocado, lettuce.",
      imgUrl: require("../images/dsa.png"),
      quant: 1,
    },
    {
      id: 1,
      title: "Margarita Pizza",
      price: 130,
      rate: 4.9,
      desc: "delicious corn tortillas topped with beans, beef and all the delicious taco toppings",
      imgUrl: require("../images/marga.png"),
      quant: 1,
    },
    {
      id: 2,
      title: "McMushroom Pizza",
      price: 200,
      rate: 4.7,
      desc: "This pizza is layered in sauce (that comes together in seconds), quick sautéed mushrooms, onions and garlic, ribbons of lacinato kale and light layers of mozzarella",
      imgUrl: require("../images/xs.png"),
      quant: 1,
    },
    {
      id: 3,
      title: "Dessert",
      price: 120,
      rate: 5.0,
      desc: "Cakes are sweet tender breads made with sugar and delicate flour.",
      imgUrl: require("../images/cx.png"),
      quant: 1,
    },
  ];
  return (
    <Container>
      <Title>Popular</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate(ROUTES.CARD_DETAILS, { data: item });
            }}
          >
            <OrderFood>
              <Image source={item.imgUrl} />
              <View>
                <FoodTitle>{item.title}</FoodTitle>
              </View>
              <PriceCont>
                <Price>{item.price}$</Price>
                <Ionicons name="add-circle" size={24} color="green" />
              </PriceCont>
            </OrderFood>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default Popular;
