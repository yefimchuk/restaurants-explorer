import React from "react";
import {ActivityIndicator, ScrollView, StyleSheet, Text, View} from "react-native";
import {Image} from "@rneui/themed";
import moment from "moment";

const AdditionalInfo = ({route}: any) => {
    const date = moment(new Date(route.params.publishedAt)).format("LLL");

    return (
        <ScrollView>
            <View style={styles.image}>
                <Image
                    source={{uri: route.params.urlToImage}}
                    containerStyle={styles.imageContainer}
                    PlaceholderContent={<ActivityIndicator/>}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>
                    {route.params.title}
                </Text>
                <Text style={styles.description}>
                    {route.params.description}
                </Text>
                <View style={styles.flexbox}>
                    <View
                        style={styles.flexbox__row}
                    >
                        <Text style={styles.source}>
                            {route.params.source.name}
                        </Text>
                        <Text style={styles.dateTime}>{date}</Text>
                    </View>

                    <Text style={styles.author}>
                        {route.params.author}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default AdditionalInfo;

const styles = StyleSheet.create({
    image: {alignItems: "center"},
    imageContainer: {
        aspectRatio: 1,
        width: "100%",
    },
    container: {paddingTop: 15, margin: 10},
    title: {fontWeight: "bold", fontSize: 21},
    author: {fontWeight: "300", fontSize: 17, paddingTop: 10},
    dateTime: {fontWeight: "300", fontSize: 17},
    source: {fontWeight: "600", fontSize: 18},
    description: {fontWeight: "normal", fontSize: 19, marginTop: 5},
    flexbox: {flexDirection: "column", paddingTop: 20},
    flexbox__row: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
});

