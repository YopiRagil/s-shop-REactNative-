import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Button, Avatar, Divider } from "react-native-paper";
import Navbar from "../components/Navbar";
import { Actions } from "react-native-router-flux";
import ProdukCart from "../components/cart/ProdukInCart";
import { connect } from "react-redux";
import { getProduk, getProdukDetail } from "../store/action/produkAction";
import {
  addToCart,
  changeQty,
  deleteFromCart,
} from "../store/action/cartAction";

class Cart extends Component {
  componentDidMount = async () => {
    this.props.getProduk();
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "lavender" }}>
        <Navbar {...this.props} />
        <ScrollView>
          <View
            style={{
              paddingBottom: 20,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Avatar.Icon
              size={40}
              icon="cart"
              style={{ backgroundColor: "darkblue" }}
            />
            <Text
              style={{
                fontSize: 25,
                marginLeft: 10,
                textAlign: "center",
                paddingBottom: 1,
                color: "darkblue",
              }}
            >
              My Cart
            </Text>
          </View>
          {this.props.produkInCart.length === 0 ? (
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Divider
                style={{
                  height: 3,
                  marginTop: 10,
                  backgroundColor: "mediumpurple",
                  width: "80%",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "darkblue",
                }}
              >
                Your cart is empty!
              </Text>
              <View style={{ flexDirection: "row-reverse" }}>
                <Divider
                  style={{
                    height: 3,
                    marginTop: 10,
                    backgroundColor: "mediumpurple",
                    width: "80%",
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: 250, height: 250 }}
                  source={require("../assets/emptycart.png")}
                />
              </View>
              <Divider
                style={{
                  height: 3,
                  marginTop: 10,
                  backgroundColor: "mediumpurple",
                  width: "80%",
                }}
              />
            </View>
          ) : (
            this.props.produkInCart
              .slice()
              .reverse()
              .map((item, key) => (
                <ProdukCart
                  key={key}
                  id={item.id}
                  produk={item.product_name}
                  deskripsi={item.description}
                  gambar={item.picture}
                  harga={item.price}
                  rate={item.rate}
                  qty={item.qty}
                  chnageQtyProduk={(qty, id) => this.props.changeQty(qty, id)}
                  deleteProduk={(id) => this.props.deleteFromCart(id)}
                />
              ))
          )}
        </ScrollView>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          {this.props.produkInCart.length === 0 ? (
            <Button
              icon="paypal"
              disabled={true}
              mode="contained"
              style={{
                height: 40,
                width: 200,
                margin: 10,
                borderRadius: 20,
              }}
            >
              <Text style={{ height: 20, fontSize: 15 }}>Go to payment</Text>
            </Button>
          ) : (
            <Button
              icon="paypal"
              mode="contained"
              onPress={() => Actions.payment()}
              style={{
                height: 40,
                width: 200,
                margin: 10,
                backgroundColor: "darkblue",
                borderRadius: 20,
              }}
            >
              <Text style={{ height: 20, fontSize: 15 }}>Go to payment</Text>
            </Button>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.produk.isLoading,
    isLoading: state.cart.isLoading,
    qtyOrder: state.cart.qtyOrder,
    produkInCart: state.cart.produkInCart,
  };
};
const mapDispatchToProps = {
  getProduk,
  getProdukDetail,
  addToCart,
  changeQty,
  deleteFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
