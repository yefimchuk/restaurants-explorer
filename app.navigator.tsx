import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Articles from "./components/Articles";
import AdditionalInfo from "./components/AdditionalInfo";
import {Button, View, Text} from "react-native";
import Article from "./components/Article";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Articles"
                    component={Articles}

                />
                <Stack.Screen name="AdditionalInfo" component={AdditionalInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const HomeScreen = ({navigation}: any) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('AdditionalInfo', {name: 'Jane'})
            }
        />
    );
};
const ProfileScreen = ({navigation, route}: any) => {
    return <Text>This is s profile</Text>

};
export default MyStack