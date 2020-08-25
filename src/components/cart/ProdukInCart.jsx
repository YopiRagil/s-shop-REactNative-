import * as React from "react";
import { Button, Card, TextInput, IconButton } from "react-native-paper";
import { Text, View } from "react-native";
import CreateStar from "../Stars";

const ProdukCart = (props) => {
  const [text, setText] = React.useState("");
  const handleChangeQty = async (num, id) => {
    if (num % 1 !== 0) {
      alert("Sorry, your input value is wrong!");
    } else if (num <= 0) {
      alert("Value must more than 0!");
    } else {
      props.chnageQtyProduk(num, id);
    }
    setText("");
  };
  return (
    <Card style={{ width: "100%", height: 210, marginBottom: 10 }}>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
        }}
      >
        <View>
          <Card.Cover
            style={{ width: 150, height: 170 }}
            source={{
              uri: props.gambar,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <CreateStar star={props.rate} />
          </View>
        </View>
        <Card.Content>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingBottom: 1,
              color: "darkblue",
            }}
          >
            {props.produk}
          </Text>
          <Text style={{ fontSize: 17, color: "black" }}>
            IDR {props.harga}
          </Text>
          <Text style={{ fontSize: 17, color: "darkblue" }}>
            Quantity: {props.qty}
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              style={{ width: 100, height: 30 }}
              label="Quantity"
              mode="outlined"
              keyboardType="numeric"
              placeholder="Quantity"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <IconButton
              style={{
                height: 32,
                width: 32,
                marginTop: 7,
                borderRadius: 30,
                backgroundColor: "darkblue",
              }}
              color="white"
              icon="plus"
              onPress={() => handleChangeQty(text, props.id)}
            />
          </View>
          <Button
            style={{ backgroundColor: "darkred", width: 100, marginTop: 10 }}
            icon="delete"
            mode="contained"
            onPress={() => props.deleteProduk(props.id)}
          >
            <Text style={{ height: 20, fontSize: 10 }}>Delete</Text>
          </Button>
        </Card.Content>
      </View>
    </Card>
  );
};

export default ProdukCart;
