import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import Home from "../scene/Home";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";

class Route extends Component {
  render() {
    return (
      <PaperProvider>
        <ReduxProvider store={store}>
          <Router>
            <Stack key="root">
              <Scene
                key="home"
                component={Home}
                hideNavBar={true}
                title="Home"
                initial={true}
              />
            </Stack>
          </Router>
        </ReduxProvider>
      </PaperProvider>
    );
  }
}

export default Route;
