import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card"

export default function App() {
  return (
    <>
      <View style={styles.tela}>
        <Header />
        <Card/>
        <Card/>
        <Card/>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%"
  },
});
