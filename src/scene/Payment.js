import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Divider, Avatar } from "react-native-paper";
import Navbar from "../components/Navbar";
import ProdukCart from "../components/cart/ProdukInCart";
import { connect } from "react-redux";
import { getProduk, getProdukDetail } from "../store/action/produkAction";
import { inputQty, addToCart, changeQty } from "../store/action/cartAction";

class Cart extends Component {
  componentDidMount = async () => {
    this.props.getProduk();
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "lavender" }}>
        <Navbar />
        <ScrollView>
          <View
            style={{
              paddingBottom: 20,
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Avatar.Icon size={40} icon="cart" />
            <Text
              style={{
                fontSize: 25,
                marginLeft: 10,
                textAlign: "center",
                paddingBottom: 1,
                color: "blue",
              }}
            >
              My Cart
            </Text>
          </View>
          {this.props.produkInCart
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
                qty={item.qty}
                chnageQtyProduk={(qty, id) => this.props.changeQty(qty, id)}
              />
            ))}
        </ScrollView>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Button
            icon="paypal"
            mode="contained"
            style={{ height: 40, width: 200, margin: 10 }}
            // onPress={() => this.handleAddToCart(this.props.produkDetail[0])}
          >
            <Text style={{ height: 20, fontSize: 15 }}>Go to payment</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    produkData: state.produk.produkData,
    isLoading: state.produk.isLoading,
    qtyOrder: state.cart.qtyOrder,
    produkInCart: state.cart.produkInCart,
  };
};
const mapDispatchToProps = {
  getProduk,
  getProdukDetail,
  inputQty,
  addToCart,
  changeQty,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
