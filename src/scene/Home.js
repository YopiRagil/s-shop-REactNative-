import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import ProdukHome from "../components/home/ProdukHomekHome";

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
      <View style={{ flex: 1, backgroundColor: "lavender" }}>
        <Navbar />
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              padding: 10,
            }}
          >
            {/* {this.props.isLoading
              ? null
              : this.props.produkData.map((item, index) => (
                  <View key={index}>
                    <ProdukHome
                      idProduk={item.id}
                      produk={item.product_name}
                      deskripsi={item.description}
                      gambar={item.picture}
                      harga={item.price}
                      doProdukDetail={(id, nama) => props.doDetail(id, nama)}
                    />
                  </View>
                ))} */}
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
