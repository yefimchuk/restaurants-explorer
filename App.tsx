import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import store from "./bll/store";

import Articles from "./components/Articles";
import Header from "./components/Header";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./app.navigator";
import MyStack from "./app.navigator";

export default function App() {

    return (
        <Provider store={store}>

            <View style={styles.container}>

                    <MyStack/>

            </View>


        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
});
