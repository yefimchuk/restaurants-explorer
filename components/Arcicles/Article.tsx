import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ArticleInterfaceProps,
  DestructuringArticleTypes,
} from "../../types/acticle.types";

function Article({ navigation, data }: ArticleInterfaceProps) {
  const {
    description,
    title,
    publishedAt,
    urlToImage,
    author,
    source,
  }: DestructuringArticleTypes = data;
  return (
    <View style={styles.article}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text
        style={styles.additionalPage}
        onPress={() => {
          navigation.navigate("AdditionalInfo", {
            title,
            description,
            publishedAt,
            urlToImage,
            author,
            source,
          });
        }}
      >
        click to detail information
      </Text>
    </View>
  );
}

export default Article;

const styles = StyleSheet.create({
  article: { flexDirection: "column", margin: 15 },
  title: { fontWeight: "300", fontSize: 17 },
  description: { fontWeight: "bold", fontSize: 20 },
  additionalPage: {
    color: "blue",
    fontWeight: "400",
    fontSize: 18,
    paddingTop: 5,
    textAlign: "center",
  },
});
