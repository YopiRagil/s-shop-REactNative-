import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Text, View } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ProdukHome = () => {
  return (
    <Card style={{ width: 170 }}>
      <Card.Cover
        style={{ width: 170, height: 170 }}
        source={{
          uri:
            "https://cdn.shopclues.com/images1/thumbnails/94359/320/320/142099576-94359936-1540981165.jpg",
        }}
      />
      <Card.Content>
        <View style={{ flexDirection: "row" }}>
          <Text>IDR 10000000</Text>
          <Text>5 reviews</Text>
        </View>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default ProdukHome;
