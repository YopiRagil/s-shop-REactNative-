import * as React from "react";
import { Button, Card } from "react-native-paper";
import { Text, View } from "react-native";

const ProdukHome = (props) => {
  return (
    <Card style={{ width: 160, height: 260, marginBottom: 10 }}>
      <Card.Cover
        style={{ width: 150, height: 170 }}
        source={{
          uri: props.gambar,
        }}
      />
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 11, color: "grey" }}>IDR {props.harga}</Text>
          <Text style={{ fontSize: 11, color: "grey" }}>5 reviews</Text>
        </View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom: 1,
            color: "blueviolet",
          }}
        >
          {props.produk}
        </Text>
      </Card.Content>
      <Card.Actions>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Button
            icon="more"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ height: 20, fontSize: 10 }}>detail</Text>
          </Button>
        </View>
      </Card.Actions>
    </Card>
  );
};

export default ProdukHome;
