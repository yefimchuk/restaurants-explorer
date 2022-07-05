import React from 'react';
import SelectList from 'react-native-dropdown-select-list'
import {View} from "react-native";

let Example = () => {

    const [selected, setSelected] = React.useState("");

    const data = [{key: '1', value: 'relevancy'},
        {key: '2', value: 'popularity'},
        {key: '3', value: 'publishedAt'}];

    return <View style={{}}>
        <SelectList placeholder={'sort by'} data={data} p setSelected={setSelected}/>
    </View>


}
export default Example