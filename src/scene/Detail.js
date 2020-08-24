import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Card, Divider } from "react-native-paper";
import Navbar from "../components/Navbar";
import DetailProduk from "../components/detail/DetailProduk";
import { connect } from "react-redux";
import { getProduk, getProdukDetail } from "../store/action/produkAction";

class Detail extends Component {
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
          <View>
            {this.props.isLoading ? null : (
              <View>
                <DetailProduk />
              </View>
            )}
          </View>
        </ScrollView>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <Button
            icon="cart"
            mode="contained"
            style={{ height: 40, width: 200, margin: 10 }}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ height: 20, fontSize: 15 }}>Add to cart</Text>
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
  };
};
const mapDispatchToProps = {
  getProduk,
  getProdukDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
