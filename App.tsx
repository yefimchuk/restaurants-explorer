import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import store from "./bll/store";

import Articles from "./components/Articles";
import Header from "./components/Header";
import React from "react";

export default function App() {

    return (
        <Provider store={store}>
            <View style={styles.container}>
               <Header/>
                <ScrollView><Articles/></ScrollView>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
