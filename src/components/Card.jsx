import { View, Text, Image, StyleSheet } from "react-native";

export default function Card() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/profilephoto/foto1.jpg")}
        style={styles.img}
      />
      <View>
        <Text style={styles.name}>Júlio dos Santos</Text>
        <Text style={styles.email}>juliodossantos123@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "12%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "80%",
    marginBottom: 15,
    flexDirection: "row",
    gap: 15
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: "100%",
  },
  name: {
    color: "#fff",
  },
  email: {
    color: "#afafaf",
  },
});
