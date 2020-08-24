import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const Navbar = () => (
  <Appbar.Header>
    <Appbar.Content title="S-Shop" subtitle={"smart-s"} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
  </Appbar.Header>
);

export default Navbar;
