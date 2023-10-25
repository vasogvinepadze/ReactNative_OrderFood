import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import * as ROUTES from "../../constants/routes";
import { item } from "../organisms/Context";

const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;
const Main = styled.View`
  width: 230px;
  height: 57px;
  margin-top: 20px;
`;
const MainTitle = styled.Text`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

const MainView = styled.View`
  width: 130px;
  height: 115px;
  gap: 20px;
`;

const MainT = styled.Text`
  color: #202020;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const Price = styled.Text`
  color: #dcb21c;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

const OrderTitle = styled.Text`
  color: #515151;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const TextInp = styled.TextInput`
  width: 356px;
  height: 91px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #6c6c6c;
  background: #fff;
`;

const Total = styled.Text`
  color: #515151;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
`;

const TotalPrice = styled.Text`
  color: #dcb21c;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
`;

const Checkout = styled.View`
  width: 353px;
  height: 64px;
  border-radius: 25px;
  background: #6644ab;
  align-items: center;
  justify-content: center;

  margin: auto;
`;
const CheckoutText = styled.Text`
  width: 171px;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;
const Back = styled.View`
  width: 158px;
  height: 105px;
  margin: auto;
`;
const BackTitle = styled.Text`
  color: #515151;
  margin-top: 20px;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
`;
const Cart = ({ navigation }) => {
  const { myBag, setMyBag } = useContext(item);

  let totalAmount = 0;

  for (const i of myBag) {
    totalAmount = totalAmount + i.price;
  }

  return (
    <Container>
      <Main>
        <MainTitle>{myBag.length} items in cart</MainTitle>
      </Main>
      <View style={{ height: 350, flex: 1 }}>
        <FlatList
          data={myBag}
          renderItem={({ item }) => (
            <View
              style={{
                width: 400,
                padding: 10,
                margin: 10,
              }}
            >
              <View
                style={{
                  height: 130,
                  borderRadius: 20,
                  backgroundColor: "#eee",
                  alignItems: "center",
                  padding: 10,
                  width: "35%",
                  flexDirection: "row",
                  gap: 30,
                }}
              >
                <Image source={item.imgUrl} />
                <MainView>
                  <View
                    style={{
                      justifyContent: "space-between",
                      width: 220,
                      flexDirection: "row",
                    }}
                  >
                    <MainT>{item.title}</MainT>
                    <AntDesign
                      onPress={() => {
                        setMyBag(
                          myBag.filter((val) => val.title != item.title)
                        );
                      }}
                      name="closecircleo"
                      size={20}
                      color="red"
                    />
                  </View>

                  <Price>{item.price}$</Price>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity>
                      <AntDesign name="minuscircleo" size={22} color="blue" />
                    </TouchableOpacity>

                    <Text>1</Text>

                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" size={22} color="blue" />
                    </TouchableOpacity>
                  </View>
                </MainView>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ width: 288, height: 35, paddingHorizontal: 35 }}>
        <OrderTitle>Order Instructions</OrderTitle>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TextInp />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 40,
        }}
      >
        <Total>Total</Total>
        <TotalPrice>{totalAmount}$</TotalPrice>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.TRACK_ORDER_SCREEN);
        }}
      >
        <Checkout>
          <CheckoutText>Checkout</CheckoutText>
        </Checkout>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.HOME_SCREEN);
        }}
      >
        <Back>
          <BackTitle>Back to Home</BackTitle>
        </Back>
      </TouchableOpacity>
    </Container>
  );
};

export default Cart;
