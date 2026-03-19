import { StyleSheet, Text, View } from "react-native";

export default function InventoryScreen() {
  return (
    <View style={styles.screen}>
      <Text>Inventory Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
