import React from 'react';
import {Text, View} from "react-native";

const AdditionalInfo = ({navigation, route}: any) => (
    <View>
        <Text>{route.params.title}</Text>
    </View>
)

export default AdditionalInfo;