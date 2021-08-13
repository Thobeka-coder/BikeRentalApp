import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Thobeka's Bike Rentals</Text>
      <Image
        resizeMode="contain"
        style={styles.location}
        source={require("./assets/location1.jpg")}
      />
      <Image
        resizeMode="contain"
        style={styles.bike2}
        source={require("./assets/bike1.jpg")}
      />

      <TouchableOpacity>
        <Text style={styles.btn}>RENTER</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn}>RENTEE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F7F2",
    alignItems: "center",
    justifyContent: "center",
  },

  heading: {
    color: "#4C75EC",
    fontSize: 28,
    fontWeight: "bold",
    position: "absolute",
    top: 50,
  },

  location: {
    height: 150,
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 100,
  },
  bike2: {
    height: 150,
    width: 380,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 300,
  },

  btn: {
    width: 200,
    marginVertical: 20,
    backgroundColor: "#4C75EC",
    borderRadius: 25,
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
    fontSize: 16,
    bottom: -220,
  },
});
