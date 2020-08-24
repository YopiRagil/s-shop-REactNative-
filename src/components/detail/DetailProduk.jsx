import * as React from "react";
import { Button, Card, Divider } from "react-native-paper";
import { Text, View } from "react-native";

const DetailProduk = (props) => {
  return (
    <Card
      style={{
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <Divider
        style={{
          height: 3,
          marginTop: 10,
          backgroundColor: "mediumpurple",
          width: "60%",
          marginTop: 20,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: 1,
          color: "blueviolet",
        }}
      >
        NAma Produk Disini
      </Text>
      <View style={{ flexDirection: "row-reverse" }}>
        <Divider
          style={{
            height: 3,
            marginTop: 10,
            backgroundColor: "mediumpurple",
            width: "60%",
          }}
        />
      </View>
      <Card.Cover
        style={{
          width: 300,
          height: 300,
          flex: 1,
          marginVertical: 10,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        source={{
          uri:
            "https://mobilemoj.com/wp-content/uploads/2020/03/Samsung-Galaxy-S11-Plus.jpg",
        }}
      />
      <Divider
        style={{
          height: 3,
          marginTop: 10,
          backgroundColor: "mediumpurple",
          width: "60%",
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: "bold",
          color: "gray",
        }}
      >
        IDR 4000000
      </Text>
      <View style={{ flexDirection: "row-reverse" }}>
        <Divider
          style={{
            height: 3,
            marginTop: 10,
            backgroundColor: "mediumpurple",
            width: "60%",
          }}
        />
      </View>
      <Card
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          backgroundColor: "lavender",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            margin: 10,
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
            color: "darkorchid",
          }}
        >
          Detail Produk
        </Text>
        <Text
          style={{
            margin: 10,
            color: "black",
            fontSize: 13,
            textAlign: "justify",
          }}
        >
          List.Accordion can be wrapped because impleme ntation uses
          React.Context. List.Accordion can be wrapped because impleme ntation
          uses React.Context. List.Accordion can be wrapped because implem
          entation uses React.Context. List.Accordion can be wrapped because
          impleme ntation uses React.Context.1
        </Text>
      </Card>
    </Card>
  );
};

export default DetailProduk;
