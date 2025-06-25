import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import icedCoffee from "@/assets/images/iced-coffee.png";

import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffee}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>Coffee shop</Text>

        <Link href="/menu" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Our Menu</Text>
          </Pressable>
        </Link>

        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginBottom: 120,
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: 6,
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});
