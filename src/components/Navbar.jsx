import * as React from "react";
import { Appbar, Avatar } from "react-native-paper";
import { Platform } from "react-native";
import { Actions } from "react-native-router-flux";

export default function Navbar(props) {
  return (
    <Appbar.Header style={{ backgroundColor: "darkblue" }}>
      {props.title === "Home" ? null : (
        <Appbar.Action icon="arrow-left" onPress={() => Actions.pop()} />
      )}
      <Avatar.Icon
        size={50}
        icon="cellphone"
        style={{ backgroundColor: "darkblue" }}
        onPress={() => Actions.home()}
      />
      <Appbar.Content
        onPress={() => Actions.home()}
        title="S-Shop"
        style={{ marginLeft: -20 }}
      />
      {props.title === "cart" ? null : (
        <Appbar.Action icon="cart" onPress={() => Actions.cart()} />
      )}
    </Appbar.Header>
  );
}
