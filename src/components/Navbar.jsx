import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";
import { Actions } from "react-native-router-flux";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const Navbar = (props) => (
  <Appbar.Header>
    <Appbar.Content
      onPress={Actions.home()}
      title="S-Shop"
      subtitle={"smart-s"}
    />
    <Appbar.Action
      onPress={Actions.detail()}
      icon="magnify"
      onPress={() => {}}
    />
    <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
  </Appbar.Header>
);

export default Navbar;
