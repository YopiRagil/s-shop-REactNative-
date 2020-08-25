import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import Home from "../scene/Home";
import Detail from "../scene/Detail";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import Cart from "../scene/Cart";
import Payment from "../scene/Payment";

class Route extends Component {
  render() {
    return (
      <PaperProvider>
        <ReduxProvider store={store}>
          <Router>
            <Scene key="root">
              <Scene
                key="home"
                component={Home}
                hideNavBar={true}
                title="Home"
                initial={true}
              />
              <Scene
                key="detail"
                component={Detail}
                path={"detail"}
                hideNavBar={true}
                title="detail"
              />
              <Scene
                key="cart"
                component={Cart}
                path={"cart"}
                hideNavBar={true}
                title="cart"
              />
              <Scene
                key="payment"
                component={Payment}
                path={"payment"}
                hideNavBar={true}
                title="payment"
              />
            </Scene>
          </Router>
        </ReduxProvider>
      </PaperProvider>
    );
  }
}

export default Route;
