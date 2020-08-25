import * as React from "react";
import { DataTable, Card, Button } from "react-native-paper";
import { Text } from "react-native";

const PaymentForProduk = (props) => {
  return (
    <Card style={{ margin: 10, borderRadius: 20 }}>
      <DataTable>
        <DataTable.Header
          style={{ backgroundColor: "darkblue", borderRadius: 20 }}
        >
          <DataTable.Title>
            <Text style={{ fontSize: 14, color: "white" }}>
              (Quantitiy) Produk
            </Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text style={{ fontSize: 14, color: "white" }}>Total Price</Text>
          </DataTable.Title>
        </DataTable.Header>
        {props.produkInCart.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>
              <Text style={{ fontSize: 13 }}>
                ({item.qty}) {item.product_name}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={{ fontSize: 13 }}> IDR {item.price * item.qty}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Header
          style={{ backgroundColor: "#cccccc", borderRadius: 20 }}
        >
          <DataTable.Title>
            <Text
              style={{ fontSize: 17, color: "darkblue", fontWeight: "bold" }}
            >
              Total
            </Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text
              style={{ fontSize: 17, color: "darkblue", fontWeight: "bold" }}
            >
              IDR{" "}
              {props.produkInCart.reduce(
                (sum, i) => (sum += i.price * i.qty),
                0
              )}
            </Text>
          </DataTable.Title>
        </DataTable.Header>
      </DataTable>
    </Card>
  );
};

export default PaymentForProduk;
