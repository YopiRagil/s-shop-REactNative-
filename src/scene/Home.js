import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import ProdukHome from "../components/ProdukHome";

import { connect } from "react-redux";
import { getProduk, getProdukDetail } from "../store/action/produkAction";

class Home extends Component {
  componentDidMount = async () => {
    this.props.getProduk();
  };

  handleProdukDetail = async (id, namaProduk) => {
    await this.props.history.push("/produk/" + namaProduk + "/" + id);
    this.props.getProdukDetail(id);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navbar />
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              // flexWrap: "nowrap",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <ProdukHome />
            <ProdukHome />
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
// export default Home
