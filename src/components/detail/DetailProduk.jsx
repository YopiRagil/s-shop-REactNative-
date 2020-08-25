import * as React from "react";
import { Button, Card, Divider } from "react-native-paper";
import { Text, View } from "react-native";
import CreateStar from "../Stars";

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
          color: "darkblue",
        }}
      >
        {props.produkDetail[0].product_name}
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
          uri: props.produkDetail[0].picture,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <CreateStar star={props.produkDetail[0].rate} />
      </View>
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
          color: "darkblue",
        }}
      >
        IDR {props.produkDetail[0].price}
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
            color: "darkblue",
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
          {props.produkDetail[0].description}
        </Text>
      </Card>
    </Card>
  );
};

export default DetailProduk;
