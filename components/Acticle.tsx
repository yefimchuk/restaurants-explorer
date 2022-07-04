import React from 'react';
import {Text, View} from "react-native";

function Article(props: { description: string, title: string }) {

    return (
        <View style={{flexDirection: "column", padding: 15}}>
            <Text style={{fontWeight: "bold", }}>{props.title}</Text>
            <Text>{props.description}</Text>
        </View>
    );
}

export default Article;