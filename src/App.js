import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card"

export default function App() {
  return (
    <>
      <View style={styles.tela}>
        <Header />
        <Card
          avatar={require('../assets/profilephoto/foto1.jpg')}
          name={"joao"}
          email={"joaosilva@gmail.com"}
        />
        <Card
          avatar={require('../assets/profilephoto/foto2.jpg')}
          name={"felipe"}
          email={"felipesilva@gmail.com"}
        />
        <Card
          avatar={require('../assets/profilephoto/foto3.jpg')}
          name={"lucas"}
          email={"lucassilva@gmail.com"}
        />
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
