import * as React from "react";
import { View, Text } from "react-native";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";
import { Actions } from "react-native-router-flux";

const DialogPay = (props) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const handleClearCart = async () => {
    await hideDialog();
    Actions.home();
    props.clearMyCart();
  };
  return (
    <View>
      <Button
        mode="contained"
        onPress={showDialog}
        style={{
          height: 37,
          width: 110,
          marginRight: 10,
          borderRadius: 20,
          backgroundColor: "darkblue",
        }}
      >
        <Text style={{ height: 20, fontSize: 12 }}>Pay All</Text>
      </Button>
      <Portal style={{ backgroundColor: "lavender" }}>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title style={{ color: "darkblue" }}>
            Are you sure want to pay it?
          </Dialog.Title>
          <Dialog.Actions>
            <Button
              mode="contained"
              style={{
                backgroundColor: "darkred",
                width: 75,
                marginRight: 10,
                borderRadius: 20,
              }}
              onPress={hideDialog}
            >
              <Text>No</Text>
            </Button>
            <Button
              mode="contained"
              style={{
                backgroundColor: "darkblue",
                width: 75,
                borderRadius: 20,
              }}
              onPress={handleClearCart}
            >
              <Text>Yes</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogPay;
