import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import ProdukHome from "../components/home/ProdukHome";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { getProduk, getProdukDetail } from "../store/action/produkAction";

class Home extends Component {
  componentDidMount = async () => {
    this.props.getProduk();
  };

  handleProdukDetail = async (id) => {
    await this.props.getProdukDetail(id);
    Actions.detail();
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "lavender" }}>
        <Navbar {...this.props} />
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              padding: 10,
            }}
          >
            {this.props.isLoading
              ? null
              : this.props.produkData.map((item, index) => (
                  <View key={index}>
                    <ProdukHome
                      idProduk={item.id}
                      produk={item.product_name}
                      deskripsi={item.description}
                      gambar={item.picture}
                      rate={item.rate}
                      harga={item.price}
                      doProdukDetail={(id) => this.handleProdukDetail(id)}
                    />
                  </View>
                ))}
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
  };
};
const mapDispatchToProps = {
  getProduk,
  getProdukDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
