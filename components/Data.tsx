import React, {Component, useState} from 'react'
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {Button, Text, View} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {fetchArticles} from "../bll/reducer/articles.slice";
import {useDispatch} from "react-redux";


const MyDatePicker = () => {

    const [date, setDate] = useState(new Date)
    const [fullDate, setFullDate] = useState('')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {

        const currDate = selectedDate || date
        setDate(currDate)
        const tempDate = new Date(currDate)
        const FDate = tempDate.getFullYear() + "-" + (12 - tempDate.getMonth()) + '-' + tempDate.getDay()
        setFullDate(FDate)
        setShow(false)
        dispatch(fetchArticles({FDate}))
    }


    return (
        <View style={{width: 100}}>

            <Button title='Pick date' onPress={() => setShow(true)}/>

            {show && <RNDateTimePicker testID='dataTimePicker' style={{width: 100}}
                                       value={date} mode='date' is24Hour={true} display={"default"}
                                       onChange={(event, date) => onChange(event, date)}/>}


        </View>

    )

}
export default MyDatePicker