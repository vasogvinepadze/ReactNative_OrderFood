import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styled } from "styled-components";

const FoodText = styled.Text`
  width: 80px;
  height: 35px;
  color: #6644ab;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  margin-top: 10px;
`;

const Categories = () => {
  const [selected, setSelected] = useState(0);

  const data = [
    { id: 0, FoodName: "All", imgUrl: require("../images/Rectangle3.png") },
    { id: 1, FoodName: "Burger", imgUrl: require("../images/burger.png") },
    { id: 2, FoodName: "Pizza", imgUrl: require("../images/pizza.png") },
    { id: 3, FoodName: "Dessert", imgUrl: require("../images/dessert.png") },
  ];

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setSelected(index);
          }}
          style={{ alignItems: "center", marginLeft: 22 }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,

              alignItems: "center",
              justifyContent: "center",
              backgroundColor: selected === index ? "#6644AB" : "#eee",
            }}
          >
            <Image
              style={{ width: 66, height: 60, borderRadius: 20 }}
              source={item.imgUrl}
            />
          </View>
          <FoodText>{item.FoodName}</FoodText>
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;
