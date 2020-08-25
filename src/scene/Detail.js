import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import Navbar from "../components/Navbar";
import DetailProduk from "../components/detail/DetailProduk";
import { connect } from "react-redux";
import { getProduk, getProdukDetail } from "../store/action/produkAction";
import { addToCart } from "../store/action/cartAction";

class Detail extends Component {
  componentDidMount = async () => {
    this.props.getProduk();
  };
  handleProdukDetail = async (id, namaProduk) => {
    await this.props.history.push("/produk/" + namaProduk + "/" + id);
    this.props.getProdukDetail(id);
  };
  handleAddToCart = async (produk) => {
    this.props.addToCart(produk);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "lavender" }}>
        <Navbar />
        <ScrollView>
          <View>
            {this.props.isLoading ? null : (
              <View>
                <DetailProduk {...this.props} />
              </View>
            )}
          </View>
        </ScrollView>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          {this.props.produkInCart.filter(
            (item) => item.id === this.props.produkDetail[0].id
          ).length === 0 ? (
            <Button
              icon="cart"
              mode="contained"
              style={{ height: 40, width: 200, margin: 10 }}
              onPress={() => this.handleAddToCart(this.props.produkDetail[0])}
            >
              <Text style={{ height: 20, fontSize: 15 }}>Add to cart</Text>
            </Button>
          ) : (
            <Button
              icon="check"
              mode="contained"
              style={{
                height: 40,
                width: 200,
                margin: 10,
                backgroundColor: "green",
              }}
            >
              <Text style={{ height: 20, fontSize: 15 }}>Success</Text>
            </Button>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    produkDetail: state.produk.produkDetail,
    produkData: state.produk.produkData,
    isLoading: state.produk.isLoading,
    produkInCart: state.cart.produkInCart,
  };
};
const mapDispatchToProps = {
  getProduk,
  getProdukDetail,
  addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
