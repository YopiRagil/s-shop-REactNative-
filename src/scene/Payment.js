import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Divider, Avatar } from "react-native-paper";
import Navbar from "../components/Navbar";
import PaymentForProduk from "../components/payment/PaymentProduk";
import { connect } from "react-redux";
import { getProduk, getProdukDetail } from "../store/action/produkAction";
import { addToCart, changeQty, clearCart } from "../store/action/cartAction";
import { Actions } from "react-native-router-flux";
import DialogPay from "../components/payment/DialogPay";

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
              icon="paypal"
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
              Payment
            </Text>
          </View>

          <PaymentForProduk {...this.props} />
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Button
              icon=""
              mode="contained"
              onPress={() => Actions.pop()}
              style={{
                height: 37,
                width: 110,
                marginRight: 10,
                borderRadius: 20,
                backgroundColor: "darkred",
              }}
            >
              <Text style={{ height: 20, fontSize: 12 }}>Cancel</Text>
            </Button>
            <DialogPay clearMyCart={() => this.props.clearCart()} />
          </View>
        </ScrollView>
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
  addToCart,
  changeQty,
  clearCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
