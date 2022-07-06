import React from "react";
import {Image, StyleSheet, View} from "react-native";
import "../../assets/icon.png";

function Loader() {
  return (
    <View style={styles.loader__container}>
      <Image
        style={styles.loader__image}
        source={require("../../assets/loader.gif")}
      />
    </View>
  );
}

export default Loader;

const styles = StyleSheet.create({
    loader__container: { alignItems: "center", width: "100%" },
    loader__image: { margin: 30, width: 30, height: 30 }
});