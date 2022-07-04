import React from 'react';
import {Image, View} from "react-native";
import "./../assets/icon.png"

function Loader() {
    return (
        <View style={{alignItems: "center", width: "100%"}}>
            <Image
                style={{ margin: 30, width: 30,
                    height: 30,}}
                source={require('../assets/loader.gif')}
            />
        </View>
    );
}

export default Loader;