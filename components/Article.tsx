import React from 'react';
import {Button, Text, View} from "react-native";

interface ArticleInterfaceProps {
    navigation?: any,
    data: object
}

interface DestructuringTypes {
    [propName: string]: any;
}

function Article({navigation, data}: ArticleInterfaceProps) {
    const {description, title, publishedAt, urlToImage, author, source}: DestructuringTypes = data
    return (
        <View style={{flexDirection: "column", margin: 15}}>
            <Text style={{fontWeight: "bold", fontSize: 20}}>{title}</Text>
            <Text style={{fontWeight: "300", fontSize: 17}}>{description}</Text>
            <Text style={{color: 'blue', fontWeight: '400', fontSize: 18,paddingTop: 5, textAlign: 'center'}} onPress={() => {

                navigation.setOptions({title: "hela"})
                navigation.navigate('AdditionalInfo', {
                    title,
                    description,
                    publishedAt,
                    urlToImage,
                    author,
                    source,
                })
            }}>click to detail information</Text>
        </View>
    );
}

export default Article;

