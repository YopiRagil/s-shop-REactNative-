import * as React from "react";
import { Button, Card } from "react-native-paper";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CreateStar from "../Stars";

const ProdukHome = (props) => {
  const handleDetailofProduk = async (id) => {
    props.doProdukDetail(id);
  };
  return (
    <Card style={{ width: 160, height: 280, marginBottom: 10 }}>
      <Card.Cover
        style={{ width: 150, height: 170 }}
        source={{
          uri: props.gambar,
        }}
      />
      <Card.Content>
        <View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <CreateStar star={props.rate} />
          </View>
          <Text style={{ fontSize: 13, color: "grey", textAlign: "center" }}>
            IDR {props.harga}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom: 1,
            color: "darkblue",
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
            style={{ backgroundColor: "darkblue", borderRadius: 20 }}
            mode="contained"
            onPress={() => handleDetailofProduk(props.idProduk)}
          >
            <Text style={{ height: 20, fontSize: 10 }}>detail</Text>
          </Button>
        </View>
      </Card.Actions>
    </Card>
  );
};

export default ProdukHome;
