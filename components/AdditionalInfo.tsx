import React from 'react';
import {ActivityIndicator, Linking, ScrollView, Text, View} from "react-native";
import {Image} from "@rneui/themed";

;
import moment from "moment";


const AdditionalInfo = ({route}: any) => {
    let date = moment(new Date(route.params.publishedAt)).format('LLL');

    return <ScrollView>
        <Image
            source={{uri: route.params.urlToImage}}
            containerStyle={{

                aspectRatio: 1,
                width: '100%',
                height: 400
            }}
            PlaceholderContent={<ActivityIndicator/>}
        />
        <View style={{paddingTop: 15, margin: 10}}>

            <Text style={{fontWeight: 'bold', fontSize: 21}}>{route.params.title}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 19, marginTop: 5}}>{route.params.description}</Text>
            <View style={{flexDirection: 'column', paddingTop: 20}}>
                <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={{fontWeight: '600', fontSize: 18,}}>{route.params.source.name}</Text>
                    <Text style={{fontWeight: '300', fontSize: 17}}>{date}</Text>
                </View>

                <Text style={{fontWeight: '300', fontSize: 17,paddingTop: 10}}>{route.params.author}</Text>
            </View>

        </View>


    </ScrollView>
}

export default AdditionalInfo;