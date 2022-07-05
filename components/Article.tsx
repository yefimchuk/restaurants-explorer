import React from 'react';
import {Button, Text, View} from "react-native";

function Article(props: { description: string, title: string, navigation?: any }) {
    console.log(props)
    return (
        <View style={{flexDirection: "column", padding: 15}}>
            <Text style={{fontWeight: "bold",}}>{props.title}</Text>
            <Text>{props.description}</Text>
            <Button title='click' onPress={() =>
                props.navigation.navigate('AdditionalInfo', {title: props.title})
            }/>
        </View>
    );
}

export default Article;