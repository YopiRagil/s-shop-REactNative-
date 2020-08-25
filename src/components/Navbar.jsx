import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";
import { Actions } from "react-native-router-flux";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function Navbar() {
  return (
    <Appbar.Header>
      <Appbar.Content
        onPress={() => Actions.home()}
        title="S-Shop"
        subtitle={"smart-s"}
      />
      <Appbar.Action icon="cart" onPress={() => Actions.cart()} />
      <Appbar.Action icon={MORE_ICON} onPress={() => Actions.detail()} />
    </Appbar.Header>
  );
}
