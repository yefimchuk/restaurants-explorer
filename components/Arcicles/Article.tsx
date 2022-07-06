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
        Click to detail information
      </Text>
    </View>
  );
}

export default Article;

const styles = StyleSheet.create({
  article: { flexDirection: "column", margin: 15 },
  description: { fontWeight: "300", fontSize: 17 },
  title: { fontWeight: "bold", fontSize: 20 },
  additionalPage: {
    color: "blue",
    fontWeight: "400",
    fontSize: 18,
    paddingTop: 8,
    textAlign: "center",
  },
});